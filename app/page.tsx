/**
 * Home Page
 * 
 * Landing page that redirects to the dashboard.
 * In production, this could be a marketing/landing page.
 */

import { redirect } from "next/navigation";

/**
 * Home page component
 * Redirects to dashboard page
 */
export default function HomePage() {
  redirect("/dashboard");
}
