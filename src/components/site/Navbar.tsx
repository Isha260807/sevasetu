import { Link, useLocation } from "react-router-dom";
import { Search, MapPin, Menu, X, User, Briefcase, Shield } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/search", label: "Find Services" },
  { to: "/category/cleaning", label: "Categories" },
  { to: "/feed", label: "Social Feed" },
  { to: "/my-requests", label: "My Requests" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isPanel = pathname.startsWith("/vendor") || pathname.startsWith("/admin") || pathname.startsWith("/agent");
  if (isPanel) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">S</span>
          Sevasetu
        </Link>

        <div className="hidden flex-1 items-center gap-1 md:flex md:max-w-md lg:max-w-lg">
          <div className="flex h-10 w-full items-center gap-2 rounded-full border border-border bg-card px-4 shadow-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Mumbai</span>
            <span className="text-border">|</span>
            <Search className="h-4 w-4 text-muted-foreground" />
            <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Search 1000+ services…" />
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/vendor"><Button variant="ghost" size="sm" className="gap-1.5"><Briefcase className="h-4 w-4" />Vendor</Button></Link>
          <Button size="sm" className="bg-gradient-accent text-accent-foreground hover:opacity-90"><User className="h-4 w-4" />Sign in</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card md:hidden animate-fade-in">
          <div className="container-x flex flex-col gap-3 py-4">
            <div className="flex h-11 items-center gap-2 rounded-full border border-border bg-background px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Search services…" />
            </div>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <Link to="/vendor" onClick={() => setOpen(false)}><Button variant="outline" size="sm" className="w-full gap-1"><Briefcase className="h-4 w-4" />Vendor</Button></Link>
              <Link to="/admin" onClick={() => setOpen(false)}><Button variant="outline" size="sm" className="w-full gap-1"><Shield className="h-4 w-4" />Admin</Button></Link>
              <Link to="/agent" onClick={() => setOpen(false)}><Button variant="outline" size="sm" className="w-full gap-1"><User className="h-4 w-4" />Agent</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
