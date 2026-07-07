"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    year: "2019-2022",
    title: "Nightlife Marketing & Creative Communication",
    body: "Social media, event marketing, graphic design and campaign planning inside nightlife culture.",
    image: "/assets/source/Community%20y%20redes/Arenas.jpg"
  },
  {
    year: "2022",
    title: "Freelance Creative Collaborations",
    body: "Brand identity, marketing campaigns, content creation and commercial design for local businesses.",
    image: "/assets/source/Flyers%20y%20disen%CC%83os/Camille%20Spa.jpg"
  },
  {
    year: "2022-2024",
    title: "Independent Creative Studio",
    body: "Creative direction, video production, motion design, branding, sound and visual storytelling.",
    image: "/assets/source/Piero%20Fotos/rodajes%201.JPG"
  },
  {
    year: "2024-2025",
    title: "Research & Artificial Intelligence",
    body: "Academic research, creative systems, AI integration and documentation workflows.",
    image: "/assets/source/Mk%20y%20Publi/Triptico%20y%20troquelado%201.png"
  },
  {
    year: "Late 2025",
    title: "Audio Engineering & Music Industry",
    body: "Live sound, music programming, DJ performance and technical production for events.",
    image: "/assets/source/Eventos/PieroDJFRODO.jpg"
  },
  {
    year: "2026",
    title: "Marketing & Business Development",
    body: "Marketing strategy, creative campaigns, business communication, video production and brand development.",
    image: "/assets/source/Community%20y%20redes/Meta%20ads%20Metricas.jpeg"
  },
  {
    year: "Present",
    title: "AI Creative Consultant",
    body: "AI workflows, business automation, brand identity, audiovisual production and creative systems.",
    image: "/assets/source/Piero%20Fotos/Personal/LONDON.JPG"
  }
];

export function TimelineExperience() {
  const scope = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!track.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-timeline-card]");
      const images = gsap.utils.toArray<HTMLElement>("[data-timeline-image]");
      const distance = () => Math.max(0, track.current!.scrollWidth - window.innerWidth);

      const horizontalTween = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: () => `+=${distance() + window.innerHeight}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: index === 0 ? 1 : 0.35, scale: index === 0 ? 1 : 0.94 },
          {
            autoAlpha: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 72%",
              end: "right 38%",
              scrub: true,
              toggleClass: { targets: card, className: "is-active" }
            }
          }
        );
      });

      images.forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.08, autoAlpha: 0.72 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              containerAnimation: horizontalTween,
              start: "left 80%",
              end: "right 30%",
              scrub: true
            }
          }
        );
      });
    },
    { scope }
  );

  return (
    <section id="experience" ref={scope} className="overflow-hidden py-24">
      <div className="section-shell" data-reveal>
        <p className="eyebrow mb-4">Experience</p>
        <h2 className="display-lg">The road so far</h2>
      </div>
      <div ref={track} className="mt-14 flex w-max gap-4 px-[clamp(1rem,4vw,4.5rem)]">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.title}
            data-timeline-card
            className="glass-line grid h-[68vh] w-[82vw] max-w-[46rem] shrink-0 grid-rows-[1fr_auto] overflow-hidden rounded md:w-[58vw] lg:w-[42vw]"
          >
            <div className="relative overflow-hidden">
              <Image src={chapter.image} alt={chapter.title} fill sizes="(max-width: 768px) 82vw, 42vw" className="object-cover" data-timeline-image />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-acid/40 px-3 py-2 font-mono text-xs uppercase tracking-wide text-acid">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow mb-4">{chapter.year}</p>
              <h3 className="font-display text-4xl font-black uppercase leading-[0.9] md:text-6xl">{chapter.title}</h3>
              <p className="mt-5 max-w-xl text-bone/65">{chapter.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
