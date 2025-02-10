"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { TbClock, TbSchool } from "react-icons/tb";

import { cn } from "@/lib/utils/cn";
import { getMonthYearText, getPeriodDurationText } from "@/lib/utils/date";

import type { Period } from "@/lib/types";

interface ParentProps {
  img: string;
  name: string;
  period: Period;
}

const columnWidth =
  "grid-cols-[50px_1fr] gap-x-2 md:gap-x-4 md:grid-cols-[80px_1fr]";
export function Parent({ img, name, period }: ParentProps) {
  const t = useTranslations("Experience.date");
  const locale = useLocale();
  const format = t("format.month");

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
            {getMonthYearText(period.start, locale, format)}
            &ndash;
            {period.end
              ? getMonthYearText(period.end, locale, format)
              : t("present")}
          </span>
        </div>
      </div>
      <TimelineNode height={48} />
    </div>
  );
}

interface ChildProps {
  title?: string;
  degree?: string;
  period?: Period;
  description?: string;
  isLast?: boolean;
  children?: React.ReactNode;
  hasNode?: boolean;
  status?: NodeStatus;
}

export function Child({
  children,
  description,
  period,
  hasNode = false,
  isLast = false,
  title,
  degree,
  status = "default",
}: ChildProps) {
  const tEducation = useTranslations("Education");
  const tExperienceDate = useTranslations("Experience.date");
  const tDateFormat = useTranslations("date.format");
  const locale = useLocale();

  let statusClasses;
  switch (status as NodeStatus) {
    case "in_progress":
      statusClasses =
        "ml-2 bg-sky-100 font-bold px-2 py-1 font-sans text-sm dark:font-normal text-sky-600 dark:bg-sky-950 dark:text-sky-400";
      break;
    case "completed":
      statusClasses =
        "ml-2 bg-emerald-100 font-bold px-2 py-1 font-sans text-sm dark:font-normal text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400";
      break;
    default:
      statusClasses = "";
  }

  return (
    <div
      aria-label="Child timeline container"
      className={cn("relative grid", columnWidth)}
    >
      <TimelineNode />

      <TimelineNode hasNode={hasNode} status={status}>
        <h4
          aria-label="Position title"
          className="flex items-center self-center font-serif text-xl leading-6 font-bold md:text-2xl"
        >
          <div className="flex items-center">
            {title}
            {degree && (
              <span className="font-light text-neutral-500">{`, ${degree}`}</span>
            )}
          </div>

          {status && (
            <span className={statusClasses}>
              {tEducation(`progress.${status}`)}
            </span>
          )}
          <br className="md:hidden" />
          {period && (
            <span className="font-light text-neutral-500">
              {` ${tExperienceDate("for")} ${getPeriodDurationText(
                period,
                locale,
                {
                  removeZeroYear: tDateFormat("removeZeroYear"),
                  removeZeroMonth: tDateFormat("removeZeroMonth"),
                },
              )}`}
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

type NodeStatus = "default" | "in_progress" | "completed";

interface TimelineNodeProps {
  hasNode?: boolean;
  children?: React.ReactNode;
  height?: number;
  status?: NodeStatus;
}

export function TimelineNode({
  hasNode = false,
  children,
  height,
  className,
  status = "default",
}: TimelineNodeProps & { className?: string }) {
  const t = useTranslations("Education.progress");

  const getNodeContent = () => {
    if (!hasNode) return null;

    switch (status) {
      case "in_progress":
        return (
          <TbClock
            className="size-8 border-2 border-neutral-900 bg-sky-600 p-1.5 text-neutral-200 dark:border-neutral-200 dark:bg-sky-900 dark:text-neutral-200"
            aria-label={t("in_progress")}
          />
        );
      case "completed":
        return (
          <TbSchool
            className="size-8 border-2 border-neutral-900 bg-emerald-600 p-1.5 text-neutral-200 dark:border-neutral-200 dark:bg-emerald-700"
            aria-label={t("completed")}
          />
        );
      default:
        return (
          <div
            className="aspect-square max-h-4 min-h-4 max-w-4 min-w-4 rounded-full bg-neutral-900 dark:bg-neutral-200"
            aria-label={t("default")}
          />
        );
    }
  };

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
          <div aria-label="Connector indicator">{getNodeContent()}</div>
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
