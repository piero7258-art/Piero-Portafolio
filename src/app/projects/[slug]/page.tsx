import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, getProjects, getRelatedProjects } from "@/data/projects";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.description,
      images: [{ url: project.cover }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${site.name}`,
      description: project.description,
      images: [project.cover]
    }
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const related = getRelatedProjects(project);
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: site.name,
      url: site.url
    },
    dateCreated: project.year,
    genre: project.category,
    thumbnailUrl: project.cover,
    video: project.youtubeVideos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: project.description,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`
    }))
  };

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <section className="section-shell min-h-[82vh] pb-20">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-bone/65 hover:text-acid">
          <ArrowLeft size={16} aria-hidden="true" /> Back to featured works
        </Link>
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow mb-5">
              {project.category} / {project.year}
            </p>
            <h1 className="display-lg">{project.title}</h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-bone/70">{project.description}</p>
          </div>
          <div data-reveal className="relative min-h-[34rem] overflow-hidden rounded border border-bone/15">
            <Image src={project.cover} alt={`${project.title} cover`} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-4 py-16 md:grid-cols-3">
        <div data-reveal className="glass-line rounded p-6">
          <p className="eyebrow mb-5">Role</p>
          <p className="text-2xl leading-tight text-bone">{project.role}</p>
        </div>
        <div data-reveal className="glass-line rounded p-6">
          <p className="eyebrow mb-5">Tools</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-bone/20 px-3 py-2 text-xs uppercase tracking-wide text-bone/75">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div data-reveal className="glass-line rounded p-6">
          <p className="eyebrow mb-5">Credits</p>
          <div className="space-y-2 text-bone/72">
            {project.credits.map((credit) => (
              <p key={credit}>{credit}</p>
            ))}
          </div>
        </div>
      </section>

      {project.youtubeVideos.length > 0 && (
        <section className="section-shell py-20">
          <div data-reveal className="mb-8">
            <p className="eyebrow mb-3">Videos</p>
            <h2 className="font-display text-6xl font-black uppercase leading-none md:text-8xl">Published work</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {project.youtubeVideos.map((video) => (
              <article key={video.id} data-reveal className="glass-line rounded p-4">
                <YouTubeEmbed id={video.id} title={video.title} start={video.start} />
                <h3 className="p-3 text-sm text-bone/70">{video.title}</h3>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section-shell grid gap-4 py-16 md:grid-cols-[.72fr_1fr]">
        <div data-reveal className="glass-line rounded p-6">
          <p className="eyebrow mb-5">Outcome</p>
          <div className="grid gap-3">
            {project.outcome.map((item) => (
              <p key={item} className="border-l border-acid/50 pl-4 text-bone/72">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div data-reveal className="glass-line rounded p-6">
          <p className="eyebrow mb-5">Behind the scenes</p>
          <p className="max-w-2xl text-bone/65">
            Supporting frames and production references from the local archive are included only where they add context to the published work.
          </p>
        </div>
      </section>

      {project.links && project.links.length > 0 && (
        <section className="section-shell py-16">
          <div data-reveal className="glass-line rounded p-6 md:p-8">
            <p className="eyebrow mb-5">Official channels</p>
            <div className="grid gap-3 md:grid-cols-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded border border-bone/15 px-4 py-3 text-sm text-bone/72 transition hover:border-acid/55 hover:text-acid"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className="section-shell py-20">
          <div data-reveal className="mb-8">
            <p className="eyebrow mb-3">Gallery</p>
            <h2 className="font-display text-6xl font-black uppercase leading-none md:text-8xl">Frames and assets</h2>
          </div>
          <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
            {project.gallery.map((image, index) => (
              <figure key={image.path} data-reveal className="mb-4 break-inside-avoid overflow-hidden rounded border border-bone/15 bg-bone/5">
                <div className="relative aspect-[4/3]">
                  <Image src={image.path} alt={`${project.title} asset ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs text-bone/45">{image.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section-shell py-16">
          <div data-reveal className="mb-8">
            <p className="eyebrow mb-3">Related projects</p>
            <h2 className="font-display text-5xl font-black uppercase leading-none md:text-7xl">Continue the story</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} data-reveal className="group relative min-h-72 overflow-hidden rounded border border-bone/15 bg-bone/5">
                <Image src={item.cover} alt={`${item.title} cover`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-70 transition group-hover:scale-105 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <p className="eyebrow mb-2">{item.category}</p>
                  <h3 className="font-display text-4xl font-black uppercase leading-none">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section-shell py-20">
        <Link href={`/projects/${next.slug}`} data-reveal className="group block rounded border border-acid/35 bg-acid p-7 text-ink md:p-10">
          <p className="font-mono text-sm uppercase tracking-wide">Next case study</p>
          <div className="mt-6 flex items-end justify-between gap-6">
            <h2 className="font-display text-6xl font-black uppercase leading-none md:text-9xl">{next.title}</h2>
            <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-2" size={36} aria-hidden="true" />
          </div>
        </Link>
      </section>
    </main>
  );
}
