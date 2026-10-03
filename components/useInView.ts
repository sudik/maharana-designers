"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useInView<T extends HTMLElement>(
  options: { once?: boolean; rootMargin?: string } = {}
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const { once = true, rootMargin = "0px 0px -80px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return [ref, inView];
}
