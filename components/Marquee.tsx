"use client";

import { motion } from "framer-motion";

export default function Marquee({
  items,
  speed = 28,
  className,
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-serif text-[clamp(2.5rem,8vw,6rem)] px-6 flex items-center gap-6"
          >
            {item}
            <span className="text-accent text-3xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
