import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealImage } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export default function AboutTeaser() {
  return (
    <section className="border-t border-border bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-14 items-center">
        <RevealImage className="relative aspect-[4/5] order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&h=1100&q=80"
            alt="A considered, light-filled interior by the studio"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </RevealImage>
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="uppercase tracking-[0.25em] text-xs text-accent mb-5">
              About the Studio
            </p>
          </Reveal>
          <SplitHeading
            text="Design rooted in how people actually live."
            className="font-serif text-3xl md:text-5xl mb-8 leading-[1.05]"
          />
          <Reveal delay={0.15}>
            <p className="text-foreground/60 mb-10 max-w-md">
              With over a decade of practice across residential and
              commercial projects, the studio approaches every space as a
              response to light, material, and the daily rituals of the
              people who&apos;ll use it.
            </p>
            <Link
              href="/about"
              data-cursor-hover
              className="text-sm border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              More about the studio
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
