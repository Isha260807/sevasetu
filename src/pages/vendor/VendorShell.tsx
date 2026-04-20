import { PanelLayout } from "@/layouts/PanelLayout";
import { LayoutDashboard, Inbox, User, Megaphone, CreditCard, Users, BarChart3 } from "lucide-react";
import { ReactNode } from "react";

export const vendorNav = [
  { to: "/vendor", label: "Dashboard", icon: LayoutDashboard },
  { to: "/vendor/leads", label: "Lead Inbox", icon: Inbox },
  { to: "/vendor/profile", label: "Profile", icon: User },
  { to: "/vendor/promotions", label: "Promotions", icon: Megaphone },
  { to: "/vendor/billing", label: "Billing", icon: CreditCard },
  { to: "/vendor/team", label: "Team", icon: Users },
  { to: "/vendor/reports", label: "Reports", icon: BarChart3 },
];

export const VendorShell = ({ title, children }: { title: string; children: ReactNode }) => (
  <PanelLayout title={title} brand="Sevasetu" accent="Vendor portal" nav={vendorNav} user={{ name: "Rohan Mehta", role: "SparkleHome" }}>
    {children}
  </PanelLayout>
);
