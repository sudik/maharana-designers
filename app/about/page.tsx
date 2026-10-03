import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealImage, RevealStagger, RevealItem } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About — Maharana Designers",
  description:
    "The story and focus behind Maharana Designers' interior design practice, led by Shiboo Maharana out of Pune.",
};

const projectCount = projects.length;
const categoryCount = new Set(projects.map((p) => p.category)).size;

const credentials = [
  "10+ years in residential & commercial interior design",
  "Based in Pune, serving clients across Maharashtra",
  `${projectCount}+ completed projects across ${categoryCount} categories — residential, commercial & office`,
  "Vastu-compliant layouts available on request",
];

export default function AboutPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-accent mb-4">
              About the Studio
            </p>
          </Reveal>
          <SplitHeading
            as="h1"
            text="Design that disappears into daily life."
            className="font-serif text-4xl md:text-5xl mb-6 leading-tight"
          />
          <Reveal delay={0.15}>
            <p className="text-foreground/70 mb-5 max-w-lg">
              Maharana Designers is a Pune-based interior design consultancy
              led by Shiboo Maharana, with 10+ years of experience designing
              homes, offices, and restaurants across the city.
            </p>
            <p className="text-foreground/70 max-w-lg">
              The studio's work spans full home interiors, duplex and
              Vastu-compliant layouts, office fit-outs, and restaurant
              design — always starting from the same question: how do the
              people here actually move through their day?
            </p>
          </Reveal>
        </div>
        <RevealImage className="relative aspect-[4/5]">
          <Image
            src="/images/stock/living-warm-plants-hero.jpg"
            alt="A Maharana Designers interior project"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </RevealImage>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <SplitHeading
            text="Experience & Focus"
            className="font-serif text-2xl md:text-3xl mb-8"
          />
          <RevealStagger className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-2xl">
            {credentials.map((item) => (
              <RevealItem
                key={item}
                className="text-sm text-foreground/70 border-b border-border pb-4"
              >
                {item}
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <RevealImage className="relative aspect-[4/5] order-2 md:order-1">
          <Image
            src="/images/projects/modi-residence/02-living-room.jpg"
            alt="Recent work by Shiboo Maharana — The Modi Residence"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </RevealImage>
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="uppercase tracking-[0.2em] text-xs text-accent mb-4">
              The Founder
            </p>
            <h2 className="font-serif text-3xl mb-2">Shiboo Maharana</h2>
            <p className="text-sm text-foreground/60 mb-6">
              Founder & Principal Designer
            </p>
            <p className="text-foreground/70 max-w-md mb-6">
              Shiboo founded Maharana Designers in Pune and has personally
              led every project in the studio's portfolio — from compact
              2BHK apartments to duplex residences, office fit-outs, and
              full restaurant interiors.
            </p>
            <a
              href="tel:+917385342723"
              data-cursor-hover
              className="text-sm border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              +91 73853 42723
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <SplitHeading
            text="Let's design your next space together."
            className="font-serif text-3xl mb-6"
          />
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              data-cursor-hover
              className="bg-cta hover:bg-cta-dark text-white px-7 py-3.5 rounded-full text-sm inline-block transition-colors"
            >
              Send an Enquiry
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
