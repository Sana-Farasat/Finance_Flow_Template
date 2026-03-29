# FinanceFlow - Finance SaaS Dashboard Template

## Complete Documentation

**Version:** 2.0.0  
**Last Updated:** March 2026  
**Author:** Your Name  
**License:** Envato Regular License

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Features Overview](#features-overview)
3. [Tech Stack](#tech-stack)
4. [Installation & Setup](#installation--setup)
5. [Project Structure](#project-structure)
6. [Pages & Routes](#pages--routes)
7. [Components Guide](#components-guide)
8. [Customization](#customization-guide)
9. [Animations](#animations-with-framer-motion)
10. [Responsive Design](#responsive-design)
11. [Dark Mode](#dark-mode)
12. [Deployment](#deployment)
13. [Browser Support](#browser-support)
14. [Performance](#performance)
15. [Changelog](#changelog)
16. [Support & Credits](#support--credits)

---

## 🎯 Introduction

FinanceFlow is a premium, production-ready Finance SaaS Dashboard template built with **Next.js 16**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**. Perfect for financial applications, admin panels, analytics dashboards, and SaaS platforms.

### ✨ What's New in v2.0

- 🎨 **Framer Motion Animations** - Smooth, professional animations throughout
- 🏠 **Landing Page** - Beautiful marketing homepage for non-authenticated users
- 💰 **Pricing Page** - Complete pricing page with billing toggle
- 📱 **Enhanced Responsive Design** - Optimized for all device sizes
- 🌙 **Dark Mode Improvements** - Better visibility and contrast
- ⚡ **Performance Optimizations** - Faster load times and smoother interactions

### 🎁 What You Get

- 8+ Pre-built Pages (Landing, Pricing, Dashboard, Analytics, Transactions, Cards, Settings, Help)
- 20+ Reusable Components
- Framer Motion Animations
- Fully Responsive Design
- Dark Mode Support
- TypeScript Types
- Comprehensive Documentation
- Free Updates

---

## 🚀 Features Overview

### 📄 Pages Included

| Page | Description | Route |
|------|-------------|-------|
| Landing | Marketing homepage with features, testimonials, CTA | `/` |
| Pricing | 4-tier pricing with monthly/yearly toggle | `/pricing` |
| Login | User authentication page | `/login` |
| Signup | User registration page | `/signup` |
| Dashboard | Main dashboard with stats, charts, transactions | `/dashboard` |
| Transactions | Full transaction list with filters | `/dashboard/transactions` |
| Analytics | Advanced analytics with multiple charts | `/dashboard/analytics` |
| Cards | Credit/debit card management | `/dashboard/cards` |
| Settings | Profile, notifications, security, billing | `/dashboard/settings` |
| Help | Help & support page | `/dashboard/help` |
| 404 | Custom error page | All undefined routes |

### 🎨 Design Features

- ✅ Modern, clean design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode with proper contrast
- ✅ Collapsible sidebar
- ✅ Mobile drawer navigation
- ✅ Custom color schemes
- ✅ Beautiful gradients
- ✅ Status badges & indicators

### ⚡ Technical Features

- ✅ Next.js 16 App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4
- ✅ Framer Motion animations
- ✅ Recharts for data visualization
- ✅ Lucide React icons
- ✅ SEO optimized
- ✅ Accessible (WCAG 2.1)
- ✅ Performance optimized

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.x | React Framework |
| **React** | 19.x | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 4.x | Styling |
| **Framer Motion** | Latest | Animations |
| **Recharts** | Latest | Charts & Graphs |
| **Lucide React** | Latest | Icons |
| **date-fns** | Latest | Date Formatting |
| **clsx** | Latest | Class Utilities |
| **tailwind-merge** | Latest | Class Merging |

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** v18.17 or later
- **npm** or **yarn** package manager

### Quick Start

1. **Extract template files**
   ```bash
   cd envato-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
envato-template/
├── app/                          # Next.js App Router
│   ├── dashboard/                # Dashboard pages (protected)
│   │   ├── layout.tsx            # Dashboard layout wrapper
│   │   ├── page.tsx              # Main dashboard
│   │   ├── transactions/         # Transactions page
│   │   ├── analytics/            # Analytics page
│   │   ├── cards/                # Cards management
│   │   ├── settings/             # Settings page
│   │   └── help/                 # Help page
│   ├── pricing/                  # Pricing page (public)
│   ├── login/                    # Login page
│   ├── signup/                   # Signup page
│   ├── globals.css               # Global styles & dark mode
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── not-found.tsx             # 404 error page
│
├── components/                   # React Components
│   ├── layout/                   # Layout components
│   │   ├── DashboardLayout.tsx   # Main layout wrapper
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   └── Header.tsx            # Top header
│   │
│   ├── dashboard/                # Dashboard components
│   │   ├── RevenueChart.tsx      # Revenue area chart
│   │   ├── TransactionsTable.tsx # Transaction table
│   │   └── ActivityFeed.tsx      # Activity timeline
│   │
│   └── ui/                       # UI components
│       └── StatCard.tsx          # Statistics card
│
├── contexts/                     # React Contexts
│   ├── ThemeContext.tsx          # Dark/Light mode
│   └── SidebarContext.tsx        # Sidebar state
│
├── lib/                          # Utilities
│   ├── utils.ts                  # Helper functions (cn)
│   └── types.ts                  # TypeScript types
│
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── DOCUMENTATION.md              # This file
```

---

## 🗺 Pages & Routes

### Public Routes

```tsx
// Landing Page - /
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero, Features, Testimonials, CTA */}
    </div>
  );
}

// Pricing Page - /pricing
export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Pricing cards, FAQ, Features */}
    </div>
  );
}
```

### Protected Routes (Dashboard)

```tsx
// Dashboard - /dashboard
import { DashboardLayout } from "@/components/layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats, Charts, Tables */}
      </div>
    </DashboardLayout>
  );
}
```

### Adding New Pages

1. **Create page folder**
   ```bash
   app/dashboard/reports/page.tsx
   ```

2. **Create page component**
   ```tsx
   import { DashboardLayout } from "@/components/layout";

   export default function ReportsPage() {
     return (
       <DashboardLayout>
         <h1>Reports</h1>
         {/* Your content */}
       </DashboardLayout>
     );
   }
   ```

3. **Add to sidebar navigation**
   ```tsx
   // components/layout/Sidebar.tsx
   const navItems: NavItem[] = [
     {
       id: "reports",
       label: "Reports",
       icon: "FileText",
       href: "/dashboard/reports",
     },
   ];
   ```

---

## 🧩 Components Guide

### Layout Components

#### DashboardLayout
Main wrapper for all dashboard pages.

```tsx
import { DashboardLayout } from "@/components/layout";

<DashboardLayout>
  {children}
</DashboardLayout>
```

#### Sidebar
Navigation sidebar with collapse and mobile support.

**Features:**
- Collapsible on desktop
- Slide drawer on mobile
- Active state highlighting
- Badge notifications

#### Header
Top navigation bar.

**Features:**
- Search bar
- Notifications dropdown
- User menu
- Dark mode toggle
- Mobile menu toggle

### Dashboard Components

#### StatCard
Display statistical metrics.

```tsx
<StatCard
  stat={{
    id: "1",
    title: "Total Revenue",
    value: "$124,592",
    change: 12.5,
    period: "vs last month",
    icon: "DollarSign",
    trend: "up",
  }}
/>
```

#### RevenueChart
Interactive area chart.

```tsx
<RevenueChart
  data={revenueData}
  title="Revenue Overview"
/>
```

#### TransactionsTable
Sortable transaction table.

```tsx
<TransactionsTable
  transactions={transactions}
  limit={5}
  showViewAll
/>
```

#### ActivityFeed
Timeline of activities.

```tsx
<ActivityFeed
  activities={activities}
  title="Recent Activity"
/>
```

---

## 🎨 Customization Guide

### Changing Brand Colors

**Method 1: CSS Variables (Recommended)**

Edit `app/globals.css`:

```css
:root {
  /* Primary brand color */
  --color-primary-500: 99 102 241;  /* Indigo */
  --color-primary-600: 79 70 229;
  
  /* Secondary brand color */
  --color-secondary-500: 168 85 247;  /* Purple */
  --color-secondary-600: 147 51 234;
}
```

**Method 2: Find & Replace**

1. Search for `indigo-600` in your code editor
2. Replace with your color (e.g., `blue-600`, `emerald-600`)

### Changing Logo

Open `components/layout/Sidebar.tsx`:

```tsx
// Current logo
<div className="w-9 h-9 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl">
  <span className="text-white text-sm font-bold">F</span>
</div>

// Replace with your logo
<Image
  src="/your-logo.png"
  alt="Your Brand"
  width={36}
  height={36}
  className="rounded-xl"
/>
```

### Changing Brand Name

Search and replace:
- `FinanceFlow` → Your brand name
- `financeflow` → your-brand-slug

### Adding Custom Fonts

1. **Add font to `app/layout.tsx`**
   ```tsx
   import { Inter } from "next/font/google";

   const inter = Inter({ subsets: ["latin"] });

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body className={inter.className}>{children}</body>
       </html>
     );
   }
   ```

2. **Update `globals.css`**
   ```css
   body {
     font-family: var(--font-inter), sans-serif;
   }
   ```

---

## 🎬 Animations with Framer Motion

This template uses **Framer Motion** for smooth, professional animations that Envato buyers love.

### Animation Types

#### 1. **Page Load Animations**
```tsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### 2. **Scroll-Triggered Animations**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### 3. **Stagger Animations**
```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

<motion.div variants={staggerContainer}>
  {items.map(item => (
    <motion.div variants={fadeInUp} key={item.id}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### 4. **Hover Animations**
```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  Card Content
</motion.div>
```

#### 5. **Button Interactions**
```tsx
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/signup"
>
  Get Started
</motion.a>
```

#### 6. **Continuous Animations**
```tsx
<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  Floating Element
</motion.div>
```

### Animation Best Practices

✅ **Do:**
- Use `viewport={{ once: true }}` for scroll animations
- Keep durations between 0.3-0.6s
- Use `ease: "easeOut"` for natural feel
- Animate opacity + transform together

❌ **Don't:**
- Overuse animations
- Use durations > 1s
- Animate on mobile excessively
- Forget `whileTap` for buttons

---

## 📱 Responsive Design

The template is fully responsive across all devices.

### Breakpoints

| Name | Size | Usage |
|------|------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Responsive Patterns

#### Mobile-First Approach
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Cards */}
</div>
```

#### Responsive Text
```tsx
<h1 className="text-xl sm:text-2xl lg:text-3xl">
  Heading
</h1>
```

#### Responsive Spacing
```tsx
<div className="p-3 sm:p-4 md:p-6 lg:p-8">
  Content
</div>
```

#### Hide/Show on Mobile
```tsx
<span className="hidden sm:inline">Desktop Only</span>
<span className="sm:hidden">Mobile Only</span>
```

### Device Testing

Test your changes on:
- 📱 Mobile (320px - 640px)
- 📱 Large Phone (640px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Laptop (1024px - 1280px)
- 🖥 Desktop (1280px+)

---

## 🌙 Dark Mode

Dark mode is fully implemented with proper contrast and visibility.

### How It Works

Dark mode uses a CSS class-based system with Tailwind's `dark:` variant.

```tsx
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-white">
    Heading
  </h1>
</div>
```

### Toggle Dark Mode

```tsx
import { useTheme } from "@/contexts/ThemeContext";

const { theme, toggleTheme } = useTheme();

<button onClick={toggleTheme}>
  {theme === "dark" ? "🌞" : "🌙"}
</button>
```

### Dark Mode Colors

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `bg-white` | `dark:bg-gray-900` |
| Text Primary | `text-gray-900` | `dark:text-white` |
| Text Secondary | `text-gray-500` | `dark:text-gray-400` |
| Border | `border-gray-200` | `dark:border-gray-800` |
| Card | `bg-white` | `dark:bg-gray-900` |

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Vercel CLI
npm i -g vercel
vercel
```

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Self-Hosting

```bash
# Build
npm run build

# Start
npm start

# Or with PM2
pm2 start npm --name "financeflow" -- start
```

---

## 🌐 Browser Support

### Desktop

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Opera | Latest 2 | ✅ Full |

### Mobile

| Browser | Version | Support |
|---------|---------|---------|
| Chrome Mobile | Latest | ✅ Full |
| Safari iOS | Latest | ✅ Full |
| Samsung Internet | Latest | ✅ Full |

---

## ⚡ Performance

### Lighthouse Scores

| Metric | Score | Target |
|--------|-------|--------|
| Performance | 95+ | 90+ |
| Accessibility | 95+ | 90+ |
| Best Practices | 95+ | 90+ |
| SEO | 100 | 90+ |

### Optimization Tips

1. **Images:** Use Next.js `<Image>` component
2. **Fonts:** Use system fonts or next/font
3. **Icons:** Use Lucide React (tree-shakeable)
4. **Code Splitting:** Automatic with Next.js
5. **Lazy Loading:** Use `dynamic()` for heavy components

---

## 📝 Changelog

### Version 2.0.0 (March 2026)

**🎉 Major Update**

- ✨ Added Framer Motion animations throughout
- 🏠 New landing page for non-authenticated users
- 💰 New pricing page with billing toggle
- 📱 Enhanced responsive design for all devices
- 🌙 Improved dark mode contrast
- 📄 New 404 error page
- ⚡ Performance optimizations

### Version 1.0.0 (December 2025)

**Initial Release**

- Dashboard overview page
- Transactions, Analytics, Cards, Settings pages
- Responsive sidebar and header
- Revenue charts (Area, Bar, Pie)
- Dark mode support
- TypeScript types
- Comprehensive documentation

---

## 📞 Support & Credits

### Getting Help

- 📧 **Email:** support@yourdomain.com
- 🌐 **Website:** https://yourwebsite.com
- 🐦 **Twitter:** @yourhandle

### Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Recharts Docs](https://recharts.org)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Reporting Issues

Please include:
1. Detailed description
2. Steps to reproduce
3. Expected vs actual behavior
4. Screenshots if applicable
5. Browser/OS information

### Credits

- **Icons:** [Lucide React](https://lucide.dev)
- **Charts:** [Recharts](https://recharts.org)
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **Design Inspiration:** Dribbble community

---

## 📄 License

### Envato Regular License

- ✅ Single end product
- ✅ End users not charged
- ✅ Lifetime updates
- ❌ Total sales < $1,000,000

### Envato Extended License

- ✅ Multiple end products
- ✅ End users can be charged
- ✅ No sales limit
- ✅ All Regular License benefits

For full terms: [Envato License Terms](https://envato.com/license-terms)

---

## 🙏 Thank You!

Thank you for purchasing FinanceFlow! We hope this template helps you build amazing financial applications.

**If you enjoy this template, please:**
- ⭐ Leave a review on Envato
- 📢 Share with your network
- 🐛 Report any issues you find

**Happy Coding! 🚀**

---

*Last Updated: March 2026*  
*Version: 2.0.0*
