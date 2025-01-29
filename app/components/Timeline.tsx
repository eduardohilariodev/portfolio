"use client";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  isNested?: boolean;
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return <div className={`${className}`}>{children}</div>;
}

export function TimelineItem({
  children,
  className = "",
  isNested = false,
}: TimelineItemProps) {
  return (
    <div
      className={`relative pl-8 ${
        isNested ? "border-l pl-6" : "border-l-2"
      } border-orange-600/20 dark:border-orange-400/20 ${className}`}
    >
      <div
        className={`absolute ${
          isNested ? "top-2 -left-1 h-2 w-2" : "top-0 -left-[9px] h-4 w-4"
        } rounded-full bg-orange-600 dark:bg-orange-400`}
      />
      {children}
    </div>
  );
}
