"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/SidebarContext";
import { NavItem } from "@/lib/types";
import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  CreditCard,
  Settings,
  HelpCircle,
};

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
  { id: "transactions", label: "Transactions", icon: "ArrowLeftRight", href: "/dashboard/transactions", badge: 3 },
  { id: "analytics", label: "Analytics", icon: "PieChart", href: "/dashboard/analytics" },
  { id: "cards", label: "Cards", icon: "CreditCard", href: "/dashboard/cards" },
  { id: "settings", label: "Settings", icon: "Settings", href: "/dashboard/settings" },
];

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const {
    isCollapsed,
    toggleCollapsed,
    isMobileOpen,
    toggleMobile,
    isMobile,
  } = useSidebar();

  const pathname = usePathname();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || LayoutDashboard;
    return <IconComponent className="h-5 w-5" />;
  };

  const handleLinkClick = () => {
    if (isMobile) {
      toggleMobile();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          "inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMobile}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "top-0 left-0 z-50 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out",
          // Width Control
          isCollapsed ? "lg:w-20" : "lg:w-64",
          // Mobile Control - slide from left
          isMobile
            ? (isMobileOpen ? "w-72 translate-x-0" : "-translate-x-full w-72")
            : "translate-x-0"
        )}
      >
        {/* Logo + Collapse Button */}
        <div
          className={cn(
            "flex items-center h-16 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800",
            isCollapsed && "lg:justify-center lg:px-4"
          )}
        >
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 text-lg sm:text-xl font-bold text-gray-900 dark:text-white outline-none",
              isCollapsed && "lg:hidden"
            )}
            onClick={handleLinkClick}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">F</span>
            </div>
            <span>FinanceFlow</span>
          </Link>

          {/* Collapse Button - Desktop only */}
          <button
            onClick={toggleCollapsed}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 ml-auto"
            aria-label={isCollapsed ? "Expand" : "Collapse"}
          >
            <ChevronLeft
              className={cn(
                "h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform",
                isCollapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 sm:px-3 py-4 sm:py-6 space-y-1 sm:space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = getIcon(item.icon);

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all group",
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border-l-0"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  isCollapsed && "lg:justify-center lg:px-3"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <span className={cn(isActive && "text-indigo-600 dark:text-indigo-400")}>
                  {IconComponent}
                </span>
                <span className={cn("truncate", isCollapsed && "lg:hidden")}>
                  {item.label}
                </span>

                {item.badge && (
                  <span
                    className={cn(
                      "ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
                      isCollapsed && "lg:hidden"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Help Section */}
        <div className="p-2 sm:p-3 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/dashboard/help"
            onClick={handleLinkClick}
            className={cn(
              "flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
              isCollapsed && "lg:justify-center lg:px-3"
            )}
          >
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className={cn(isCollapsed && "lg:hidden")}>Help & Support</span>
          </Link>
        </div>
      </aside>
    </>
  );
}