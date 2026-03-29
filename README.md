# FinanceFlow - Finance SaaS Dashboard Template

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Envato-green)](https://envato.com)

A modern, responsive Finance SaaS Dashboard template built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. Perfect for financial applications, admin panels, and SaaS platforms.

![FinanceFlow Dashboard](https://via.placeholder.com/1200x600/6366f1/ffffff?text=FinanceFlow+Dashboard+Preview)

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI inspired by top Dribbble shots
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🚀 **Next.js 16** - Built with the latest App Router
- 💻 **TypeScript** - Full type safety and IntelliSense
- 🎨 **Tailwind CSS v4** - Latest utility-first CSS framework
- 📊 **Beautiful Charts** - Recharts for data visualization
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG 2.1 compliant components
- 🌙 **Dark Mode Ready** - Easy to enable dark theme
- 📦 **Production Ready** - Optimized builds and best practices

---

## 📄 Pages Included

| Page | Description | Route |
|------|-------------|-------|
| **Dashboard** | Overview with stats, charts, and recent activity | `/dashboard` |
| **Transactions** | Full transaction list with filters and search | `/dashboard/transactions` |
| **Analytics** | Deep dive with multiple chart types | `/dashboard/analytics` |
| **Settings** | Profile, notifications, security, billing | `/dashboard/settings` |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone or extract the template**
   ```bash
   cd envato-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
envato-template/
├── app/                          # Next.js App Router
│   ├── (dashboard)/              # Dashboard pages
│   │   ├── page.tsx              # Main dashboard
│   │   ├── transactions/         # Transactions page
│   │   ├── analytics/            # Analytics page
│   │   └── settings/             # Settings page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home (redirects)
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── DashboardLayout.tsx
│   ├── dashboard/                # Dashboard components
│   │   ├── RevenueChart.tsx
│   │   ├── TransactionsTable.tsx
│   │   └── ActivityFeed.tsx
│   └── ui/                       # UI components
│       └── StatCard.tsx
├── lib/
│   ├── utils.ts                  # Helper functions
│   └── types.ts                  # TypeScript types
├── public/                       # Static assets
├── DOCUMENTATION.md              # Full documentation
└── package.json
```

---

## 🎨 Customization

### Change Primary Color

Edit `app/globals.css`:

```css
:root {
  --color-primary-500: 99 102 241;  /* Your color */
  --color-primary-600: 79 70 229;   /* Hover state */
}
```

### Change Logo

Edit `components/layout/Sidebar.tsx`:

```tsx
// Replace the logo div with your image
<Image src="/logo.png" alt="Your Logo" width={32} height={32} />
```

### Add New Pages

1. Create `app/(dashboard)/your-page/page.tsx`
2. Wrap with `DashboardLayout`
3. Add navigation link in `components/layout/Sidebar.tsx`

---

## 📦 Components

### Layout Components

- **`DashboardLayout`** - Main wrapper for dashboard pages
- **`Sidebar`** - Navigation sidebar with collapse
- **`Header`** - Top header with search and notifications

### Dashboard Components

- **`StatCard`** - Statistics card with trend indicator
- **`RevenueChart`** - Area chart for revenue data
- **`TransactionsTable`** - Sortable transactions table
- **`ActivityFeed`** - Activity timeline

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React Framework |
| React | 19.x | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Recharts | Latest | Charts |
| Lucide React | Latest | Icons |

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 |
| Firefox | Latest 2 |
| Safari | Latest 2 |
| Edge | Latest 2 |
| Opera | Latest 2 |

---

## 📖 Documentation

For detailed documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md)

Includes:
- Setup guide
- Customization guide
- Component documentation
- Deployment instructions
- Changelog

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub and import in Vercel
vercel
```

### Netlify

```bash
npm run build
# Set publish directory to .next
```

### Self-Hosting

```bash
npm run build
npm start
```

---

## 📄 License

This template is licensed under the **Envato Regular License**.

- ✅ Single end product
- ✅ End users not charged
- ✅ Lifetime sales < $1,000,000

For extended use, purchase an **Extended License** on Envato.

---

## 💬 Support

Need help? Contact us:

- 📧 Email: support@yourdomain.com
- 🌐 Website: https://yourwebsite.com
- 🐦 Twitter: @yourhandle

### Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Recharts Docs](https://recharts.org)
- [TypeScript Docs](https://typescriptlang.org/docs)

---

## 🙏 Credits

- **Icons:** [Lucide React](https://lucide.dev)
- **Charts:** [Recharts](https://recharts.org)
- **Design:** Inspired by Dribbble community

---

## ⭐ Show Your Support

If you like this template, please:

1. ⭐ Star on GitHub
2. 📝 Leave a review on Envato
3. 📢 Share with your network

---

**Built with ❤️ using Next.js and Tailwind CSS**

© 2025 Your Name. All rights reserved.
# Finance_Flow_Template
