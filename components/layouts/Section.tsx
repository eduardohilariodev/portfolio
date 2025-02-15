"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils/cn";

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
  const t = useTranslations();

  return (
    <section id={id} className={cn("scroll-mt-28 md:scroll-mt-56", className)}>
      <h2 className="mb-8 font-serif text-5xl text-black dark:text-neutral-200">
        {t(title)}
      </h2>
      {children}
    </section>
  );
}
