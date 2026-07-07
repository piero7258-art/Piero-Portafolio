"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, [data-cursor='open']")));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-40 hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background,border-color] duration-300 md:block ${
        active ? "size-16 border-acid/70 bg-acid/10" : "border-bone/40 bg-transparent"
      }`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
    />
  );
}
