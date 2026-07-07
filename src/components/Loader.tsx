"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 grid place-items-center bg-ink transition-transform duration-1000 ease-[cubic-bezier(.76,0,.24,1)] ${
        loaded ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="section-shell flex w-full items-end justify-between">
        <p className="eyebrow">Loading portfolio</p>
        <p className="font-display text-[18vw] font-black leading-none text-bone">PG</p>
      </div>
    </div>
  );
}
