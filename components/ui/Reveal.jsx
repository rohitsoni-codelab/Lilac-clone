"use client";

import { useRevealOnce } from "@/lib/useRevealOnce";

export default function Reveal({ children, className = "" }) {
  const { ref, revealed } = useRevealOnce();

  return (
    <div
      ref={ref}
      className={`
        transform-gpu
        transition-all
        duration-[900ms]
        delay-[120ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${revealed
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
