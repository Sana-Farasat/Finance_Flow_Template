"use client";

/**
 * ActivityFeed Component
 * 
 * Displays a timeline of recent activities.
 * Shows payments, transfers, invoices, and subscription events.
 * 
 * Features:
 * - Timeline design with connecting lines
 * - Activity type icons
 * - Status indicators
 * - Relative time display
 * 
 * @packageDocumentation
 */

import React from "react";
import { cn } from "@/lib/utils";
import { Activity } from "@/lib/types";
import {
  CheckCircle,
  Clock,
  XCircle,
  CreditCard,
  ArrowLeftRight,
  FileText,
  RefreshCw,
} from "lucide-react";

/**
 * ActivityFeedProps interface
 */
interface ActivityFeedProps {
  /** Activities data */
  activities: Activity[];
  /** Additional CSS classes */
  className?: string;
  /** Activity feed title */
  title?: string;
}

/**
 * Get activity icon based on type
 */
function getActivityIcon(type: Activity["type"]) {
  switch (type) {
    case "payment":
      return CreditCard;
    case "transfer":
      return ArrowLeftRight;
    case "invoice":
      return FileText;
    case "subscription":
      return RefreshCw;
  }
}

/**
 * Get status icon
 */
function getStatusIcon(status: Activity["status"]) {
  switch (status) {
    case "completed":
      return CheckCircle;
    case "pending":
      return Clock;
    case "failed":
      return XCircle;
  }
}

/**
 * Get status colors
 */
function getStatusColors(status: Activity["status"]) {
  switch (status) {
    case "completed":
      return "text-green-600 bg-green-100";
    case "pending":
      return "text-yellow-600 bg-yellow-100";
    case "failed":
      return "text-red-600 bg-red-100";
  }
}

/**
 * ActivityFeed component
 */
export function ActivityFeed({ activities, className, title }: ActivityFeedProps) {
  return (
    <div className={cn("bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{title || "Recent Activity"}</h3>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-3 sm:space-y-4">
        {activities.map((activity, index) => {
          const Icon = getActivityIcon(activity.type);
          const StatusIcon = getStatusIcon(activity.status);

          return (
            <div key={activity.id} className="flex gap-3 sm:gap-4 relative">
              {/* Timeline Line */}
              {index !== activities.length - 1 && (
                <div className="absolute left-5 sm:left-6 top-10 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -ml-px" />
              )}

              {/* Icon */}
              <div className="relative shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                {/* Status Badge */}
                <div
                  className={cn(
                    "absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900",
                    getStatusColors(activity.status)
                  )}
                >
                  <StatusIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{activity.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    {activity.amount && (
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                        ${activity.amount.toLocaleString()}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{activity.date}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
