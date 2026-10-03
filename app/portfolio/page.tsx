import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export const metadata: Metadata = {
  title: "Portfolio — Maharana Designers",
  description: "Browse past residential, commercial, and renovation projects.",
};

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <Reveal>
        <p className="uppercase tracking-[0.2em] text-xs text-accent mb-4">
          Portfolio
        </p>
      </Reveal>
      <SplitHeading
        as="h1"
        text="Projects built around how people live and work."
        className="font-serif text-4xl md:text-5xl mb-6 max-w-xl"
      />
      <Reveal delay={0.15}>
        <p className="text-foreground/70 max-w-lg mb-12">
          A selection of residential, commercial, and renovation work. Filter
          by type to see projects most relevant to you.
        </p>
      </Reveal>

      <PortfolioGrid projects={projects} />
    </div>
  );
}
