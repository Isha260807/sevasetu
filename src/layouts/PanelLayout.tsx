import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { LucideIcon, Bell, Search, ChevronDown } from "lucide-react";

type NavItem = { to: string; label: string; icon: LucideIcon };

export const PanelLayout = ({ title, brand, accent, nav, user, children }: { title: string; brand: string; accent: string; nav: NavItem[]; user: { name: string; role: string }; children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen w-full bg-muted/30">
      <aside className="hidden w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-sidebar-primary font-display text-base font-bold text-sidebar-primary-foreground">S</span>
          <div>
            <p className="font-display text-sm font-bold leading-none text-sidebar-foreground/95">{brand}</p>
            <p className="text-[10px] uppercase tracking-widest text-sidebar-foreground/60">{accent}</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {nav.map(item => {
            const active = pathname === item.to || (item.to !== nav[0].to && pathname.startsWith(item.to));
            return (
              <Link key={item.to} to={item.to} className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-4">
          <Link to="/" className="block rounded-xl bg-sidebar-accent p-3 text-xs text-sidebar-foreground/80 hover:text-sidebar-foreground">
            ← Back to main site
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between gap-4 border-b border-border bg-card px-4 lg:px-8">
          <div>
            <h1 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h1>
            <p className="hidden text-xs text-muted-foreground sm:block">Welcome back, {user.name.split(" ")[0]} 👋</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden h-9 w-64 items-center gap-2 rounded-full border border-border bg-muted px-3 md:flex">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Search…" />
            </div>
            <button className="relative grid h-9 w-9 place-items-center rounded-full border border-border bg-card hover:bg-muted">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-border bg-card py-1 pl-1 pr-2.5 hover:bg-muted">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">{user.name.split(" ").map(n => n[0]).join("")}</span>
              <span className="hidden text-sm font-medium sm:block">{user.role}</span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </header>

        {/* Mobile nav */}
        <div className="flex gap-1 overflow-x-auto border-b border-border bg-card px-3 py-2 lg:hidden">
          {nav.map(item => {
            const active = pathname === item.to || (item.to !== nav[0].to && pathname.startsWith(item.to));
            return (
              <Link key={item.to} to={item.to} className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
};
