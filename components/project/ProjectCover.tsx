"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitHeading from "@/components/SplitHeading";

export default function ProjectCover({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.6]);

  return (
    <div ref={ref} className="relative h-[75vh] min-h-[480px] w-full overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%]">
        <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />
      <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-7xl mx-auto px-6 pb-14 text-white">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="uppercase tracking-[0.25em] text-xs mb-5 text-white/75"
        >
          {category}
        </motion.p>
        <SplitHeading
          as="h1"
          text={title}
          className="font-serif text-[clamp(2.25rem,6vw,5rem)] leading-[1] max-w-3xl"
        />
      </div>
    </div>
  );
}
