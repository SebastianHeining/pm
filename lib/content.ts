import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const TEAM_DIR = path.join(process.cwd(), "content/team");
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const BEWERTUNGEN_DIR = path.join(process.cwd(), "content/bewertungen");

export type Abteilung = "therapie" | "empfang";

export type TeamMember = {
  slug: string;
  name: string;
  rolle: string;
  bild: string;
  abteilung: Abteilung;
  reihenfolge: number;
  seitJahr?: number;
  qualifikationen: string[];
  spezialisierung?: string;
  notiz?: string;
  bio?: string;
};

async function readDir(dir: string) {
  try {
    return await fs.readdir(dir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function loadTeam(): Promise<TeamMember[]> {
  const files = (await readDir(TEAM_DIR)).filter((f) => f.endsWith(".md"));
  const members: TeamMember[] = [];

  for (const file of files) {
    const raw = await fs.readFile(path.join(TEAM_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.md$/, "");

    members.push({
      slug,
      name: String(data.name ?? "Name?"),
      rolle: String(data.rolle ?? ""),
      bild: String(data.bild ?? ""),
      abteilung: (data.abteilung === "empfang" ? "empfang" : "therapie"),
      reihenfolge: Number(data.reihenfolge ?? 99),
      seitJahr: data.seitJahr ? Number(data.seitJahr) : undefined,
      qualifikationen: Array.isArray(data.qualifikationen)
        ? data.qualifikationen.map(String)
        : [],
      spezialisierung: data.spezialisierung
        ? String(data.spezialisierung)
        : undefined,
      notiz: data.notiz ? String(data.notiz) : undefined,
      bio: content.trim() || undefined,
    });
  }

  members.sort((a, b) => a.reihenfolge - b.reihenfolge);
  return members;
}

export type BlogPost = {
  slug: string;
  titel: string;
  datum: string;
  autor: string;
  kategorie: string;
  coverBild?: string;
  kurzbeschreibung: string;
  veroeffentlicht: boolean;
  htmlContent: string;
  readingTimeMinutes: number;
};

export type BlogIndexEntry = Omit<BlogPost, "htmlContent">;

function estimateReadingTime(plainText: string) {
  const words = plainText.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

async function markdownToHtml(md: string): Promise<string> {
  const file = await remark().use(remarkHtml, { sanitize: false }).process(md);
  return String(file);
}

export async function loadBlogPosts(): Promise<BlogIndexEntry[]> {
  const files = (await readDir(BLOG_DIR)).filter((f) => f.endsWith(".md"));
  const posts: BlogIndexEntry[] = [];

  for (const file of files) {
    const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.md$/, "");
    const veroeffentlicht = data.veroeffentlicht !== false;
    if (!veroeffentlicht) continue;

    posts.push({
      slug,
      titel: String(data.titel ?? slug),
      datum: String(data.datum ?? ""),
      autor: String(data.autor ?? "Praxis Mally"),
      kategorie: String(data.kategorie ?? "Praxis"),
      coverBild: data.coverBild ? String(data.coverBild) : undefined,
      kurzbeschreibung: String(data.kurzbeschreibung ?? ""),
      veroeffentlicht: true,
      readingTimeMinutes: estimateReadingTime(content),
    });
  }

  posts.sort((a, b) => (a.datum < b.datum ? 1 : -1));
  return posts;
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  let raw: string;
  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
  const { data, content } = matter(raw);
  if (data.veroeffentlicht === false) return null;

  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    titel: String(data.titel ?? slug),
    datum: String(data.datum ?? ""),
    autor: String(data.autor ?? "Praxis Mally"),
    kategorie: String(data.kategorie ?? "Praxis"),
    coverBild: data.coverBild ? String(data.coverBild) : undefined,
    kurzbeschreibung: String(data.kurzbeschreibung ?? ""),
    veroeffentlicht: true,
    readingTimeMinutes: estimateReadingTime(content),
    htmlContent,
  };
}

export type Bewertung = {
  slug: string;
  name: string;
  ort?: string;
  sterne: number;
  datum: string;
  text: string;
};

export async function loadBewertungen(): Promise<Bewertung[]> {
  const files = (await readDir(BEWERTUNGEN_DIR)).filter((f) =>
    f.endsWith(".md"),
  );
  const items: Bewertung[] = [];

  for (const file of files) {
    const raw = await fs.readFile(path.join(BEWERTUNGEN_DIR, file), "utf8");
    const { data, content } = matter(raw);
    if (data.veroeffentlicht !== true) continue;

    items.push({
      slug: file.replace(/\.md$/, ""),
      name: String(data.name ?? "Patient:in"),
      ort: data.ort ? String(data.ort) : undefined,
      sterne: Math.min(5, Math.max(1, Number(data.sterne ?? 5))),
      datum: String(data.datum ?? ""),
      text: content.trim(),
    });
  }

  items.sort((a, b) => (a.datum < b.datum ? 1 : -1));
  return items;
}

export async function loadBlogSlugs(): Promise<string[]> {
  const files = (await readDir(BLOG_DIR)).filter((f) => f.endsWith(".md"));
  const slugs: string[] = [];
  for (const file of files) {
    const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(raw);
    if (data.veroeffentlicht === false) continue;
    slugs.push(file.replace(/\.md$/, ""));
  }
  return slugs;
}
