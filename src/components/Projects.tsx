"use client";

import { useMemo, useState } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const categories = ["All", "Commercial", "Documentary", "DJ Sets", "Short Film", "Experimental", "Creative Research"] as const;

export function Projects({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="section-shell relative py-16 md:py-24">
      <div data-reveal className="mb-8 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4">Featured projects</p>
          <h2 className="display-lg">Featured works</h2>
        </div>
        <p className="max-w-xl text-bone/65">
          Curated from published films, DJ sets, commercial systems, creative research and audiovisual experiments.
        </p>
      </div>
      <div
        data-reveal
        className="-mx-4 mb-8 flex max-w-none gap-2 overflow-x-auto border-y border-bone/10 bg-ink/70 px-4 py-3 backdrop-blur-xl md:sticky md:top-24 md:z-20 md:mx-0 md:w-max md:max-w-full md:flex-wrap md:overflow-visible md:rounded-full md:border md:p-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-wide transition ${
              activeCategory === category
                ? "bg-bone text-ink"
                : "border border-bone/10 text-bone/60 hover:border-acid/45 hover:text-acid"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid auto-rows-[26rem] gap-5 md:grid-cols-2 md:auto-rows-[21rem] lg:grid-cols-3 lg:auto-rows-[23rem]">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
