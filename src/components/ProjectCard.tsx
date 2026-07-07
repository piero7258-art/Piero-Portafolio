import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = index % 7 === 0;
  const isTall = index % 7 === 1 || index % 7 === 4;
  const isWide = index % 7 === 3;

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-reveal
      data-cursor="open"
      className={`group relative overflow-hidden rounded-[0.7rem] border border-bone/10 bg-bone/5 ${
        isFeatured ? "md:col-span-2 md:row-span-2" : ""
      } ${isTall ? "md:row-span-2" : ""} ${isWide ? "lg:col-span-2" : ""}`}
      style={{
        transform: "translateZ(0)"
      }}
    >
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(166,255,0,0.18),transparent_18rem)] opacity-0 transition duration-700 group-hover:opacity-100" />
      <Image
        src={project.cover}
        alt={`${project.title} cover`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.82] transition duration-[1200ms] ease-out group-hover:scale-[1.055] group-hover:opacity-95 group-hover:saturate-125"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition duration-700 group-hover:via-ink/12" />
      <div className="absolute inset-0 opacity-0 mix-blend-screen transition duration-700 group-hover:opacity-25">
        <div className="h-full w-full bg-[linear-gradient(115deg,transparent,rgba(239,235,227,.32),transparent)]" />
      </div>
      <div className="absolute left-4 top-4 z-20 rounded-full border border-bone/15 bg-ink/55 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-bone/65 backdrop-blur-md transition duration-500 group-hover:border-acid/50 group-hover:text-acid">
        View case
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-2 opacity-90 transition duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
          <p className="eyebrow">{project.category}</p>
          <span className="text-bone/35">/</span>
          <p className="font-mono text-xs uppercase tracking-wide text-bone/60">{project.year}</p>
        </div>
        <div className="flex min-w-0 items-end justify-between gap-5">
          <div className="min-w-0">
            <h3 className="max-w-xl min-w-0 whitespace-pre-line break-words font-display text-[2.65rem] font-black uppercase leading-[0.9] transition duration-500 group-hover:-translate-y-2 md:text-6xl">
              {(project.displayTitle ?? project.title).replace(" / ", "\n")}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/70 transition duration-500 md:translate-y-2 md:text-bone/0 md:group-hover:translate-y-0 md:group-hover:text-bone/70">
              {project.role}
            </p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-acid/40 text-acid transition duration-500 group-hover:rotate-45 group-hover:bg-acid group-hover:text-ink">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
