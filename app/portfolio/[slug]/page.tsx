import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import ProjectCover from "@/components/project/ProjectCover";
import { Reveal, RevealImage, RevealStagger, RevealItem } from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Maharana Designers`,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  const specs = [
    { label: "Location", value: project.location },
    { label: "Area", value: project.area },
    { label: "Duration", value: project.duration },
    { label: "Style", value: project.style },
  ].filter((spec) => spec.value);

  return (
    <div>
      <ProjectCover
        image={project.coverImage}
        title={project.title}
        category={project.category}
      />

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <Reveal>
          <Link
            href="/portfolio"
            data-cursor-hover
            className="text-sm text-accent hover:text-accent-dark"
          >
            ← Back to Portfolio
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <Reveal delay={0.1} className="md:col-span-2">
            <p className="text-foreground/70 max-w-xl text-lg">
              {project.excerpt}
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-2 md:grid-cols-1 gap-6 border-t border-border pt-6 md:border-t-0 md:pt-0">
            {specs.map((spec) => (
              <RevealItem key={spec.label}>
                <p className="text-xs uppercase tracking-wide text-foreground/50 mb-1">
                  {spec.label}
                </p>
                <p className="text-sm">{spec.value}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {project.gallery.map((src, i) => (
            <RevealImage
              key={src}
              className={`relative overflow-hidden ${
                i % 3 === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
          ))}
        </div>

        {/* Quote */}
        {project.clientQuote && (
          <Reveal className="max-w-2xl mx-auto text-center py-16 md:py-24">
            <span className="font-serif text-6xl text-accent/40 block mb-4">
              &ldquo;
            </span>
            <p className="font-serif text-2xl md:text-3xl leading-snug mb-6">
              {project.clientQuote.text}
            </p>
            <p className="text-sm text-foreground/60 uppercase tracking-wide">
              {project.clientQuote.author}
            </p>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal className="border-t border-b border-border py-14 my-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-5">
            Love this look? Let&apos;s talk about your space.
          </h2>
          <Link
            href="/contact"
            data-cursor-hover
            className="bg-cta hover:bg-cta-dark text-white px-7 py-3.5 rounded-full text-sm inline-block transition-colors"
          >
            Send an Enquiry
          </Link>
        </Reveal>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <SplitHeading text="Related Projects" className="font-serif text-2xl mb-8" />
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  data-cursor-hover
                  className="group block"
                >
                  <RevealImage className="relative aspect-[4/5] overflow-hidden mb-4">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </RevealImage>
                  <p className="text-xs uppercase tracking-wide text-accent mb-1">
                    {p.category}
                  </p>
                  <h4 className="font-serif text-lg">{p.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
