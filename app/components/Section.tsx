"use client";

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
  return (
    <section id={id} className={` ${className}`}>
      <h2 className="mb-8 font-serif text-5xl text-black dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}
