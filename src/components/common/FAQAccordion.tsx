"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <details
            key={faq.question}
            open={open}
            onClick={(e) => {
              e.preventDefault();
              setOpenIndex(open ? null : i);
            }}
            className="group rounded-xl border border-slate-200 bg-white open:shadow-card"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 list-none">
              <h3 className="text-base font-semibold text-slate-900 lg:text-lg">
                {faq.question}
              </h3>
              <ChevronDownIcon
                aria-hidden="true"
                className={`shrink-0 text-slate-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </summary>
            <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
              {faq.answer}
            </div>
          </details>
        );
      })}
    </div>
  );
}
