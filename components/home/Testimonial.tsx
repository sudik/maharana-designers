import { Reveal } from "@/components/Reveal";

export default function Testimonial({
  quote,
}: {
  quote: { text: string; author: string };
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
      <Reveal>
        <span className="font-serif text-6xl text-accent/40 block mb-4">
          &ldquo;
        </span>
        <p className="font-serif text-2xl md:text-4xl leading-snug mb-8">
          {quote.text}
        </p>
        <p className="text-sm text-foreground/60 uppercase tracking-wide">
          {quote.author}
        </p>
      </Reveal>
    </section>
  );
}
