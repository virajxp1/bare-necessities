"use client";

import { useSyncExternalStore } from "react";

function toRomanNumeral(value: number): string {
  const numerals: Array<[number, string]> = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let remaining = value;
  let result = "";

  for (const [number, numeral] of numerals) {
    while (remaining >= number) {
      result += numeral;
      remaining -= number;
    }
  }

  return result;
}

export function YearText({
  fallbackYear,
  format = "numeric",
}: {
  fallbackYear: number;
  format?: "numeric" | "roman";
}) {
  const year = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => fallbackYear,
  );

  return <>{format === "roman" ? toRomanNumeral(year) : year}</>;
}
