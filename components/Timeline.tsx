"use client";

import Image from "next/image";

interface ParentProps {
  img: string;
  name: string;
  start: string;
  end: string;
}

interface ChildProps {
  title: string;
  description?: string;
  isLast?: boolean;
}

export function Parent({ img, name, start, end }: ParentProps) {
  return (
    <div
      aria-label="Parent container"
      className="flex gap-4 text-lg font-light dark:text-neutral-200"
    >
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
          className="flex items-center justify-between text-2xl"
        >
          <h3 aria-label="Title">{name}</h3>
          <span aria-label="Period">
            {start}&ndash;{end}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Child({ title, description, isLast = false }: ChildProps) {
  return (
    <div
      aria-label="Child timeline container"
      className="grid grid-cols-[80px_1fr] gap-x-4"
    >
      <TimelineNode />

      <TimelineNode hasNode>
        <h4
          aria-label="Position title"
          className="self-center font-serif text-3xl text-neutral-200"
        >
          {title}
        </h4>
      </TimelineNode>

      <TimelineNode>
        <div
          aria-label="Project content"
          className="mb-6 space-y-4 dark:text-neutral-300"
        >
          {description && <p aria-label="Project description">{description}</p>}
        </div>
      </TimelineNode>

      {isLast && (
        <TimelineNode>
          <div aria-hidden="true" />
        </TimelineNode>
      )}
    </div>
  );
}

interface TimelineNodeProps {
  hasNode?: boolean;
  children?: React.ReactNode;
}

export function TimelineNode({ hasNode = false, children }: TimelineNodeProps) {
  return (
    <div className="contents">
      <div className="flex flex-col items-center">
        {hasNode && (
          <div
            aria-label="Connector dot"
            className="size-4 rounded-full bg-neutral-200"
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
