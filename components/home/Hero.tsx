"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitHeading from "@/components/SplitHeading";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[125%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-start justify-end max-w-7xl mx-auto px-6 pb-20 md:pb-24 text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.25em] text-xs md:text-sm mb-6 text-white/75"
        >
          Interior Design &amp; Architecture Studio
        </motion.p>

        <SplitHeading
          as="h1"
          text="Spaces designed to be felt, not just seen."
          className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] max-w-4xl mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-4"
        >
          <Link
            href="/portfolio"
            data-cursor-hover
            className="bg-white text-foreground px-6 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            data-cursor-hover
            className="bg-cta hover:bg-cta-dark px-6 py-3.5 rounded-full text-sm transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 right-6 md:right-10 z-10 flex flex-col items-center gap-3 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-white/50"
        />
      </motion.div>
    </section>
  );
}
