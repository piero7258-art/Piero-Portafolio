import Image from "next/image";
import { ArrowUpRight, Disc3, Instagram, Linkedin, Mail, MapPin, Music2, Youtube } from "lucide-react";
import { process, services, site, skills } from "@/data/site";
import { getFeaturedAssets, getProjects } from "@/data/projects";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { TimelineExperience } from "@/components/TimelineExperience";

const socialLinks = [
  { label: "YouTube", href: site.youtube, icon: Youtube },
  { label: "Instagram", href: site.instagram, icon: Instagram },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "TikTok", href: site.tiktok, icon: Music2 },
  ...(site.soundcloud ? [{ label: "SoundCloud", href: site.soundcloud, icon: Music2 }] : [])
];

export function Services() {
  return (
    <section id="services" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[.72fr_1fr]">
        <div data-reveal className="lg:sticky lg:top-28 lg:h-fit">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="display-lg">What I do best</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} data-reveal className="glass-line rounded p-6 transition-colors hover:border-acid/50">
              <span className="font-mono text-acid">{String(index + 1).padStart(2, "0")}.</span>
              <h3 className="mt-8 font-display text-4xl font-black uppercase leading-none">{service.title}</h3>
              <p className="mt-5 text-bone/65">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  return <TimelineExperience />;
}

export function Skills() {
  return (
    <section id="skills" className="section-shell py-20">
      <div data-reveal className="rounded border border-bone/15 bg-bone text-ink">
        <div className="grid gap-6 p-6 md:grid-cols-[.6fr_1fr] md:p-10">
          <h2 className="font-display text-6xl font-black uppercase leading-none md:text-8xl">Tools, skills, rhythm.</h2>
          <div className="flex flex-wrap content-start gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-ink/20 px-4 py-2 text-sm uppercase tracking-wide">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreativeProcess() {
  return (
    <section id="process" className="section-shell py-24">
      <div data-reveal className="mb-12">
        <p className="eyebrow mb-4">Creative process</p>
        <h2 className="display-lg">From signal to scene</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-7">
        {process.map((step, index) => (
          <article key={step.title} data-reveal className="group min-h-52 rounded border border-bone/15 bg-white/[0.03] p-5 transition-colors hover:border-acid/60">
            <p className="font-mono text-acid">0{index + 1}</p>
            <h3 className="mt-16 text-sm font-semibold uppercase tracking-wide">{step.title}</h3>
            <div className="mt-5 space-y-2 text-xs leading-relaxed text-bone/55">
              {step.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DjSessions() {
  const assets = getFeaturedAssets();
  const djProjects = getProjects().filter((project) => project.category === "DJ Sets").slice(0, 3);

  return (
    <section id="dj" className="section-shell py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
        <div data-reveal className="relative min-h-[34rem] overflow-hidden rounded border border-bone/15">
          <Image src={assets.dj} alt="Piero Galley DJ session" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute bottom-0 p-6 md:p-10">
            <Disc3 className="mb-5 text-acid" size={34} aria-hidden="true" />
            <h2 className="font-display text-6xl font-black uppercase leading-none md:text-9xl">DJ Sessions</h2>
          </div>
        </div>
        <div data-reveal className="glass-line rounded p-7 md:p-10">
          <p className="eyebrow mb-5">Music culture</p>
          <p className="text-2xl leading-tight text-bone">
            DJ work is treated as an audiovisual case study: rhythm, atmosphere, audience reading and a visual identity built around music culture.
          </p>
          <p className="mt-6 text-bone/65">
            Featuring Mondo (PE) live performances and personal DJ sessions through responsive YouTube embeds.
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {djProjects.slice(0, 2).map((project) => (
          <article key={project.slug} data-reveal className="glass-line rounded p-4">
            <YouTubeEmbed id={project.youtubeVideos[0].id} title={project.youtubeVideos[0].title} start={project.youtubeVideos[0].start} />
            <div className="p-3">
              <p className="eyebrow mb-3">
                {project.year} / {project.role}
              </p>
              <h3 className="font-display text-4xl font-black uppercase leading-none">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <div data-reveal className="rounded border border-acid/40 bg-acid p-6 text-ink md:p-10">
        <p className="font-mono text-sm uppercase tracking-wide">Available for selected collaborations</p>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end">
          <h2 className="min-w-0 break-words font-display text-6xl font-black uppercase leading-none md:text-9xl">Let&apos;s create something that lasts.</h2>
          <div className="min-w-0 space-y-4 text-sm">
            <a className="flex items-center justify-between border-b border-ink/25 pb-3" href={`mailto:${site.email}`}>
              <span className="inline-flex min-w-0 items-center gap-3 break-all">
                <Mail size={18} aria-hidden="true" /> {site.email}
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <p className="flex items-center gap-3 border-b border-ink/25 pb-3">
              <MapPin size={18} aria-hidden="true" /> {site.location}
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-3 py-2 hover:bg-ink hover:text-acid"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="section-shell flex flex-col justify-between gap-5 border-t border-bone/10 py-8 text-sm text-bone/55 md:flex-row md:items-center">
      <p>© 2026 Piero Galley. Portfolio system.</p>
      <div className="flex flex-wrap items-center gap-3">
        <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-acid">
          <Mail size={18} aria-hidden="true" />
        </a>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-acid">
            <Icon size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}
