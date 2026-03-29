// "use client";

// /**
//  * DashboardLayout Component
//  *
//  * Main layout wrapper for all dashboard pages.
//  * Combines Sidebar and Header with responsive behavior.
//  * Manages sidebar collapse state and mobile menu state.
//  *
//  * @packageDocumentation
//  */

// import React from "react";
// import { Sidebar } from "./Sidebar";
// import { Header } from "./Header";
// import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
// import { cn } from "@/lib/utils";

// /**
//  * DashboardLayoutProps interface
//  */
// interface DashboardLayoutProps {
//   /** Page content */
//   children: React.ReactNode;
// }

// /**
//  * DashboardContent component (internal)
//  * The actual layout content that gets wrapped with SidebarProvider
//  */
// function DashboardContent({ children }: DashboardLayoutProps) {
//   const { isCollapsed } = useSidebar();
  
//   return (
//     <>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content Area - Pushed by sidebar */}
//       <div
//         className={cn(
//           "transition-all duration-300 min-h-screen flex flex-col",
//           // Mobile: full width, Desktop: offset by sidebar width
//           "ml-0",
//           // Desktop: dynamic width based on collapsed state
//           "lg:ml-64",
//           isCollapsed && "lg:ml-20"
//         )}
//       >
//         {/* Header */}
//         <Header />

//         {/* Page Content - Full width container */}
//         <main className="flex-1 p-4 md:p-6 lg:p-8">
//           <div className="w-full">
//             {children}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// /**
//  * DashboardLayout component
//  * Provides consistent layout structure across all dashboard pages
//  */
// export function DashboardLayout({ children }: DashboardLayoutProps) {
//   return (
//     <SidebarProvider defaultOpen={true} defaultCollapsed={false}>
//       <DashboardContent>
//           {children}
//       </DashboardContent>
//     </SidebarProvider>
//   );
// }

////////////////////////////////
/////////////////////////////////////

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
      {/* Sidebar - Fixed on Desktop, Slide on Mobile */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div
        className={cn(
          "flex-1 flex flex-col overflow-hidden transition-all duration-300",
          // Desktop: shift content according to sidebar width
          "lg:ml-0",
        )}
      >
        {/* Header */}
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