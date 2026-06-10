import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { leistungen } from "@/content/leistungen";
import { loadBlogSlugs } from "@/lib/content";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/praxis", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/praxis/team", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ueber-astrid", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/karriere", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/ratgeber", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/impressum", priority: 0.1, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.1, changeFrequency: "yearly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const blogSlugs = await loadBlogSlugs();

  return [
    ...staticRoutes.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...leistungen.map((l) => ({
      url: `${siteConfig.url}/leistungen/${l.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: l.kategorie === "spezial" ? 0.8 : 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${siteConfig.url}/ratgeber/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
