import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Reveal, RevealImage } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export default function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-36">
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <SplitHeading
          text="Selected Work"
          className="font-serif text-4xl md:text-6xl"
        />
        <Reveal delay={0.2} className="hidden md:block">
          <Link
            href="/portfolio"
            data-cursor-hover
            className="text-sm text-accent hover:text-accent-dark"
          >
            View all projects →
          </Link>
        </Reveal>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              data-cursor-hover
              className={`group flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <RevealImage className="w-full md:w-7/12">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </RevealImage>

              <Reveal
                className={`w-full md:w-5/12 ${reversed ? "md:text-right" : ""}`}
              >
                <span className="font-serif text-6xl md:text-8xl text-border select-none block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs uppercase tracking-wide text-accent mb-2">
                  {project.category} · {project.location}
                </p>
                <h3 className="font-serif text-2xl md:text-4xl mb-4">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm max-w-sm">
                  {project.excerpt}
                </p>
              </Reveal>
            </Link>
          );
        })}
      </div>

      <Reveal className="mt-16 md:hidden">
        <Link
          href="/portfolio"
          data-cursor-hover
          className="text-sm text-accent hover:text-accent-dark"
        >
          View all projects →
        </Link>
      </Reveal>
    </section>
  );
}
