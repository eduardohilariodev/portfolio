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
  return (
    period.end
      ?.diff(period.start, ["months", "years"])
      .toHuman({
        listStyle: "short",
        unitDisplay: "long",
      })
      .replace(/0 years ?and? ?/, "")
      .replace(/and 0 months/, "") ?? ""
  );
}
