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
    <section
      id={id}
      className={`space-y-8 pt-20 ${className}`}
    >
      <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
