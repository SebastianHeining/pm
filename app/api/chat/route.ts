import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildSabineSystemPrompt } from "@/lib/chat-knowledge";

export const runtime = "nodejs";

const CHAT_MODEL = process.env.CHAT_MODEL ?? "claude-haiku-4-5";
const MAX_TURNS = 12; // letzte n Nachrichten, die ans Modell gehen
const MAX_MESSAGE_LENGTH = 1000;

const OFFLINE_ERROR =
  "Der Chat ist gerade nicht erreichbar. Rufen Sie uns gerne an: 02381 / 5444 - 533.";

// Simple in-memory rate limit: 20 Nachrichten / 10 min pro IP
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX = 20;

function isRateLimited(ip: string) {
  const now = Date.now();
  const arr = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX) {
    submissions.set(ip, arr);
    return true;
  }
  arr.push(now);
  submissions.set(ip, arr);
  return false;
}

let client: Anthropic | null = null;
function getClient(): Anthropic | null {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ??= new Anthropic();
  return client;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

function sanitizeMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;
  const messages: ChatMessage[] = [];
  for (const entry of input) {
    if (typeof entry !== "object" || entry === null) return null;
    const { role, content } = entry as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    const text = content.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!text) continue;
    messages.push({ role, content: text });
  }
  // erste Nachricht muss vom Nutzer kommen (lokale Begrüßung abschneiden)
  while (messages.length && messages[0].role === "assistant") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return null;
  }
  return messages.slice(-MAX_TURNS);
}

export async function POST(request: Request) {
  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const messages = sanitizeMessages(body.messages);
  if (!messages) {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sie haben gerade viele Nachrichten geschickt. Bitte versuchen Sie es in ein paar Minuten erneut — oder rufen Sie uns an: 02381 / 5444 - 533.",
      },
      { status: 429 },
    );
  }

  const anthropic = getClient();
  if (!anthropic) {
    console.warn("[chat] ANTHROPIC_API_KEY fehlt — Chat antwortet offline.");
    return NextResponse.json(
      { ok: false, error: OFFLINE_ERROR },
      { status: 503 },
    );
  }

  try {
    const system = await buildSabineSystemPrompt();
    const response = await anthropic.messages.create({
      model: CHAT_MODEL,
      max_tokens: 600,
      system: [
        {
          type: "text",
          text: system,
          // Wissensbasis ist statisch — Prompt-Caching spart ~90 % Input-Kosten
          cache_control: { type: "ephemeral" },
        },
      ],
      messages,
    });

    const reply = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!reply) {
      return NextResponse.json(
        { ok: false, error: OFFLINE_ERROR },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, reply });
  } catch (err) {
    if (err instanceof Anthropic.APIError) {
      console.error(`[chat] Claude API ${err.status}: ${err.message}`);
    } else {
      console.error("[chat] Unerwarteter Fehler", err);
    }
    return NextResponse.json(
      { ok: false, error: OFFLINE_ERROR },
      { status: 502 },
    );
  }
}
