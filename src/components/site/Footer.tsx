import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => (
  <footer className="mt-20 border-t border-border bg-gradient-soft">
    <div className="container-x grid gap-10 py-14 md:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">S</span>
          Sevasetu
        </Link>
        <p className="mt-3 max-w-xs text-sm text-muted-foreground">
          India's premium directory for trusted home-service professionals. Verified, insured, and rated.
        </p>
        <div className="mt-4 flex gap-3">
          {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
            <a key={i} className="grid h-9 w-9 place-items-center rounded-full bg-card text-foreground/70 shadow-sm transition-colors hover:text-primary" href="#"><Icon className="h-4 w-4" /></a>
          ))}
        </div>
      </div>
      {[
        { title: "Customers", items: ["Find services", "Categories", "How it works", "Pricing", "Trust & safety"] },
        { title: "Vendors", items: ["Join as vendor", "Vendor dashboard", "Pricing & plans", "Success stories", "Resources"] },
        { title: "Company", items: ["About us", "Careers", "Press", "Contact", "Help center"] },
      ].map(col => (
        <div key={col.title}>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{col.title}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {col.items.map(i => <li key={i}><a href="#" className="transition-colors hover:text-primary">{i}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-border">
      <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
        <p>© 2025 Sevasetu Technologies Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
      </div>
    </div>
  </footer>
);
