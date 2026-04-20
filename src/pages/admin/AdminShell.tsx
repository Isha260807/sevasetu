import { PanelLayout } from "@/layouts/PanelLayout";
import { ReactNode } from "react";
import { LayoutDashboard, Inbox, Building2, FolderTree, GitBranch, CreditCard, BarChart3, Mail, Settings } from "lucide-react";

export const adminNav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/leads", label: "Leads", icon: Inbox },
  { to: "/admin/vendors", label: "Vendors", icon: Building2 },
  { to: "/admin/categories", label: "Categories", icon: FolderTree },
  { to: "/admin/distribution", label: "Distribution Rules", icon: GitBranch },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
  { to: "/admin/reports", label: "Reports", icon: BarChart3 },
  { to: "/admin/notifications", label: "Notifications", icon: Mail },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export const AdminShell = ({ title, children }: { title: string; children: ReactNode }) => (
  <PanelLayout title={title} brand="Sevasetu" accent="Admin console" nav={adminNav} user={{ name: "Aditya Verma", role: "Super Admin" }}>
    {children}
  </PanelLayout>
);
