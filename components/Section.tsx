"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@uidotdev/usehooks";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <section ref={ref} id={id} className={cn("scroll-mt-56", className)}>
      <h2 className="mb-8 font-serif text-5xl text-black dark:text-neutral-200">
        {title}
      </h2>
      {children}
    </section>
  );
}
