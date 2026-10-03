import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export default function ClosingCta() {
  return (
    <section className="border-t border-border bg-foreground text-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">
        <SplitHeading
          text="Have a project in mind?"
          className="font-serif text-4xl md:text-6xl mb-8"
        />
        <Reveal delay={0.2}>
          <p className="text-background/60 mb-10 max-w-md mx-auto">
            Tell us about your space — we usually respond within 24-48 hours.
          </p>
          <Link
            href="/contact"
            data-cursor-hover
            className="bg-cta hover:bg-cta-dark text-white px-8 py-4 rounded-full text-sm inline-block transition-colors"
          >
            Send an Enquiry
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
