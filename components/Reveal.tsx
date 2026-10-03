"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "./useInView";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 32,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.08 }}
      animate={inView ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
