import { VendorShell } from "./VendorShell";
import { KpiCard } from "@/components/panel/KpiCard";
import { Inbox, IndianRupee, Star, Target, ArrowUpRight } from "lucide-react";
import { leads } from "@/lib/mock-data";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const chart = [
  { d: "Mon", leads: 12, won: 4 },
  { d: "Tue", leads: 18, won: 7 },
  { d: "Wed", leads: 15, won: 5 },
  { d: "Thu", leads: 22, won: 9 },
  { d: "Fri", leads: 28, won: 12 },
  { d: "Sat", leads: 35, won: 16 },
  { d: "Sun", leads: 24, won: 10 },
];

const VendorDashboard = () => (
  <VendorShell title="Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <KpiCard icon={Inbox} label="New leads (7d)" value="154" change={18} accent="primary" />
      <KpiCard icon={Target} label="Conversion" value="34%" change={6} accent="success" />
      <KpiCard icon={IndianRupee} label="Revenue (MTD)" value="₹1.84L" change={22} accent="accent" />
      <KpiCard icon={Star} label="Avg rating" value="4.9" change={2} accent="warning" />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-base font-bold">Lead activity</h3>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </div>
          <select className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs">
            <option>This week</option><option>This month</option>
          </select>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
              <Line type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="won" stroke="hsl(var(--accent))" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-base font-bold">Plan usage</h3>
        <p className="mt-1 text-xs text-muted-foreground">Premium plan</p>
        <div className="mt-5 space-y-4">
          {[{ k: "Lead credits", used: 154, total: 300 }, { k: "Featured slots", used: 2, total: 5 }, { k: "Team members", used: 4, total: 10 }].map(s => (
            <div key={s.k}>
              <div className="flex justify-between text-xs"><span className="font-medium">{s.k}</span><span className="text-muted-foreground">{s.used}/{s.total}</span></div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-gradient-primary" style={{ width: `${(s.used / s.total) * 100}%` }} /></div>
            </div>
          ))}
        </div>
        <Button className="mt-5 w-full bg-gradient-accent text-accent-foreground">Upgrade plan</Button>
      </div>
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-base font-bold">Recent leads</h3>
          <Link to="/vendor/leads" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">View all <ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="space-y-2">
          {leads.slice(0, 5).map(l => (
            <Link to={`/vendor/leads/${l.id}`} key={l.id} className="flex items-center justify-between rounded-xl border border-border p-3 transition-colors hover:bg-muted">
              <div className="min-w-0">
                <div className="flex items-center gap-2"><span className="font-mono text-xs text-muted-foreground">{l.id}</span><span className="text-xs font-semibold text-foreground">{l.customer}</span></div>
                <p className="mt-0.5 truncate text-sm">{l.service}</p>
              </div>
              <div className="text-right">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${l.urgency === "high" ? "bg-destructive/10 text-destructive" : l.urgency === "medium" ? "bg-warning/15 text-warning" : "bg-muted text-muted-foreground"}`}>{l.urgency}</span>
                <p className="mt-1 text-xs text-muted-foreground">{l.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-base font-bold">Top categories</h3>
        <div className="mt-4 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[{ n: "Cleaning", v: 86 }, { n: "Sofa", v: 42 }, { n: "Bath", v: 28 }, { n: "Office", v: 18 }]} layout="vertical">
              <XAxis type="number" hide /><YAxis dataKey="n" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={60} />
              <Bar dataKey="v" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </VendorShell>
);

export default VendorDashboard;
