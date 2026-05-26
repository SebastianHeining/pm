"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: React.ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-border-soft border-y border-border-soft">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <li key={idx}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${idx}`}
              id={`faq-trigger-${idx}`}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-brand-navy transition-colors hover:text-brand-red"
            >
              <span>{item.question}</span>
              <span
                aria-hidden
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-soft text-brand-navy transition-transform",
                  isOpen && "rotate-45 bg-brand-red text-white border-brand-red",
                )}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${idx}`}
              role="region"
              aria-labelledby={`faq-trigger-${idx}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-200",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-12 text-base leading-relaxed text-graphite">
                  {item.answer}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
