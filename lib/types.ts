/**
 * TypeScript types and interfaces for the Finance SaaS Dashboard
 * These types ensure type safety throughout the application
 */

// ============================================
// Navigation Types
// ============================================

/**
 * Navigation item for sidebar menu
 */
export interface NavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display label */
  label: string;
  /** Icon name from lucide-react */
  icon: string;
  /** href path */
  href: string;
  /** Optional badge count */
  badge?: number;
}

// ============================================
// Dashboard Data Types
// ============================================

/**
 * Statistical card data for dashboard overview
 */
export interface StatCard {
  /** Unique identifier */
  id: string;
  /** Card title */
  title: string;
  /** Current value */
  value: string;
  /** Percentage change */
  change: number;
  /** Change period (e.g., "vs last month") */
  period: string;
  /** Icon name */
  icon: string;
  /** Trend direction */
  trend: "up" | "down" | "neutral";
}

/**
 * Transaction record
 */
export interface Transaction {
  /** Unique transaction ID */
  id: string;
  /** Transaction type */
  type: "income" | "expense" | "transfer";
  /** Category name */
  category: string;
  /** Transaction amount */
  amount: number;
  /** Transaction date */
  date: string;
  /** Status */
  status: "completed" | "pending" | "failed";
  /** Recipient/Sender name */
  recipient: string;
  /** Optional description */
  description?: string;
}

/**
 * Chart data point
 */
export interface ChartDataPoint {
  /** Label for the data point */
  label: string;
  /** Primary value */
  value: number;
  /** Secondary value (for comparison) */
  value2?: number;
  /** Optional third value */
  value3?: number;
}

/**
 * Revenue overview data
 */
export interface RevenueData {
  /** Monthly revenue data */
  monthly: ChartDataPoint[];
  /** Yearly revenue data */
  yearly: ChartDataPoint[];
}

/**
 * Recent activity item
 */
export interface Activity {
  /** Unique activity ID */
  id: string;
  /** Activity type */
  type: "payment" | "transfer" | "invoice" | "subscription";
  /** Activity title */
  title: string;
  /** Activity description */
  description: string;
  /** Activity date */
  date: string;
  /** Amount involved */
  amount?: number;
  /** Status */
  status: "completed" | "pending" | "failed";
}

/**
 * Quick transfer recipient
 */
export interface Recipient {
  /** Unique recipient ID */
  id: string;
  /** Recipient name */
  name: string;
  /** Avatar URL or initials */
  avatar: string;
  /** Account number (masked) */
  account: string;
}

// ============================================
// Layout Types
// ============================================

/**
 * User profile data
 */
export interface UserProfile {
  /** User's full name */
  name: string;
  /** User's email */
  email: string;
  /** Avatar URL */
  avatar?: string;
  /** User role */
  role: string;
}

/**
 * Sidebar configuration
 */
export interface SidebarConfig {
  /** Whether sidebar is collapsed */
  collapsed: boolean;
  /** Whether sidebar is open on mobile */
  mobileOpen: boolean;
}

// ============================================
// Component Props Types
// ============================================

/**
 * Base props for all card components
 */
export interface CardProps {
  /** Card title */
  title?: string;
  /** Card description/subtitle */
  description?: string;
  /** Additional CSS classes */
  className?: string;
  /** Card children */
  children?: React.ReactNode;
}

/**
 * Button component props
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Loading state */
  loading?: boolean;
  /** Button children */
  children?: React.ReactNode;
}

/**
 * Table column definition
 */
export interface Column<T> {
  /** Column key */
  key: string;
  /** Column header */
  header: string;
  /** Cell renderer function */
  render?: (item: T) => React.ReactNode;
  /** Column width */
  width?: string;
  /** Whether column is sortable */
  sortable?: boolean;
}
