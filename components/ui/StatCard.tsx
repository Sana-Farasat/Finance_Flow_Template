"use client";

/**
 * StatCard Component
 * 
 * Displays a statistical metric with icon, value, and percentage change.
 * Used throughout the dashboard for quick overview metrics.
 * 
 * Features:
 * - Trend indicator (up/down/neutral)
 * - Color-coded based on trend
 * - Icon support
 * - Responsive design
 * 
 * @packageDocumentation
 */

import React from "react";
import { cn } from "@/lib/utils";
import { StatCard as StatCardType } from "@/lib/types";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
} from "lucide-react";

/**
 * Icon mapping for different stat types
 */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
};

/**
 * StatCardProps interface
 */
interface StatCardProps {
  /** Stat card data */
  stat: StatCardType;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StatCard component
 */
export function StatCard({ stat, className }: StatCardProps) {
  const IconComponent = iconMap[stat.icon] || DollarSign;

  const trendConfig = {
    up: {
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    down: {
      icon: TrendingDown,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    neutral: {
      icon: Minus,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  };

  const { icon: TrendIcon, color, bgColor } = trendConfig[stat.trend];

  return (
    <div
      className={cn(
        // Base styles
        "bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6",
        "transition-all duration-200",
        // Hover effect
        "hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700",
        // Ensure content doesn't overflow
        "overflow-hidden min-w-[280px]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Left Section: Icon + Title */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Icon Container */}
          <div
            className={cn(
              "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0",
              "bg-gradient-to-br from-indigo-500 to-purple-600"
            )}
          >
            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>

          {/* Title + Value */}
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.title}</h3>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
          </div>
        </div>

        {/* Right Section: Trend */}
        <div className={cn("px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 shrink-0", bgColor)}>
          <TrendIcon className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4", color)} />
          <span className={cn("text-xs sm:text-sm font-semibold whitespace-nowrap", color)}>
            {stat.change > 0 ? "+" : ""}
            {stat.change}%
          </span>
        </div>
      </div>

      {/* Period */}
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 sm:mt-4">{stat.period}</p>
    </div>
  );
}
