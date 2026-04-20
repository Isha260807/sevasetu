import { VendorShell } from "./VendorShell";
import { leads } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const statusCfg = {
  new: "bg-warning/15 text-warning",
  contacted: "bg-primary/10 text-primary",
  quoted: "bg-accent/15 text-accent",
  won: "bg-success/15 text-success",
  lost: "bg-muted text-muted-foreground",
} as const;

const LeadInbox = () => {
  const [tab, setTab] = useState<"all" | "new" | "contacted" | "quoted" | "won" | "lost">("all");
  const filtered = leads.filter(l => tab === "all" || l.status === tab);
  const counts = { all: leads.length, new: 0, contacted: 0, quoted: 0, won: 0, lost: 0 };
  leads.forEach(l => { counts[l.status]++; });

  return (
    <VendorShell title="Lead Inbox">
      <div className="rounded-2xl border border-border bg-card p-3">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-3">
          {(Object.keys(counts) as (keyof typeof counts)[]).map(k => (
            <button key={k} onClick={() => setTab(k)} className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${tab === k ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"}`}>
              {k} <span className="ml-1 opacity-70">{counts[k]}</span>
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <div className="flex h-9 items-center gap-2 rounded-full border border-border bg-muted px-3"><Search className="h-4 w-4 text-muted-foreground" /><input className="bg-transparent text-sm outline-none" placeholder="Search leads…" /></div>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted"><Filter className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-2 hidden grid-cols-[100px_1.5fr_1fr_1fr_100px_100px] gap-3 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:grid">
          <span>Lead ID</span><span>Service</span><span>Customer</span><span>Location</span><span>Status</span><span>Time</span>
        </div>
        <div className="space-y-1.5">
          {filtered.map(l => (
            <Link to={`/vendor/leads/${l.id}`} key={l.id} className="grid grid-cols-1 gap-2 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-muted md:grid-cols-[100px_1.5fr_1fr_1fr_100px_100px] md:items-center">
              <span className="font-mono text-xs text-muted-foreground">{l.id}</span>
              <div>
                <p className="font-semibold text-sm">{l.service}</p>
                <p className="text-xs text-muted-foreground md:hidden">{l.customer} · {l.location}</p>
              </div>
              <span className="hidden text-sm md:block">{l.customer}</span>
              <span className="hidden text-xs text-muted-foreground md:block">{l.location}</span>
              <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusCfg[l.status]}`}>{l.status}</span>
              <span className="text-xs text-muted-foreground">{l.time}</span>
            </Link>
          ))}
        </div>
      </div>
    </VendorShell>
  );
};

export default LeadInbox;
