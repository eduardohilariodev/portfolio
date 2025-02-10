"use client";

import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { getPeriodDurationText } from "@/lib/utils/date";

import type { Period } from "@/lib/types";

interface ParentProps {
  img: string;
  name: string;
  period: Period;
}

const columnWidth =
  "grid-cols-[50px_1fr] gap-x-2 md:gap-x-4 md:grid-cols-[80px_1fr]";
export function Parent({ img, name, period }: ParentProps) {
  return (
    <div className={cn("grid", columnWidth)}>
      <div className="flex flex-col">
        <Image
          src={img}
          alt={name}
          height={80}
          width={80}
          className="size-[50px] border-2 border-neutral-900 object-contain md:size-[80px] dark:border-neutral-200"
          aria-label="Parent logo"
        />
        <TimelineNode className="h-full" />
      </div>
      <div className="flex grow flex-col justify-end md:gap-y-2">
        <hr className="border-1 border-neutral-900 dark:border-neutral-200" />
        <div
          aria-label="Parent details"
          className="flex flex-col justify-between text-lg md:flex-row md:items-center md:text-3xl"
        >
          <h3 className="font-bold" aria-label="Title">
            {name}
          </h3>
          <span
            aria-label="Period"
            className="font-serif font-light text-neutral-500 dark:text-neutral-200"
          >
            {period.start.toFormat("LLL yyyy")}
            &ndash;
            {period.end?.toFormat("LLL yyyy") ?? "Present"}
          </span>
        </div>
      </div>
      <TimelineNode height={48} />
    </div>
  );
}

interface ChildProps {
  title?: string;
  period?: Period;
  description?: string;
  isLast?: boolean;
  children?: React.ReactNode;
  hasNode?: boolean;
}

export function Child({
  children,
  description,
  period,
  hasNode = false,
  isLast = false,
  title,
}: ChildProps) {
  return (
    <div
      aria-label="Child timeline container"
      className={cn("relative grid", columnWidth)}
    >
      <TimelineNode />

      <TimelineNode hasNode={hasNode}>
        <h4
          aria-label="Position title"
          className="self-center font-serif text-xl leading-6 font-bold md:text-2xl"
        >
          {title}
          <br className="md:hidden" />
          {period && (
            <span className="font-light text-neutral-500">
              {` for ${getPeriodDurationText(period)}`}
            </span>
          )}
        </h4>
      </TimelineNode>

      <TimelineNode>
        {children ?? (
          <div
            aria-label="Project content"
            className="md:text-md mt-5 mb-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-400"
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
  className,
}: TimelineNodeProps & { className?: string }) {
  return (
    <div className={cn("contents")}>
      <div
        className={cn("flex flex-col items-center", className)}
        style={{ height }}
      >
        <div
          aria-label="Vertical timeline line"
          className="h-full w-0.5 bg-neutral-900 dark:bg-neutral-200"
        />
        {hasNode && (
          <div
            aria-label="Connector dot"
            className="aspect-square max-h-4 min-h-4 max-w-4 min-w-4 rounded-full bg-neutral-900 dark:bg-neutral-200"
          />
        )}
        <div
          aria-label="Vertical timeline line"
          className="h-full w-0.5 bg-neutral-900 dark:bg-neutral-200"
        />
      </div>

      {children ?? <div aria-hidden />}
    </div>
  );
}
