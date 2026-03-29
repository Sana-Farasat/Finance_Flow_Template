"use client";

/**
 * Analytics Page
 * 
 * Comprehensive analytics dashboard with multiple charts and metrics.
 * Shows revenue trends, expense breakdown, and performance indicators.
 * 
 * @packageDocumentation
 */

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import { StatCard } from "@/components/ui/StatCard";
import { cn } from "@/lib/utils";
import { StatCard as StatCardType, ChartDataPoint } from "@/lib/types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity } from "lucide-react";

/**
 * Analytics statistics data
 */
const analyticsStats: StatCardType[] = [
  {
    id: "1",
    title: "Total Revenue",
    value: "$892,450",
    change: 18.2,
    period: "vs last quarter",
    icon: "DollarSign",
    trend: "up",
  },
  {
    id: "2",
    title: "Total Expenses",
    value: "$425,890",
    change: -5.4,
    period: "vs last quarter",
    icon: "DollarSign",
    trend: "down",
  },
  {
    id: "3",
    title: "Profit Margin",
    value: "52.3%",
    change: 12.8,
    period: "vs last quarter",
    icon: "Activity",
    trend: "up",
  },
  {
    id: "4",
    title: "Active Customers",
    value: "12,847",
    change: 24.5,
    period: "vs last quarter",
    icon: "Users",
    trend: "up",
  },
];

/**
 * Monthly revenue data
 */
const monthlyRevenue: ChartDataPoint[] = [
  { label: "Jan", value: 65000, value2: 45000 },
  { label: "Feb", value: 72000, value2: 48000 },
  { label: "Mar", value: 68000, value2: 52000 },
  { label: "Apr", value: 78000, value2: 55000 },
  { label: "May", value: 85000, value2: 58000 },
  { label: "Jun", value: 92000, value2: 62000 },
  { label: "Jul", value: 88000, value2: 65000 },
  { label: "Aug", value: 95000, value2: 68000 },
  { label: "Sep", value: 102000, value2: 72000 },
  { label: "Oct", value: 108000, value2: 75000 },
  { label: "Nov", value: 115000, value2: 78000 },
  { label: "Dec", value: 125000, value2: 82000 },
];

/**
 * Expense breakdown data
 */
const expenseData = [
  { name: "Salaries", value: 45, color: "#6366f1" },
  { name: "Marketing", value: 25, color: "#8b5cf6" },
  { name: "Operations", value: 15, color: "#a855f7" },
  { name: "Software", value: 10, color: "#d946ef" },
  { name: "Other", value: 5, color: "#e879f9" },
];

/**
 * Weekly performance data
 */
const weeklyData = [
  { label: "Mon", revenue: 12500, expenses: 8200 },
  { label: "Tue", revenue: 15800, expenses: 9500 },
  { label: "Wed", revenue: 14200, expenses: 8800 },
  { label: "Thu", revenue: 17500, expenses: 10200 },
  { label: "Fri", revenue: 19800, expenses: 11500 },
  { label: "Sat", revenue: 11200, expenses: 7800 },
  { label: "Sun", revenue: 9500, expenses: 6500 },
];

/**
 * Custom tooltip for charts
 */
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="font-medium text-gray-900 dark:text-white text-sm">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} className="text-sm mt-1 text-gray-600 dark:text-gray-300" style={{ color: p.color }}>
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

/**
 * Analytics page component
 */
export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "1y">("1y");

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
              Deep dive into your financial performance
            </p>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full sm:w-auto overflow-x-auto">
            {(["7d", "30d", "90d", "1y"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={cn(
                  "flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap",
                  timeRange === range
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {analyticsStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Revenue vs Expenses Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Revenue vs Expenses
          </h3>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyRevenue}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-700" />
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
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Revenue"
                  stroke="#6366f1"
                  strokeWidth={2}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="value2"
                  name="Expenses"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fill="url(#colorExpenses)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Expense Breakdown */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Expense Breakdown
            </h3>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="80%"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {expenseData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{item.name}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white ml-auto">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Performance */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Weekly Performance
            </h3>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-700" />
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
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" name="Expenses" fill="#f87171" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
