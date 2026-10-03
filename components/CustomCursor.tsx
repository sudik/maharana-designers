"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          width: hovering ? 56 : 10,
          height: hovering ? 56 : 10,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </motion.div>
  );
}
