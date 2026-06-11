"use client";

import { useEffect, useRef, useState } from "react";
import { SabineAvatar } from "./SabineAvatar";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hallo! Ich bin Sabine, die digitale Assistentin der Praxis. Ich beantworte Ihnen gerne Fragen zu unseren Behandlungen, Öffnungszeiten oder Ihrem Termin. Was möchten Sie wissen?",
};

const QUICK_QUESTIONS = [
  "Was muss ich zum Termin mitbringen?",
  "Wie sind die Öffnungszeiten?",
  "Welche Behandlungen bieten Sie an?",
  "Ich möchte einen Termin verschieben.",
];

export function SabineChat() {
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
      {/* Floating-Button unten links (rechts sitzt die Job-Banderole) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="sabine-chat-panel"
        className={cn(
          "fixed bottom-5 left-5 z-40 flex items-center gap-3 rounded-full bg-white p-1.5 pr-5 shadow-xl ring-1 ring-border-soft transition-transform hover:scale-105",
          open && "scale-0 opacity-0",
        )}
      >
        <span className="relative animate-sabine-float">
          <SabineAvatar size={48} />
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-sm font-semibold text-brand-navy">
            Fragen? Sabine hilft.
          </span>
          <span className="block text-xs text-graphite-soft">
            Digitale Praxis-Assistentin
          </span>
        </span>
      </button>

      {/* Chat-Panel */}
      <div
        id="sabine-chat-panel"
        role="dialog"
        aria-label="Chat mit Sabine, der digitalen Praxis-Assistentin"
        className={cn(
          "fixed bottom-4 left-4 right-4 z-50 flex max-h-[min(40rem,calc(100dvh-2rem))] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-border-soft transition-all duration-200 sm:left-5 sm:right-auto sm:w-[24rem]",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        {/* Kopf */}
        <div className="flex items-center gap-3 border-b border-border-soft bg-surface-warm px-4 py-3">
          <SabineAvatar size={44} />
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-base font-semibold text-brand-navy">Sabine</p>
            <p className="truncate text-xs text-graphite-soft">
              Digitale Praxis-Assistentin (KI)
            </p>
          </div>
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
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                m.role === "assistant"
                  ? "rounded-bl-md bg-surface-warm text-graphite"
                  : "ml-auto rounded-br-md bg-brand-red text-white",
              )}
            >
              {m.content}
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
              <span className="sr-only">Sabine schreibt …</span>
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
              placeholder="Ihre Frage an Sabine …"
              aria-label="Ihre Frage an Sabine"
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
