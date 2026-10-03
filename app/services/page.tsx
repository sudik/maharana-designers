import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export const metadata: Metadata = {
  title: "Services — Maharana Designers",
  description:
    "Interior design, architecture, turnkey execution, and design consultation services.",
};

const services = [
  {
    title: "Interior Design",
    description:
      "Full interior design for homes and businesses — space planning, material selection, furniture, lighting, and styling.",
  },
  {
    title: "Architecture",
    description:
      "Ground-up architectural design and structural planning for residential and commercial buildings.",
  },
  {
    title: "Turnkey Execution",
    description:
      "End-to-end project delivery — design, procurement, and on-site execution managed by our team.",
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders and walkthroughs so you can see your space before construction begins.",
  },
  {
    title: "Design Consultation",
    description:
      "A single session with the studio for guidance on layout, material choices, or a design direction for your space.",
  },
  {
    title: "Renovation",
    description:
      "Thoughtful renovation of existing spaces, balancing structural constraints with a fresh design vision.",
  },
];

const process = [
  {
    step: "01",
    title: "Enquiry & Discovery",
    description:
      "We learn about your space, goals, and budget through an initial conversation.",
  },
  {
    step: "02",
    title: "Concept & Design",
    description:
      "We develop a design direction, mood boards, and layout options for your review.",
  },
  {
    step: "03",
    title: "Detailing & Approval",
    description:
      "Material, furniture, and lighting selections are finalized along with detailed drawings.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Our team manages procurement and on-site execution, with regular progress updates.",
  },
  {
    step: "05",
    title: "Handover",
    description:
      "A final walkthrough and styling pass before the space is handed over to you.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <Reveal>
          <p className="uppercase tracking-[0.2em] text-xs text-accent mb-4">
            Services
          </p>
        </Reveal>
        <SplitHeading
          as="h1"
          text="From first sketch to final styling."
          className="font-serif text-4xl md:text-5xl mb-6 max-w-xl"
        />
        <Reveal delay={0.15}>
          <p className="text-foreground/70 max-w-lg">
            Whether you need a single room reimagined or a building designed
            from the ground up, here&apos;s how we can help.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <RevealItem key={service.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-sm text-foreground/70">
                  {service.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <SplitHeading text="Our Process" className="font-serif text-2xl md:text-3xl mb-10" />
        <RevealStagger className="grid md:grid-cols-5 gap-8">
          {process.map((item) => (
            <RevealItem key={item.step}>
              <p className="font-serif text-3xl text-accent mb-3">
                {item.step}
              </p>
              <h3 className="text-base font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <SplitHeading
            text="Ready to start the conversation?"
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
