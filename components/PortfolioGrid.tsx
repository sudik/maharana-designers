"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { categories, type Project } from "@/lib/projects";

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-14">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            data-cursor-hover
            onClick={() => setActive(cat)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              active === cat
                ? "bg-foreground text-background border-foreground"
                : "border-border text-foreground/70 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mb-6 break-inside-avoid"
            >
              <Link
                href={`/portfolio/${project.slug}`}
                data-cursor-hover
                className="group block"
              >
                <div className="relative overflow-hidden mb-3">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    width={800}
                    height={1000}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <p className="text-xs uppercase tracking-wide text-accent mb-1">
                  {project.category}
                </p>
                <h3 className="font-serif text-lg">{project.title}</h3>
                <p className="text-sm text-foreground/60">{project.location}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-foreground/60">No projects in this category yet.</p>
      )}
    </div>
  );
}
