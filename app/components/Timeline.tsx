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
  return <div className={`space-y-24 ${className}`}>{children}</div>;
}

export function TimelineItem({
  children,
  className = "",
  isNested = false,
}: TimelineItemProps) {
  return (
    <div
      className={`relative pl-8 ${
        isNested ? "pl-6 border-l" : "border-l-2"
      } border-orange-600/20 dark:border-orange-400/20 ${className}`}
    >
      <div
        className={`absolute ${
          isNested ? "w-2 h-2 -left-1 top-2" : "w-4 h-4 -left-[9px] top-0"
        } bg-orange-600 dark:bg-orange-400 rounded-full`}
      />
      {children}
    </div>
  );
}
