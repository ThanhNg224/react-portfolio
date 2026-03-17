const MONTH_NAME_TO_INDEX = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

export const parseCvUpdateDate = (rawValue) => {
  if (!rawValue || typeof rawValue !== "string") {
    return null;
  }

  const value = rawValue.trim();

  // Handles full ISO dates like YYYY-MM-DD or YYYY/MM/DD
  const fullIsoMatch = value.match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/);
  if (fullIsoMatch) {
    const year = Number(fullIsoMatch[1]);
    const month = Number(fullIsoMatch[2]);
    const day = Number(fullIsoMatch[3]);

    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return new Date(year, month - 1, day);
    }
  }

  // Handles MM/YYYY or MM-YYYY
  const monthYearMatch = value.match(/^(\d{1,2})[/-](\d{4})$/);
  if (monthYearMatch) {
    const month = Number(monthYearMatch[1]);
    const year = Number(monthYearMatch[2]);

    if (month >= 1 && month <= 12) {
      return new Date(year, month - 1, 1);
    }
  }

  // Handles YYYY/MM or YYYY-MM
  const yearMonthMatch = value.match(/^(\d{4})[/-](\d{1,2})$/);
  if (yearMonthMatch) {
    const year = Number(yearMonthMatch[1]);
    const month = Number(yearMonthMatch[2]);

    if (month >= 1 && month <= 12) {
      return new Date(year, month - 1, 1);
    }
  }

  // Handles text month formats like "Aug 2025" / "August 2025"
  const textMonthMatch = value.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (textMonthMatch) {
    const monthToken = textMonthMatch[1].toLowerCase();
    const year = Number(textMonthMatch[2]);
    const monthIndex = MONTH_NAME_TO_INDEX[monthToken];

    if (Number.isInteger(monthIndex)) {
      return new Date(year, monthIndex, 1);
    }
  }

  return null;
};

export const isCvFresh = (updateDateValue, maxAgeInDays = 60, now = new Date()) => {
  const parsedDate = parseCvUpdateDate(updateDateValue);

  if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
    return false;
  }

  const diffMs = now.getTime() - parsedDate.getTime();
  if (diffMs < 0) {
    return true;
  }

  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays <= maxAgeInDays;
};
