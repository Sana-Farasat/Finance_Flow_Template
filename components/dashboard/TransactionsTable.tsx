"use client";

/**
 * TransactionsTable Component
 * 
 * Displays a list of recent transactions in a table format.
 * Features sorting, status badges, and responsive design.
 * 
 * Features:
 * - Sortable columns
 * - Status badges (completed, pending, failed)
 * - Type indicators (income, expense, transfer)
 * - Responsive table with horizontal scroll
 * 
 * @packageDocumentation
 */

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Transaction } from "@/lib/types";
import { ArrowUpRight, ArrowDownRight, ArrowLeftRight, ChevronUp, ChevronDown } from "lucide-react";

/**
 * TransactionsTableProps interface
 */
interface TransactionsTableProps {
  /** Transactions data */
  transactions: Transaction[];
  /** Additional CSS classes */
  className?: string;
  /** Maximum number of transactions to display */
  limit?: number;
  /** Whether to show "View All" link */
  showViewAll?: boolean;
}

/**
 * Get transaction icon based on type
 */
function getTransactionIcon(type: Transaction["type"]) {
  switch (type) {
    case "income":
      return ArrowUpRight;
    case "expense":
      return ArrowDownRight;
    case "transfer":
      return ArrowLeftRight;
  }
}

/**
 * Get transaction icon colors based on type
 */
function getTransactionColors(type: Transaction["type"]) {
  switch (type) {
    case "income":
      return {
        bg: "bg-green-100",
        icon: "text-green-600",
      };
    case "expense":
      return {
        bg: "bg-red-100",
        icon: "text-red-600",
      };
    case "transfer":
      return {
        bg: "bg-blue-100",
        icon: "text-blue-600",
      };
  }
}

/**
 * Get status badge styles
 */
function getStatusStyles(status: Transaction["status"]) {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "failed":
      return "bg-red-100 text-red-700";
  }
}

/**
 * TransactionsTable component
 */
export function TransactionsTable({
  transactions,
  className,
  limit,
  showViewAll = true,
}: TransactionsTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  // Sort transactions
  const sortedTransactions = React.useMemo(() => {
    let sortable = [...transactions];
    if (sortConfig !== null) {
      sortable.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        // Handle undefined values
        if (aValue === undefined || bValue === undefined) return 0;
        
        // Handle different types
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
        }
        
        return 0;
      });
    }
    return limit ? sortable.slice(0, limit) : sortable;
  }, [transactions, sortConfig, limit]);

  /**
   * Handle column sort
   */
  const handleSort = (key: keyof Transaction) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return prev.direction === "asc"
          ? { key, direction: "desc" }
          : null;
      }
      return { key, direction: "asc" };
    });
  };

  /**
   * Render sort icon
   */
  const renderSortIcon = (key: keyof Transaction) => {
    if (sortConfig?.key !== key) {
      return <ChevronUp className="h-4 w-4 text-gray-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="h-4 w-4 text-indigo-600" />
    ) : (
      <ChevronDown className="h-4 w-4 text-indigo-600" />
    );
  };

  return (
    <div className={cn("bg-white rounded-xl border border-gray-200", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        {showViewAll && (
          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            View All
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left">
                <button
                  onClick={() => handleSort("type")}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
                >
                  Type
                  {renderSortIcon("type")}
                </button>
              </th>
              <th className="px-6 py-3 text-left">
                <button
                  onClick={() => handleSort("recipient")}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
                >
                  Recipient
                  {renderSortIcon("recipient")}
                </button>
              </th>
              <th className="px-6 py-3 text-left">
                <button
                  onClick={() => handleSort("date")}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
                >
                  Date
                  {renderSortIcon("date")}
                </button>
              </th>
              <th className="px-6 py-3 text-left">
                <button
                  onClick={() => handleSort("amount")}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
                >
                  Amount
                  {renderSortIcon("amount")}
                </button>
              </th>
              <th className="px-6 py-3 text-left">
                <button
                  onClick={() => handleSort("status")}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
                >
                  Status
                  {renderSortIcon("status")}
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedTransactions.map((transaction) => {
              const Icon = getTransactionIcon(transaction.type);
              const colors = getTransactionColors(transaction.type);

              return (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Type */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", colors.bg)}>
                        <Icon className={cn("h-5 w-5", colors.icon)} />
                      </div>
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {transaction.type}
                      </span>
                    </div>
                  </td>

                  {/* Recipient */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{transaction.recipient}</p>
                      {transaction.description && (
                        <p className="text-xs text-gray-500 mt-0.5">{transaction.description}</p>
                      )}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">{transaction.date}</span>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "text-sm font-semibold",
                        transaction.type === "income"
                          ? "text-green-600"
                          : transaction.type === "expense"
                          ? "text-red-600"
                          : "text-gray-900"
                      )}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toLocaleString()}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex px-2.5 py-1 text-xs font-medium rounded-full capitalize",
                        getStatusStyles(transaction.status)
                      )}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
