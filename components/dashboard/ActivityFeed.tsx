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
    <div className={cn("bg-white rounded-xl border border-gray-200 p-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title || "Recent Activity"}</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = getActivityIcon(activity.type);
          const StatusIcon = getStatusIcon(activity.status);

          return (
            <div key={activity.id} className="flex gap-4">
              {/* Timeline Line */}
              {index !== activities.length - 1 && (
                <div className="absolute left-8 top-12 w-0.5 h-full bg-gray-200 -ml-px" />
              )}

              {/* Icon */}
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                {/* Status Badge */}
                <div
                  className={cn(
                    "absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white",
                    getStatusColors(activity.status)
                  )}
                >
                  <StatusIcon className="h-3 w-3" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{activity.description}</p>
                  </div>
                  <div className="text-right">
                    {activity.amount && (
                      <p className="text-sm font-semibold text-gray-900">
                        ${activity.amount.toLocaleString()}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">{activity.date}</p>
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
