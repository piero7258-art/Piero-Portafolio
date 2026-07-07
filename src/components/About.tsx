import Image from "next/image";
import { getFeaturedAssets } from "@/data/projects";

export function About() {
  const assets = getFeaturedAssets();

  return (
    <section id="about" className="section-shell py-24 md:py-36">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div data-reveal>
          <p className="eyebrow mb-4">About me</p>
          <h2 className="display-lg">Stories with strategy.</h2>
        </div>
        <div data-reveal className="grid gap-6 md:grid-cols-[.8fr_1fr] md:items-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded border border-bone/15">
            <Image src={assets.portrait} alt="Piero Galley portrait" fill sizes="(max-width: 768px) 100vw, 34vw" className="object-cover" />
          </div>
          <div className="text-lg leading-relaxed text-bone/72">
            <p>
              I combine audiovisual production, creative direction, branding, marketing strategy and music culture to build projects with identity and measurable impact.
            </p>
            <p className="mt-5">
              From electronic music events and artist content to commercial campaigns, AI workflows and digital storytelling, every project is treated as a scene with rhythm, intention and a clear emotional direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
