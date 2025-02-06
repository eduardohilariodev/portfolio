export function getTimePeriod(startDate: Date, endDate: Date = new Date()) {
  const start = new Date(startDate);
  const end = endDate;

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

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
