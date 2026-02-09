"use client";

import { useEffect, useRef, useState } from "react";

export function useRevealOnce(options = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [revealed, options]);

  return { ref, revealed };
}
