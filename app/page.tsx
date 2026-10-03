import { projects } from "@/lib/projects";
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import AboutTeaser from "@/components/home/AboutTeaser";
import Testimonial from "@/components/home/Testimonial";
import ClosingCta from "@/components/home/ClosingCta";
import Marquee from "@/components/Marquee";

const featured = projects.slice(0, 4);
const testimonial = projects.find((p) => p.clientQuote)?.clientQuote;

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Interior Design", "Architecture", "Renovation", "Consultation"]}
        className="border-y border-border py-6 md:py-8 text-accent/80"
      />
      <SelectedWork projects={featured} />
      <AboutTeaser />
      {testimonial && <Testimonial quote={testimonial} />}
      <ClosingCta />
    </>
  );
}
