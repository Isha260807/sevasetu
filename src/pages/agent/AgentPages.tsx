import { PanelLayout } from "@/layouts/PanelLayout";
import { ReactNode } from "react";
import { LayoutDashboard, Inbox, LifeBuoy } from "lucide-react";
import { KpiCard } from "@/components/panel/KpiCard";
import { CheckCircle2, Clock, Star } from "lucide-react";
import { leads } from "@/lib/mock-data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const agentNav = [
  { to: "/agent", label: "Dashboard", icon: LayoutDashboard },
  { to: "/agent/leads", label: "Assigned leads", icon: Inbox },
  { to: "/agent/support", label: "Support tickets", icon: LifeBuoy },
];

const Shell = ({ title, children }: { title: string; children: ReactNode }) => (
  <PanelLayout title={title} brand="Sevasetu" accent="Agent" nav={agentNav} user={{ name: "Neha Singh", role: "Field Agent" }}>{children}</PanelLayout>
);

export const AgentDashboard = () => (
  <Shell title="My day">
    <div className="grid gap-4 sm:grid-cols-3">
      <KpiCard icon={Inbox} label="Assigned leads" value="14" change={12} accent="primary" />
      <KpiCard icon={CheckCircle2} label="Resolved today" value="9" change={20} accent="success" />
      <KpiCard icon={Star} label="CSAT" value="4.8" change={3} accent="warning" />
    </div>
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-bold">Today's queue</h3>
      <div className="mt-3 space-y-2">
        {leads.slice(0, 5).map(l => (
          <Link to="/agent/leads" key={l.id} className="flex items-center justify-between rounded-xl border border-border p-3 hover:bg-muted">
            <div><p className="text-sm font-semibold">{l.service}</p><p className="text-xs text-muted-foreground">{l.customer} · {l.location}</p></div>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" /> {l.time}</span>
          </Link>
        ))}
      </div>
    </div>
  </Shell>
);

export const AgentLeads = () => (
  <Shell title="Assigned leads">
    <div className="rounded-2xl border border-border bg-card">
      <div className="border-b border-border p-4"><h3 className="font-display text-base font-bold">{leads.length} leads in queue</h3></div>
      <div className="divide-y divide-border">
        {leads.map(l => (
          <div key={l.id} className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <div className="flex items-center gap-2"><span className="font-mono text-xs text-muted-foreground">{l.id}</span><span className="text-xs font-semibold">{l.customer}</span></div>
              <p className="mt-1 text-sm font-medium">{l.service}</p>
              <p className="text-xs text-muted-foreground">{l.location}</p>
            </div>
            <div className="flex gap-2"><Button size="sm" variant="outline">Assign vendor</Button><Button size="sm">Resolve</Button></div>
          </div>
        ))}
      </div>
    </div>
  </Shell>
);

export const AgentSupport = () => {
  const tickets = [
    { id: "T-3021", subject: "Vendor not responding", from: "Priya S.", status: "Open", priority: "High", time: "10 min ago" },
    { id: "T-3020", subject: "Refund request — booking #1932", from: "Rahul M.", status: "In progress", priority: "Medium", time: "1 hr ago" },
    { id: "T-3019", subject: "Wrong service quoted", from: "Anita D.", status: "Open", priority: "Low", time: "3 hr ago" },
    { id: "T-3018", subject: "Late arrival complaint", from: "Vikram S.", status: "Resolved", priority: "Medium", time: "Yesterday" },
  ];
  return (
    <Shell title="Support tickets">
      <div className="grid gap-4 sm:grid-cols-3">
        {[{ k: "Open", v: 7, c: "warning" }, { k: "In progress", v: 4, c: "primary" }, { k: "Resolved (7d)", v: 38, c: "success" }].map(s => (
          <div key={s.k} className="rounded-2xl border border-border bg-card p-5"><p className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</p><p className="mt-2 font-display text-3xl font-bold">{s.v}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-4"><h3 className="font-display text-base font-bold">Tickets</h3></div>
        <div className="divide-y divide-border">
          {tickets.map(t => (
            <div key={t.id} className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-[100px_1fr_auto_auto_auto] sm:items-center">
              <span className="font-mono text-xs">{t.id}</span>
              <div><p className="font-semibold text-sm">{t.subject}</p><p className="text-xs text-muted-foreground">From {t.from} · {t.time}</p></div>
              <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${t.priority === "High" ? "bg-destructive/10 text-destructive" : t.priority === "Medium" ? "bg-warning/15 text-warning" : "bg-muted text-muted-foreground"}`}>{t.priority}</span>
              <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${t.status === "Resolved" ? "bg-success/15 text-success" : t.status === "Open" ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent"}`}>{t.status}</span>
              <Button size="sm" variant="outline">Open</Button>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};
