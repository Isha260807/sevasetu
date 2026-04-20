import { AdminShell } from "./AdminShell";
import { leads, vendors, categories } from "@/lib/mock-data";
import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusCfg: Record<string, string> = {
  new: "bg-warning/15 text-warning", contacted: "bg-primary/10 text-primary",
  quoted: "bg-accent/15 text-accent", won: "bg-success/15 text-success", lost: "bg-muted text-muted-foreground",
};

const LeadsAdmin = () => (
  <AdminShell title="Leads management">
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex h-9 flex-1 items-center gap-2 rounded-full border border-border bg-muted px-3 sm:max-w-xs"><Search className="h-4 w-4 text-muted-foreground" /><input className="flex-1 bg-transparent text-sm outline-none" placeholder="Search by ID, customer…" /></div>
        <select className="h-9 rounded-full border border-border bg-muted px-3 text-sm"><option>All categories</option>{categories.map(c => <option key={c.id}>{c.name}</option>)}</select>
        <select className="h-9 rounded-full border border-border bg-muted px-3 text-sm"><option>All status</option><option>New</option><option>Won</option></select>
        <Button variant="outline" size="sm" className="gap-1"><Filter className="h-4 w-4" /> More</Button>
        <Button size="sm" className="ml-auto gap-1"><Download className="h-4 w-4" /> Export</Button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="py-3">ID</th><th>Customer</th><th>Service</th><th>Location</th><th>Budget</th><th>Status</th><th>Time</th>
          </tr></thead>
          <tbody>
            {leads.map(l => (
              <tr key={l.id} className="border-b border-border/50 hover:bg-muted/40">
                <td className="py-3 font-mono text-xs">{l.id}</td>
                <td>{l.customer}</td>
                <td className="max-w-xs truncate">{l.service}</td>
                <td className="text-xs text-muted-foreground">{l.location}</td>
                <td>{l.budget}</td>
                <td><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusCfg[l.status]}`}>{l.status}</span></td>
                <td className="text-xs text-muted-foreground">{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminShell>
);

export default LeadsAdmin;
