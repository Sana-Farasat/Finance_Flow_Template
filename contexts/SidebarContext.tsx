"use client";

/**
 * Sidebar Context
 * 
 * Provides sidebar state management across the application.
 * Handles open/close, collapsed state, and mobile behavior.
 */

import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Sidebar context props interface
 */
interface SidebarContextProps {
  /** Whether sidebar is open (desktop) */
  isOpen: boolean;
  /** Toggle sidebar open/close */
  toggleSidebar: () => void;
  /** Set sidebar open state */
  setOpen: (open: boolean) => void;
  /** Whether sidebar is collapsed (showing icons only) */
  isCollapsed: boolean;
  /** Toggle collapsed state */
  toggleCollapsed: () => void;
  /** Set collapsed state */
  setCollapsed: (collapsed: boolean) => void;
  /** Whether mobile sidebar is open */
  isMobileOpen: boolean;
  /** Toggle mobile sidebar */
  toggleMobile: () => void;
  /** Set mobile sidebar open state */
  setMobileOpen: (open: boolean) => void;
  /** Whether device is mobile */
  isMobile: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

/**
 * SidebarProvider props
 */
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  defaultCollapsed?: boolean;
}

/**
 * SidebarProvider component
 * Wraps the app to provide sidebar state management
 */
export function SidebarProvider({
  children,
  defaultOpen = true,
  defaultCollapsed = false,
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        setOpen: setIsOpen,
        isCollapsed,
        toggleCollapsed,
        setCollapsed: setIsCollapsed,
        isMobileOpen,
        toggleMobile,
        setMobileOpen: setIsMobileOpen,
        isMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * useSidebar hook
 * Returns sidebar context values
 */
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
