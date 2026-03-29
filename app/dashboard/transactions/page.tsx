"use client";

/**
 * Transactions Page
 * 
 * Full transactions listing page with filters and advanced search.
 * Users can view all transactions, filter by type/status, and export data.
 * 
 * @packageDocumentation
 */

import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import { TransactionsTable } from "@/components/dashboard";
import { Transaction } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Filter, Download, Search, X } from "lucide-react";

/**
 * Extended transactions data for the full page
 */
const allTransactions: Transaction[] = [
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
  {
    id: "6",
    type: "income",
    category: "Refund",
    amount: 299,
    date: "Dec 22, 2025",
    status: "completed",
    recipient: "Apple Store",
    description: "Product return",
  },
  {
    id: "7",
    type: "expense",
    category: "Utilities",
    amount: 350,
    date: "Dec 21, 2025",
    status: "completed",
    recipient: "Electric Company",
    description: "Monthly electricity bill",
  },
  {
    id: "8",
    type: "transfer",
    category: "Transfer",
    amount: 1000,
    date: "Dec 21, 2025",
    status: "completed",
    recipient: "Personal Account",
    description: "Monthly allowance",
  },
  {
    id: "9",
    type: "income",
    category: "Payment",
    amount: 3200,
    date: "Dec 20, 2025",
    status: "pending",
    recipient: "Michael Brown",
    description: "Invoice #2539",
  },
  {
    id: "10",
    type: "expense",
    category: "Marketing",
    amount: 750,
    date: "Dec 20, 2025",
    status: "completed",
    recipient: "Google Ads",
    description: "Ad campaign",
  },
];

/**
 * Filter options type
 */
type FilterType = "all" | "income" | "expense" | "transfer";
type StatusType = "all" | "completed" | "pending" | "failed";

/**
 * Transactions page component
 */
export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [statusFilter, setStatusFilter] = useState<StatusType>("all");

  /**
   * Filter transactions based on search and filters
   */
  const filteredTransactions = allTransactions.filter((tx) => {
    // Search filter
    const matchesSearch =
      tx.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.description?.toLowerCase().includes(searchQuery.toLowerCase());

    // Type filter
    const matchesType = typeFilter === "all" || tx.type === typeFilter;

    // Status filter
    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
            <p className="text-gray-500 mt-1">
              Manage and track all your transactions
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as FilterType)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
              >
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                <option value="transfer">Transfer</option>
              </select>
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusType)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          {/* Active Filters Display */}
          {(typeFilter !== "all" || statusFilter !== "all" || searchQuery) && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-500">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                  Search: &quot;{searchQuery}&quot;
                  <button onClick={() => setSearchQuery("")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {typeFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full capitalize">
                  {typeFilter}
                  <button onClick={() => setTypeFilter("all")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {statusFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full capitalize">
                  {statusFilter}
                  <button onClick={() => setStatusFilter("all")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setTypeFilter("all");
                  setStatusFilter("all");
                }}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {filteredTransactions.length} of {allTransactions.length} transactions
          </p>
        </div>

        {/* Transactions Table */}
        <TransactionsTable
          transactions={filteredTransactions}
          showViewAll={false}
        />
      </div>
    </DashboardLayout>
  );
}
