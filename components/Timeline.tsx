"use client";

import Image from "next/image";

interface ParentProps {
  img: string;
  name: string;
  start: string;
  end: string;
}

export function Parent({ img, name, start, end }: ParentProps) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-x-4">
      <Image
        src={img}
        alt={name}
        height={80}
        width={80}
        className="object-contain"
        aria-label="Parent logo"
      />
      <div className="flex grow flex-col justify-end gap-y-2">
        <hr className="border-1 border-neutral-200" />
        <div
          aria-label="Parent details"
          className="flex items-center justify-between text-3xl"
        >
          <h3 aria-label="Title">{name}</h3>
          <span aria-label="Period" className="font-serif">
            {start}&ndash;{end}
          </span>
        </div>
      </div>
      <TimelineNode height={48} />
    </div>
  );
}

interface ChildProps {
  title?: string;
  description?: string;
  isLast?: boolean;
  children?: React.ReactNode;
  hasNode?: boolean;
}

export function Child({
  title,
  description,
  isLast = false,
  children,
  hasNode = false,
}: ChildProps) {
  return (
    <div
      aria-label="Child timeline container"
      className="relative grid grid-cols-[80px_1fr] gap-x-4"
    >
      <TimelineNode />

      <TimelineNode hasNode={hasNode}>
        <h4
          aria-label="Position title"
          className="self-center font-serif text-2xl text-neutral-200"
        >
          {title}
        </h4>
      </TimelineNode>

      <TimelineNode>
        {children ?? (
          <div
            aria-label="Project content"
            className="text-md mb-6 space-y-4 dark:text-neutral-400"
          >
            {description && (
              <p aria-label="Project description">{description}</p>
            )}
          </div>
        )}
      </TimelineNode>

      {isLast && (
        <TimelineNode height={96}>
          <div aria-hidden="true" />
        </TimelineNode>
      )}
    </div>
  );
}

interface TimelineNodeProps {
  hasNode?: boolean;
  children?: React.ReactNode;
  height?: number;
}

export function TimelineNode({
  hasNode = false,
  children,
  height,
}: TimelineNodeProps) {
  return (
    <div className="contents">
      <div className="flex flex-col items-center" style={{ height }}>
        <div
          aria-label="Vertical timeline line"
          className="h-full w-0.5 bg-neutral-200"
        />
        {hasNode && (
          <div
            aria-label="Connector dot"
            className="aspect-square size-4 rounded-full bg-neutral-200"
          />
        )}
        <div
          aria-label="Vertical timeline line"
          className="h-full w-0.5 bg-neutral-200"
        />
      </div>

      {children ?? <div aria-hidden />}
    </div>
  );
}
