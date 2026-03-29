"use client";

/**
 * Dashboard Page
 * 
 * Main dashboard page for the Finance SaaS application.
 * Displays overview statistics, revenue chart, recent transactions, and activity feed.
 * 
 * This is the primary landing page after login and provides users with a quick
 * overview of their financial data and recent activities.
 * 
 * @packageDocumentation
 */

import React from "react";
import { DashboardLayout } from "@/components/layout";
import { StatCard } from "@/components/ui/StatCard";
import { RevenueChart, TransactionsTable, ActivityFeed } from "@/components/dashboard";
import { StatCard as StatCardType, Transaction, Activity, ChartDataPoint } from "@/lib/types";

/**
 * Mock statistics data
 * In production, this would come from an API
 */
const statsData: StatCardType[] = [
  {
    id: "1",
    title: "Total Revenue",
    value: "$124,592",
    change: 12.5,
    period: "vs last month",
    icon: "DollarSign",
    trend: "up",
  },
  {
    id: "2",
    title: "Total Expenses",
    value: "$48,294",
    change: -8.2,
    period: "vs last month",
    icon: "DollarSign",
    trend: "down",
  },
  {
    id: "3",
    title: "Active Users",
    value: "8,549",
    change: 23.1,
    period: "vs last month",
    icon: "Users",
    trend: "up",
  },
  {
    id: "4",
    title: "Total Transactions",
    value: "45,892",
    change: 5.4,
    period: "vs last month",
    icon: "Activity",
    trend: "up",
  },
];

/**
 * Mock revenue chart data
 */
const revenueData: ChartDataPoint[] = [
  { label: "Jan", value: 45000 },
  { label: "Feb", value: 52000 },
  { label: "Mar", value: 48000 },
  { label: "Apr", value: 61000 },
  { label: "May", value: 55000 },
  { label: "Jun", value: 67000 },
  { label: "Jul", value: 72000 },
  { label: "Aug", value: 69000 },
  { label: "Sep", value: 78000 },
  { label: "Oct", value: 85000 },
  { label: "Nov", value: 92000 },
  { label: "Dec", value: 98000 },
];

/**
 * Mock transactions data
 */
const transactionsData: Transaction[] = [
  {
    id: "1",
    type: "income",
    category: "Payment",
    amount: 2500,
    date: "Dec 24, 2025",
    status: "completed",
    recipient: "John Smith",
    description: "Invoice #2541",
  },
  {
    id: "2",
    type: "expense",
    category: "Software",
    amount: 199,
    date: "Dec 24, 2025",
    status: "completed",
    recipient: "Adobe Creative",
    description: "Monthly subscription",
  },
  {
    id: "3",
    type: "transfer",
    category: "Transfer",
    amount: 5000,
    date: "Dec 23, 2025",
    status: "pending",
    recipient: "Business Account",
    description: "Transfer to savings",
  },
  {
    id: "4",
    type: "income",
    category: "Payment",
    amount: 1850,
    date: "Dec 23, 2025",
    status: "completed",
    recipient: "Sarah Johnson",
    description: "Invoice #2540",
  },
  {
    id: "5",
    type: "expense",
    category: "Office",
    amount: 450,
    date: "Dec 22, 2025",
    status: "completed",
    recipient: "Staples Inc.",
    description: "Office supplies",
  },
];

/**
 * Mock activity data
 */
const activitiesData: Activity[] = [
  {
    id: "1",
    type: "payment",
    title: "Payment received from John Smith",
    description: "Invoice #2541 has been paid",
    date: "5 min ago",
    amount: 2500,
    status: "completed",
  },
  {
    id: "2",
    type: "subscription",
    title: "Monthly subscription renewed",
    description: "Adobe Creative Cloud",
    date: "1 hour ago",
    amount: 199,
    status: "completed",
  },
  {
    id: "3",
    type: "transfer",
    title: "Transfer to Business Account",
    description: "Monthly savings transfer",
    date: "2 hours ago",
    amount: 5000,
    status: "pending",
  },
  {
    id: "4",
    type: "invoice",
    title: "Invoice #2542 created",
    description: "Sent to Michael Brown",
    date: "3 hours ago",
    amount: 3200,
    status: "pending",
  },
  {
    id: "5",
    type: "payment",
    title: "Payment received from Sarah Johnson",
    description: "Invoice #2540 has been paid",
    date: "5 hours ago",
    amount: 1850,
    status: "completed",
  },
];

/**
 * Dashboard page component
 */
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
              Welcome back! Here&apos;s your financial overview.
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Export Report
            </button>
            <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              + Add Transaction
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Revenue Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RevenueChart data={revenueData} title="Revenue Overview" />
          </div>

          {/* Activity Feed - Takes 1 column */}
          <div>
            <ActivityFeed activities={activitiesData} title="Recent Activity" />
          </div>
        </div>

        {/* Transactions Table */}
        <TransactionsTable
          transactions={transactionsData}
          limit={5}
          showViewAll
        />
      </div>
    </DashboardLayout>
  );
}
