/**
 * Utility functions for the Finance SaaS Dashboard
 * These helpers are used throughout the application
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names with Tailwind CSS conflict resolution
 * @param inputs - Class values to merge
 * @returns Merged class string with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as currency
 * @param value - The number to format
 * @param currency - Currency code (default: USD)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Formats a number with compact notation (e.g., 1.2K, 3.4M)
 * @param value - The number to format
 * @returns Formatted compact number string
 */
export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Formats a date to a readable string
 * @param date - The date to format
 * @param format - Format style: 'short' | 'long' | 'relative'
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  format: "short" | "long" | "relative" = "short"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (format === "relative") {
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      Math.ceil(
        (dateObj.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      ),
      "day"
    );
  }

  const options: Intl.DateTimeFormatOptions =
    format === "short"
      ? { month: "short", day: "numeric", year: "numeric" }
      : { weekday: "long", month: "long", day: "numeric", year: "numeric" };

  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

/**
 * Calculates percentage change between two values
 * @param current - Current value
 * @param previous - Previous value
 * @returns Percentage change as a number
 */
export function calculatePercentageChange(
  current: number,
  previous: number
): number {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Generates a random number within a range
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random number between min and max
 */
export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
