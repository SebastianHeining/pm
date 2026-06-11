"use client";

import { useEffect, useRef, useState } from "react";
import { BieneAvatar } from "./BieneAvatar";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hallo! Ich bin Biene, die digitale Assistentin der Praxis. Ich beantworte Ihnen gerne Fragen zu unseren Behandlungen, Öffnungszeiten oder Ihrem Termin. Was möchten Sie wissen?",
};

const QUICK_QUESTIONS = [
  "Was muss ich zum Termin mitbringen?",
  "Wie sind die Öffnungszeiten?",
  "Welche Behandlungen bieten Sie an?",
  "Ich möchte einen Termin verschieben.",
];

const PHONE_DISPLAY = "02381 / 5444 - 533";
const PHONE_HREF = "tel:+4923815444533";

/** **fett** → <strong>, Praxisnummer → klickbarer tel-Link */
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|02381\s*\/\s*5444\s*-\s*533)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.replace(/\s/g, "") === PHONE_DISPLAY.replace(/\s/g, "")) {
      return (
        <a key={i} href={PHONE_HREF} className="font-semibold underline underline-offset-2">
          {part}
        </a>
      );
    }
    return part;
  });
}

/**
 * Strukturiert Bienes Antworten: Zeilen mit "- "/"• " werden Listenpunkte,
 * "1." / "2." nummerierte Schritte, der Rest Absätze — falls das Modell doch
 * mal Markdown schreibt, sieht es trotzdem ordentlich aus.
 */
function FormattedMessage({ text }: { text: string }) {
  type Block =
    | { kind: "p"; lines: string[] }
    | { kind: "ul"; items: string[] }
    | { kind: "ol"; items: string[] };

  const blocks: Block[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const ul = line.match(/^[-•–]\s+(.*)$/);
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    const last = blocks[blocks.length - 1];
    if (ul) {
      if (last?.kind === "ul") last.items.push(ul[1]);
      else blocks.push({ kind: "ul", items: [ul[1]] });
    } else if (ol) {
      if (last?.kind === "ol") last.items.push(ol[1]);
      else blocks.push({ kind: "ol", items: [ol[1]] });
    } else {
      if (last?.kind === "p") last.lines.push(line);
      else blocks.push({ kind: "p", lines: [line] });
    }
  }

  return (
    <div className="space-y-2">
      {blocks.map((b, i) => {
        if (b.kind === "ul") {
          return (
            <ul key={i} className="space-y-1.5">
              {b.items.map((item, j) => (
                <li key={j} className="flex gap-2">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (b.kind === "ol") {
          return (
            <ol key={i} className="space-y-1.5">
              {b.items.map((item, j) => (
                <li key={j} className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-[11px] font-semibold leading-none text-white">
                    {j + 1}
                  </span>
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{b.lines.map((l, j) => (
          <span key={j}>
            {j > 0 && <br />}
            {renderInline(l)}
          </span>
        ))}</p>;
      })}
    </div>
  );
}

export function BieneChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // lokale Begrüßung nicht mitschicken — die API erwartet user zuerst
        body: JSON.stringify({ messages: nextMessages.slice(1) }),
      });
      const data = await res.json();
      const reply: string =
        res.ok && data.ok
          ? data.reply
          : (data.error ??
            "Da ist etwas schiefgelaufen. Rufen Sie uns gerne an: 02381 / 5444 - 533.");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Da ist etwas schiefgelaufen. Rufen Sie uns gerne an: 02381 / 5444 - 533.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const showChips = messages.length === 1 && !loading;

  return (
    <>
      {/* Kleine Biene, die gelegentlich eine Runde um den Chat-Button fliegt */}
      {!open && (
        <span
          aria-hidden
          className="biene-flieger pointer-events-none fixed bottom-10 left-10 z-40"
        >
          <svg width="24" height="20" viewBox="0 0 26 22">
            <ellipse className="biene-fluegel" cx="10" cy="5.5" rx="3.6" ry="5" fill="#dceefb" opacity="0.9" />
            <ellipse className="biene-fluegel" cx="15.5" cy="5.5" rx="3.6" ry="5" fill="#eef7fd" opacity="0.9" style={{ animationDelay: "0.07s" }} />
            <ellipse cx="12.5" cy="13.5" rx="8.5" ry="6.5" fill="#f2b705" />
            <path d="M9 7.6c-1.6 3.4-1.6 8.4 0 11.8" stroke="#423e39" strokeWidth="2.4" fill="none" />
            <path d="M14 7.2c-1.8 3.8-1.8 9 0 12.6" stroke="#423e39" strokeWidth="2.4" fill="none" />
            <circle cx="20.5" cy="12.5" r="3.6" fill="#423e39" />
            <circle cx="21.8" cy="11.4" r="0.9" fill="#fff" />
            <path d="M4.5 13.5L1 12.7l3.3 2.2z" fill="#423e39" />
          </svg>
        </span>
      )}
      {/* Floating-Button unten links (rechts sitzt die Job-Banderole) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="biene-chat-panel"
        className={cn(
          "fixed bottom-5 left-5 z-40 flex items-center gap-3 rounded-full bg-white p-1.5 pr-5 shadow-xl ring-1 ring-border-soft transition-transform hover:scale-105",
          open && "scale-0 opacity-0",
        )}
      >
        <span className="relative animate-biene-float">
          <BieneAvatar size={48} />
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-sm font-semibold text-brand-navy">
            Fragen? Biene hilft.
          </span>
          <span className="block text-xs text-graphite-soft">
            Digitale Praxis-Assistentin
          </span>
        </span>
      </button>

      {/* Chat-Panel */}
      <div
        id="biene-chat-panel"
        role="dialog"
        aria-label="Chat mit Biene, der digitalen Praxis-Assistentin"
        className={cn(
          "fixed bottom-4 left-4 right-4 z-50 flex max-h-[min(40rem,calc(100dvh-2rem))] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-border-soft transition-all duration-200 sm:left-5 sm:right-auto sm:w-[24rem]",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        {/* Kopf */}
        <div className="flex items-center gap-3 border-b border-border-soft bg-surface-warm px-4 py-3">
          <BieneAvatar size={44} />
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-base font-semibold text-brand-navy">Biene</p>
            <p className="truncate text-xs text-graphite-soft">
              Digitale Praxis-Assistentin (KI)
            </p>
          </div>
          {messages.length > 1 && !loading && (
            <button
              type="button"
              onClick={() => {
                setMessages([GREETING]);
                setInput("");
                inputRef.current?.focus();
              }}
              aria-label="Chat neu starten"
              title="Chat neu starten"
              className="flex h-9 w-9 items-center justify-center rounded-full text-graphite-soft transition-colors hover:bg-white hover:text-brand-red"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Chat schließen"
            className="flex h-9 w-9 items-center justify-center rounded-full text-graphite-soft transition-colors hover:bg-white hover:text-brand-red"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Verlauf */}
        <div
          ref={listRef}
          aria-live="polite"
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                m.role === "assistant"
                  ? "rounded-bl-md bg-surface-warm text-graphite"
                  : "ml-auto whitespace-pre-wrap rounded-br-md bg-brand-red text-white",
              )}
            >
              {m.role === "assistant" ? (
                <FormattedMessage text={m.content} />
              ) : (
                m.content
              )}
            </div>
          ))}
          {loading && (
            <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-md bg-surface-warm px-4 py-3">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-2 w-2 animate-bounce rounded-full bg-graphite-mute"
                  style={{ animationDelay: `${d * 150}ms` }}
                />
              ))}
              <span className="sr-only">Biene schreibt …</span>
            </div>
          )}
          {showChips && (
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border border-border-soft bg-white px-3.5 py-1.5 text-xs font-medium text-brand-navy transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Eingabe */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-border-soft p-3"
        >
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1000}
              placeholder="Ihre Frage an Biene …"
              aria-label="Ihre Frage an Biene"
              className="block w-full rounded-full border border-border-soft bg-surface-warm px-4 py-2.5 text-sm text-brand-navy placeholder:text-graphite-soft focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Nachricht senden"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition-colors hover:bg-brand-red-hover disabled:opacity-40"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M3.4 20.4l17.8-8.4L3.4 3.6l-.4 6.8L15 12 3 13.6z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 px-1 text-[11px] leading-snug text-graphite-soft">
            KI-Assistentin — Angaben ohne Gewähr. Bei medizinischen Fragen und
            für Termine: 02381 / 5444 - 533.
          </p>
        </form>
      </div>
    </>
  );
}
