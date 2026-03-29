// "use client";

// /**
//  * Sidebar Component
//  * 
//  * Main navigation sidebar for the Finance SaaS Dashboard.
//  * Features:
//  * - Collapsible sidebar for desktop
//  * - Mobile-responsive with slide-out drawer
//  * - Active state highlighting
//  * - Navigation badges for notifications
//  * 
//  * @packageDocumentation
//  */

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { useSidebar } from "@/contexts/SidebarContext";
// import { NavItem } from "@/lib/types";
// import {
//   LayoutDashboard,
//   ArrowLeftRight,
//   PieChart,
//   CreditCard,
//   Settings,
//   HelpCircle,
//   ChevronLeft,
//   Menu,
// } from "lucide-react";

// /**
//  * Icon mapping for navigation items
//  */
// const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
//   LayoutDashboard,
//   ArrowLeftRight,
//   PieChart,
//   CreditCard,
//   Settings,
//   HelpCircle,
// };

// /**
//  * Navigation items configuration
//  */
// const navItems: NavItem[] = [
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: "LayoutDashboard",
//     href: "/dashboard",
//   },
//   {
//     id: "transactions",
//     label: "Transactions",
//     icon: "ArrowLeftRight",
//     href: "/dashboard/transactions",
//     badge: 3,
//   },
//   {
//     id: "analytics",
//     label: "Analytics",
//     icon: "PieChart",
//     href: "/dashboard/analytics",
//   },
//   {
//     id: "cards",
//     label: "Cards",
//     icon: "CreditCard",
//     href: "/dashboard/cards",
//   },
//   {
//     id: "settings",
//     label: "Settings",
//     icon: "Settings",
//     href: "/dashboard/settings",
//   },
// ];

// /**
//  * SidebarProps interface
//  */
// interface SidebarProps {
//   /** Callback when mobile sidebar should close */
//   onClose?: () => void;
// }

// /**
//  * Sidebar component with responsive behavior
//  */
// export function Sidebar({ onClose }: SidebarProps) {
//   const {
//     isOpen,
//     toggleSidebar,
//     isCollapsed,
//     toggleCollapsed,
//     isMobileOpen,
//     toggleMobile,
//     isMobile,
//   } = useSidebar();
  
//   const pathname = usePathname();

//   /**
//    * Get icon component by name
//    */
//   const getIcon = (iconName: string) => {
//     const IconComponent = iconMap[iconName] || LayoutDashboard;
//     return <IconComponent className="h-5 w-5" />;
//   };

//   /**
//    * Handle collapse toggle
//    */
//   const handleCollapseToggle = () => {
//     toggleCollapsed();
//   };

//   /**
//    * Handle mobile link click
//    */
//   const handleLinkClick = () => {
//     if (isMobile) {
//       toggleMobile();
//     }
//   };

//   return (
//     <>
//       {/* Mobile Overlay */}
//       <div
//         className={cn(
//           "fixed inset-0 z-50 bg-black/50 lg:hidden",
//           "transition-opacity duration-300",
//           isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         )}
//         onClick={toggleMobile}
//         aria-hidden="true"
//       />

//       {/* Sidebar Container */}
//       <aside
//         className={cn(
//           // Base styles
//           "fixed top-0 left-0 z-50 h-full bg-white border-r border-gray-200 dark:border-gray-700",
//           "transition-all duration-300 ease-in-out",
//           // Desktop width states
//           isCollapsed ? "lg:w-20" : "lg:w-64",
//           // Mobile state - hidden on mobile unless open, always visible on desktop (lg)
//           isMobile && !isMobileOpen ? "-translate-x-full" : "translate-x-0"
//         )}
//       >
//         {/* Logo Section */}
//         <div
//           className={cn(
//             "flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700",
//             isCollapsed && "lg:justify-center lg:px-3"
//           )}
//         >
//           <Link
//             href="/dashboard"
//             className={cn(
//               "flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white",
//               isCollapsed && "lg:hidden"
//             )}
//             onClick={handleLinkClick}
//           >
//             <div className="w-9 h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
//               <span className="text-white text-sm font-bold">F</span>
//             </div>
//             <span>FinanceFlow</span>
//           </Link>
//           {/* Collapse Button (Desktop) */}
//           <button
//             onClick={handleCollapseToggle}
//             className={cn(
//               "hidden lg:flex items-center justify-center w-8 h-8 rounded-lg",
//               "hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
//               isCollapsed && "mx-auto"
//             )}
//             aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//           >
//             <ChevronLeft
//               className={cn(
//                 "h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform",
//                 isCollapsed && "rotate-180"
//               )}
//             />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex-1 px-5 py-6 space-y-3 overflow-y-auto">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;
//             const IconComponent = getIcon(item.icon);

//             return (
//               <Link
//                 key={item.id}
//                 href={item.href}
//                 className={cn(
//                   "flex items-center gap-4 px-5 py-3.5 rounded-xl",
//                   "transition-all duration-200 group",
//                   // Active state
//                   isActive
//                     ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-semibold"
//                     : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
//                   // Collapsed state
//                   isCollapsed && "lg:justify-center lg:px-3"
//                 )}
//                 title={isCollapsed ? item.label : undefined}
//                 onClick={handleLinkClick}
//               >
//                 {/* Icon */}
//                 <span
//                   className={cn(
//                     "shrink-0",
//                     isActive && "text-indigo-600 dark:text-indigo-400"
//                   )}
//                 >
//                   {IconComponent}
//                 </span>

//                 {/* Label */}
//                 <span
//                   className={cn(
//                     "font-medium text-sm",
//                     isCollapsed && "lg:hidden"
//                   )}
//                 >
//                   {item.label}
//                 </span>

//                 {/* Badge */}
//                 {item.badge && (
//                   <span
//                     className={cn(
//                       "ml-auto px-2.5 py-0.5 text-xs font-semibold rounded-full",
//                       "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
//                       isCollapsed && "lg:hidden"
//                     )}
//                   >
//                     {item.badge}
//                   </span>
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Help Section */}
//         <div className="px-5 py-5 border-t border-gray-200 dark:border-gray-700">
//           <Link
//             href="/dashboard/help"
//             className={cn(
//               "flex items-center gap-4 px-5 py-3.5 rounded-xl",
//               "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
//               "transition-all duration-200",
//               isCollapsed && "lg:justify-center lg:px-3"
//             )}
//             onClick={handleLinkClick}
//           >
//             <HelpCircle className="h-5 w-5" />
//             <span className={cn("font-medium text-sm", isCollapsed && "lg:hidden")}>
//               Help & Support
//             </span>
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }


/////////////////////////////////
///////////////////////////////////


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
          // Mobile Control
          isMobile
            ? (isMobileOpen ? "w-72 translate-x-0" : "-translate-x-full")
            : "translate-x-0"
        )}
      >
        {/* Logo + Collapse Button */}
        <div
          className={cn(
            "flex items-center h-16 px-6 border-b border-gray-200 dark:border-gray-800",
            isCollapsed && "lg:justify-center lg:px-4"
          )}
        >
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white outline-none",
              isCollapsed && "lg:hidden"
            )}
            onClick={handleLinkClick}
          >
            <div className="w-9 h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-sm font-bold">F</span>
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
                "h-5 w-5 text-gray-500 transition-transform",
                isCollapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = getIcon(item.icon);

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all group",
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
        <div className="p-3 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/dashboard/help"
            onClick={handleLinkClick}
            className={cn(
              "flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
              isCollapsed && "lg:justify-center lg:px-3"
            )}
          >
            <HelpCircle className="h-5 w-5" />
            <span className={cn(isCollapsed && "lg:hidden")}>Help & Support</span>
          </Link>
        </div>
      </aside>
    </>
  );
}