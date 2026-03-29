"use client";

/**
 * RevenueChart Component
 * 
 * Displays revenue data using an area chart.
 * Built with Recharts for smooth animations and interactivity.
 * 
 * Features:
 * - Area chart with gradient fill
 * - Custom tooltips
 * - Responsive design
 * - Time period selector
 * 
 * @packageDocumentation
 */

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChartDataPoint } from "@/lib/types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * RevenueChartProps interface
 */
interface RevenueChartProps {
  /** Chart data */
  data: ChartDataPoint[];
  /** Additional CSS classes */
  className?: string;
  /** Chart title */
  title?: string;
}

/**
 * Custom Tooltip component for the chart
 */
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="font-medium text-gray-900 dark:text-white text-sm">{label}</p>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1 text-sm">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}

/**
 * RevenueChart component
 */
export function RevenueChart({ data, className, title }: RevenueChartProps) {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d">("30d");

  return (
    <div className={cn("bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{title || "Revenue Overview"}</h3>

        {/* Period Selector */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {(["7d", "30d", "90d"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors",
                period === p
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-700" />

            {/* Axes */}
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#colorRevenue)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
