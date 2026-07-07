import { ArrowDown, Play } from "lucide-react";
import { youtube } from "@/data/projects";
import { site } from "@/data/site";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export function Hero() {
  return (
    <section className="section-shell relative min-h-screen overflow-hidden pb-16 pt-28 md:pt-32">
      <div className="grid min-h-[calc(100vh-9rem)] items-end gap-8 lg:grid-cols-[1fr_.62fr]">
        <div className="relative z-10">
          <p data-reveal className="eyebrow mb-6">
            Creative Director / Filmmaker / DJ / AI Creative
          </p>
          <h1 data-reveal className="display-xl max-w-6xl">
            Piero <span className="text-acid">Galley</span>
          </h1>
          <div data-reveal className="mt-8 grid max-w-4xl gap-5 md:grid-cols-[.8fr_1fr]">
            <p className="text-xl leading-tight text-bone md:text-3xl">{site.headline}</p>
            <p className="max-w-xl text-bone/65">
              I build visual systems, films, edits, music-led moments and AI-assisted creative workflows that connect brands, artists and audiences.
            </p>
          </div>
          <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <a className="rounded-full bg-bone px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink" href="#projects">
              View work
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-sm uppercase tracking-wide text-bone hover:border-acid hover:text-acid" href="#reel">
              <Play size={16} aria-hidden="true" /> Watch reel
            </a>
          </div>
        </div>

        <div id="reel" data-reveal className="relative overflow-hidden rounded border border-bone/15 bg-bone/5 lg:mb-12">
          <YouTubeEmbed id={youtube.featuredVideoId} title={youtube.featuredTitle} className="border-0" />
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-bone/30 text-bone/70">
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}
