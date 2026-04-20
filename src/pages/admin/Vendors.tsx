import { AdminShell } from "./AdminShell";
import { vendors } from "@/lib/mock-data";
import { Star, BadgeCheck, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const VendorsAdmin = () => (
  <AdminShell title="Vendor management">
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {[{ k: "Total", v: "8,420" }, { k: "Pending", v: "42", warn: true }, { k: "Suspended", v: "12" }, { k: "Premium", v: "1,840" }].map(s => (
        <div key={s.k} className={`rounded-2xl border p-5 ${s.warn ? "border-warning/40 bg-warning/5" : "border-border bg-card"}`}>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</p>
          <p className="mt-2 font-display text-3xl font-bold">{s.v}</p>
        </div>
      ))}
    </div>

    <div className="mt-6 rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-display text-base font-bold">All vendors</h3>
        <Button size="sm">Add vendor</Button>
      </div>
      <div className="divide-y divide-border">
        {vendors.map(v => (
          <div key={v.id} className="grid grid-cols-1 items-center gap-3 p-4 sm:grid-cols-[auto_1fr_auto_auto_auto_auto]">
            <img src={v.image} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="flex items-center gap-1 font-semibold">{v.name} {v.verified && <BadgeCheck className="h-4 w-4 text-primary" />}</p>
              <p className="truncate text-xs text-muted-foreground">{v.category} · {v.area}, {v.city}</p>
            </div>
            <span className="hidden text-sm sm:inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" /> {v.rating}</span>
            <span className="hidden text-xs text-muted-foreground sm:block">{v.jobs.toLocaleString()} jobs</span>
            <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${v.promoted ? "bg-accent/15 text-accent" : "bg-success/15 text-success"}`}>{v.promoted ? "Premium" : "Active"}</span>
            <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal /></button>
          </div>
        ))}
      </div>
    </div>
  </AdminShell>
);

export default VendorsAdmin;
