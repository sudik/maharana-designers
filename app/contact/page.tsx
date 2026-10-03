import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export const metadata: Metadata = {
  title: "Contact — Maharana Designers",
  description:
    "Send an enquiry to Maharana Designers for your interior design or architecture project.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 grid md:grid-cols-2 gap-14">
      <div>
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-accent mb-4">
            Contact
          </p>
        </Reveal>
        <SplitHeading
          as="h1"
          text="Tell us about your space."
          className="font-serif text-4xl md:text-5xl mb-6 leading-tight"
        />
        <Reveal delay={0.15}>
          <p className="text-foreground/70 max-w-sm mb-10">
            Share a few details below and we&apos;ll get back to you within
            24-48 hours to schedule an initial conversation.
          </p>

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-foreground/50 mb-1">Email</dt>
              <dd>shiboo@maharanadesigners.com</dd>
            </div>
            <div>
              <dt className="text-foreground/50 mb-1">Phone / WhatsApp</dt>
              <dd>+91 73853 42723</dd>
            </div>
            <div>
              <dt className="text-foreground/50 mb-1">Studio</dt>
              <dd>Pune, India</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <EnquiryForm />
      </Reveal>
    </div>
  );
}
