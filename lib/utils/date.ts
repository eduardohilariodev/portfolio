import { DateTime } from "luxon";

import { Period } from "../types";

export function getTimePeriod(startDate: Date, endDate: Date = new Date()) {
  const start = new Date(startDate);

  const years = endDate.getFullYear() - start.getFullYear();
  const months = endDate.getMonth() - start.getMonth();

  const totalMonths = years * 12 + months;
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  const parts = [];
  if (displayYears > 0) {
    parts.push(`${displayYears} year${displayYears !== 1 ? "s" : ""}`);
  }
  if (displayMonths > 0) {
    parts.push(`${displayMonths} month${displayMonths !== 1 ? "s" : ""}`);
  }

  return parts.join(" ");
}

interface DateFormatTranslations {
  removeZeroYear: string;
  removeZeroMonth: string;
}

export function getPeriodDurationText(
  period: Period,
  locale: string,
  translations: DateFormatTranslations,
) {
  const luxonLocale = locale === "br" ? "pt-BR" : locale;

  return (
    period.end
      ?.diff(period.start, ["months", "years"])
      .reconfigure({ locale: luxonLocale })
      .toHuman({
        listStyle: "short",
        unitDisplay: "long",
      })
      .replace(new RegExp(translations.removeZeroYear), "")
      .replace(new RegExp(translations.removeZeroMonth), "") ?? ""
  );
}

export function getMonthYearText(
  date: DateTime,
  locale: string,
  format: string,
) {
  const luxonLocale = locale === "br" ? "pt-BR" : locale;
  return date.setLocale(luxonLocale).toFormat(format);
}
