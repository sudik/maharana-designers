"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import { useInView } from "./useInView";

export default function SplitHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const [ref, inView] = useInView<HTMLHeadingElement>();

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-1 align-top mr-[0.28em] last:mr-0"
          >
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : undefined}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.06,
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
