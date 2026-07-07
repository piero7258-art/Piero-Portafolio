"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  ["Work", "#projects"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["DJ", "#dj"],
  ["Contact", "#contact"]
];

export function Nav() {
  const [active, setActive] = useState("#projects");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = links.map(([, href]) => href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.08, 0.2, 0.45] }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-30 w-full px-3 pt-3">
      <nav
        className="mx-auto flex max-w-[1680px] items-center justify-between rounded border border-bone/10 bg-ink/55 px-4 py-3 text-sm text-bone/80 backdrop-blur-xl md:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-mono uppercase tracking-wide text-bone">
          Piero Galley
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? "page" : undefined}
              className={`transition-colors hover:text-acid ${active === href ? "text-acid" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="magnetic inline-flex items-center gap-2 rounded-full border border-acid/40 px-4 py-2 text-xs uppercase tracking-wide text-acid transition-colors hover:bg-acid hover:text-ink"
          href={`mailto:${site.email}`}
        >
          Book <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
