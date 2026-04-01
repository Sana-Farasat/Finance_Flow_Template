"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardContent({ children }: DashboardLayoutProps) {
  const { isCollapsed, isMobileOpen } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Sidebar - Fixed on Mobile, Relative on Desktop */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div
        className={cn(
          "flex-1 flex flex-col h-full overflow-hidden transition-all duration-300",
          // Desktop: no margin shift needed as sidebar is fixed/relative
        )}
      >
        {/* Header - Full Width */}
        <Header />

        {/* Page Content Area */}
        <main className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true} defaultCollapsed={false}>
      <DashboardContent>
        {children}
      </DashboardContent>
    </SidebarProvider>
  );
}