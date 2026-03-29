# FinanceFlow - Finance SaaS Dashboard

## Documentation

Thank you for purchasing the FinanceFlow template! This documentation will guide you through setup, customization, and deployment.

---

## Table of Contents

1. [Template Overview](#template-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Customization Guide](#customization-guide)
7. [Component Documentation](#component-documentation)
8. [Deployment](#deployment)
9. [Browser Support](#browser-support)
10. [Changelog](#changelog)
11. [Support](#support)

---

## Template Overview

FinanceFlow is a modern, responsive Finance SaaS Dashboard template built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. It's designed for financial applications, admin panels, and SaaS platforms that need a professional, polished interface.

### Key Highlights

- 🎨 Modern, clean design inspired by top Dribbble shots
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Built with Next.js 16 App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS v4 for styling
- 📊 Beautiful charts with Recharts
- 🔍 SEO optimized
- ♿ Accessible (WCAG 2.1 compliant)

---

## Features

### Dashboard Pages
- **Overview Dashboard** - Key metrics, revenue chart, recent transactions, activity feed
- **Transactions** - Full transaction list with filters and search
- **Analytics** - Deep dive with multiple chart types
- **Settings** - Profile, notifications, security, billing, appearance

### Components
- Responsive sidebar with collapse functionality
- Top navigation header with search and notifications
- Statistical cards with trend indicators
- Interactive revenue charts (Area, Bar, Pie)
- Transaction tables with sorting
- Activity timeline feed
- Settings forms with validation
- Toggle switches, buttons, and inputs

### Design Features
- Light/Dark mode support (ready)
- Collapsible sidebar
- Mobile drawer navigation
- Custom color schemes
- Multiple chart types
- Status badges and indicators

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React Framework |
| React | 19.x | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Recharts | Latest | Charts |
| Lucide React | Latest | Icons |
| date-fns | Latest | Date Formatting |
| clsx | Latest | Class Utilities |
| tailwind-merge | Latest | Class Merging |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.17 or later recommended)
- **npm** or **yarn** package manager

### Installation

1. **Extract the template files**
   ```bash
   # Navigate to your project directory
   cd envato-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
envato-template/
├── app/                          # Next.js App Router
│   ├── (dashboard)/              # Dashboard pages group
│   │   ├── page.tsx              # Main dashboard page
│   │   ├── transactions/         # Transactions page
│   │   ├── analytics/            # Analytics page
│   │   └── settings/             # Settings page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (redirects to dashboard)
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Sidebar.tsx           # Sidebar navigation
│   │   ├── Header.tsx            # Top header
│   │   ├── DashboardLayout.tsx   # Main layout wrapper
│   │   └── index.ts              # Layout exports
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── RevenueChart.tsx      # Revenue chart component
│   │   ├── TransactionsTable.tsx # Transactions table
│   │   ├── ActivityFeed.tsx      # Activity timeline
│   │   └── index.ts              # Dashboard exports
│   └── ui/                       # Reusable UI components
│       └── StatCard.tsx          # Statistics card
├── lib/                          # Utilities and types
│   ├── utils.ts                  # Helper functions
│   └── types.ts                  # TypeScript types
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind config
└── README.md                     # This file
```

---

## Customization Guide

### Changing Colors

The template uses Tailwind CSS v4's CSS variable system. To customize colors:

1. **Open `app/globals.css`**
2. **Modify CSS variables**
   ```css
   :root {
     --color-primary-500: 99 102 241;  /* Change primary color */
     --color-primary-600: 79 70 229;   /* Hover state */
   }
   ```

3. **Or use Tailwind's config**
   ```ts
   // tailwind.config.ts
   export default {
     theme: {
       extend: {
         colors: {
           primary: {
             500: '#6366f1',
             600: '#4f46e5',
           }
         }
       }
     }
   }
   ```

### Changing Logo

1. **Open `components/layout/Sidebar.tsx`**
2. **Find the logo section**
   ```tsx
   <div className="w-8 h-8 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg">
     <span className="text-white text-sm font-bold">F</span>
   </div>
   ```
3. **Replace with your logo**
   ```tsx
   <Image src="/logo.png" alt="Your Logo" width={32} height={32} />
   ```

### Adding New Pages

1. **Create a new folder in `app/(dashboard)/`**
   ```bash
   app/(dashboard)/reports/page.tsx
   ```

2. **Create the page component**
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

3. **Add navigation link in `components/layout/Sidebar.tsx`**
   ```tsx
   const navItems: NavItem[] = [
     // ... existing items
     {
       id: "reports",
       label: "Reports",
       icon: "FileText",
       href: "/dashboard/reports",
     },
   ];
   ```

### Adding New Charts

The template uses Recharts. To add a new chart:

1. **Import chart components**
   ```tsx
   import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
   ```

2. **Create chart data**
   ```tsx
   const data = [
     { name: "Jan", value: 400 },
     { name: "Feb", value: 300 },
   ];
   ```

3. **Render the chart**
   ```tsx
   <LineChart width={600} height={300} data={data}>
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Line dataKey="value" stroke="#6366f1" />
   </LineChart>
   ```

---

## Component Documentation

### Layout Components

#### `DashboardLayout`
Main wrapper for all dashboard pages.

```tsx
import { DashboardLayout } from "@/components/layout";

<DashboardLayout>
  {/* Your page content */}
</DashboardLayout>
```

#### `Sidebar`
Navigation sidebar with collapse functionality.

**Props:**
- `collapsed?: boolean` - Whether sidebar is collapsed
- `onCollapseChange?: (collapsed: boolean) => void` - Collapse state callback
- `mobileOpen?: boolean` - Mobile drawer open state
- `onMobileOpenChange?: (open: boolean) => void` - Mobile state callback

#### `Header`
Top navigation header.

**Props:**
- `onMenuClick?: () => void` - Mobile menu toggle callback
- `darkMode?: boolean` - Dark mode state
- `onDarkModeChange?: (dark: boolean) => void` - Dark mode callback

### Dashboard Components

#### `StatCard`
Displays a statistical metric.

```tsx
import { StatCard } from "@/components/ui/StatCard";

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

#### `RevenueChart`
Area chart for revenue data.

```tsx
import { RevenueChart } from "@/components/dashboard";

<RevenueChart
  data={[
    { label: "Jan", value: 45000 },
    { label: "Feb", value: 52000 },
  ]}
  title="Revenue Overview"
/>
```

#### `TransactionsTable`
Table for displaying transactions.

```tsx
import { TransactionsTable } from "@/components/dashboard";

<TransactionsTable
  transactions={transactionsData}
  limit={5}
  showViewAll
/>
```

#### `ActivityFeed`
Timeline of recent activities.

```tsx
import { ActivityFeed } from "@/components/dashboard";

<ActivityFeed
  activities={activitiesData}
  title="Recent Activity"
/>
```

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import project in Vercel**
3. **Deploy**

Vercel automatically detects Next.js and applies optimal settings.

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Add `netlify.toml`:**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

### Self-Hosting

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "financeflow" -- start
   ```

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest 2 versions | ✅ Full |
| Firefox | Latest 2 versions | ✅ Full |
| Safari | Latest 2 versions | ✅ Full |
| Edge | Latest 2 versions | ✅ Full |
| Opera | Latest 2 versions | ✅ Full |
| Samsung Internet | Latest 2 versions | ✅ Full |

### Mobile Browsers

| Browser | Version | Support |
|---------|---------|---------|
| Chrome Mobile | Latest | ✅ Full |
| Safari iOS | Latest | ✅ Full |
| Samsung Internet | Latest | ✅ Full |

---

## Changelog

### Version 1.0.0 (December 2025)

**Initial Release**

- ✅ Dashboard overview page
- ✅ Transactions page with filters
- ✅ Analytics page with multiple charts
- ✅ Settings page (Profile, Notifications, Security, Billing, Appearance)
- ✅ Responsive sidebar and header
- ✅ Revenue charts (Area, Bar, Pie)
- ✅ Transactions table with sorting
- ✅ Activity feed timeline
- ✅ Dark mode support (ready)
- ✅ TypeScript types and interfaces
- ✅ Comprehensive documentation

---

## Support

Need help? We're here to assist!

### Contact

- **Email:** support@yourdomain.com
- **Website:** https://yourwebsite.com
- **Twitter:** @yourhandle

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Reporting Issues

If you find a bug or have a feature request, please:

1. Check existing issues first
2. Provide detailed information about the issue
3. Include steps to reproduce
4. Add screenshots if applicable

---

## License

This template is licensed under the **Envato Regular License**.

### Regular License
- Use for a single end product
- End users are not charged
- Total lifetime sales of end product < $1,000,000

### Extended License
- Use for multiple end products
- End users can be charged
- No sales limit

For full license terms, visit: [Envato License Terms](https://envato.com/license-terms)

---

## Credits

- **Icons:** [Lucide React](https://lucide.dev)
- **Charts:** [Recharts](https://recharts.org)
- **Design Inspiration:** Dribbble community
- **Fonts:** System fonts (optimized for performance)

---

## Thank You!

Thank you for choosing FinanceFlow! We hope this template helps you build amazing financial applications. If you enjoy this template, please consider leaving a review on Envato.

**Happy Coding! 🚀**
