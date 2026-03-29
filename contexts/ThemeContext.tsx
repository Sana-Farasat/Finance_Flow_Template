"use client";

/**
 * Theme Context
 * 
 * Provides dark/light mode toggle functionality across the application.
 * Uses localStorage to persist user preference.
 * 
 * @packageDocumentation
 */

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Theme type
 */
type Theme = "light" | "dark";

/**
 * ThemeContextProps interface
 */
interface ThemeContextProps {
  /** Current theme */
  theme: Theme;
  /** Toggle between light and dark mode */
  toggleTheme: () => void;
  /** Set specific theme */
  setTheme: (theme: Theme) => void;
}

/**
 * Theme context
 */
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/**
 * ThemeProvider props
 */
interface ThemeProviderProps {
  /** Child components */
  children: React.ReactNode;
  /** Default theme */
  defaultTheme?: Theme;
  /** Storage key for localStorage */
  storageKey?: string;
}

/**
 * ThemeProvider component
 * Wraps the application to provide theme context
 */
export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "financeflow-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Initialize theme from localStorage on mount
   */
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(storageKey) as Theme | null : null;
    if (stored && (stored === "light" || stored === "dark")) {
      setThemeState(stored);
    }
    setIsLoaded(true);
  }, [storageKey]);

  /**
   * Update HTML class when theme changes
   */
  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey, isLoaded]);

  /**
   * Toggle between light and dark mode
   */
  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  /**
   * Set specific theme
   */
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  /**
   * Prevent hydration mismatch - don't render until loaded
   */
  if (!isLoaded) {
    return <div className="min-h-screen bg-gray-50" />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme hook
 * Returns theme context values
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
