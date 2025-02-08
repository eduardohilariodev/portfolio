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

export function getPeriodDurationText(period: Period) {
  const end = period.end ?? DateTime.now();
  const diff = end.diff(period.start, ["months", "years"]);

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  const parts = [];
  if (years > 0) {
    parts.push(`${years} year${years === 1 ? "" : "s"}`);
  }
  if (months > 0) {
    parts.push(`${months} month${months === 1 ? "" : "s"}`);
  }

  return parts.join(" ");
}
