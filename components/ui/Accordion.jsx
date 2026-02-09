"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-[var(--border-soft)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-5">
            {/* Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-serif text-lg">
                {item.title}
              </span>

              {/* + / − icon */}
              <span className="relative w-4 h-4 shrink-0">
                <span className="absolute inset-x-0 top-1/2 h-px bg-current" />
                {!isOpen && (
                  <span className="absolute inset-y-0 left-1/2 w-px bg-current" />
                )}
              </span>
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed max-w-xl">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
