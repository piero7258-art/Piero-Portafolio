"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

export function YouTubeEmbed({
  id,
  title,
  start,
  className = ""
}: {
  id: string;
  title: string;
  start?: number;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    autoplay: active ? "1" : "0"
  });

  if (start) params.set("start", String(start));
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className={`relative aspect-video overflow-hidden rounded border border-bone/15 bg-bone/5 ${className}`}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="absolute inset-0 block h-full w-full text-left"
          aria-label={`Play video: ${title}`}
          onClick={() => setActive(true)}
        >
          <Image src={thumbnail} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-85" />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-acid text-ink shadow-2xl transition-transform hover:scale-105">
            <Play size={26} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="sr-only">{title}</span>
        </button>
      )}
    </div>
  );
}
