"use client";

import { ReactNode, useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useLenis } from "@/hooks/useLenis";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  useLenis();
  useGsapReveal(scope);

  return (
    <div ref={scope} className="noise">
      <Loader />
      <CustomCursor />
      {children}
    </div>
  );
}
