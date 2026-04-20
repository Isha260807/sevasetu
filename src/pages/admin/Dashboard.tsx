import { AdminShell } from "./AdminShell";
import { KpiCard } from "@/components/panel/KpiCard";
import { Users, Building2, Inbox, IndianRupee } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

const data = [
  { d: "Mon", leads: 240, vendors: 12 }, { d: "Tue", leads: 320, vendors: 18 },
  { d: "Wed", leads: 280, vendors: 14 }, { d: "Thu", leads: 410, vendors: 22 },
  { d: "Fri", leads: 520, vendors: 28 }, { d: "Sat", leads: 640, vendors: 34 }, { d: "Sun", leads: 480, vendors: 26 },
];

const cities = [
  { c: "Mumbai", l: 2840 }, { c: "Bengaluru", l: 2410 }, { c: "Delhi NCR", l: 2210 },
  { c: "Hyderabad", l: 1620 }, { c: "Pune", l: 1280 }, { c: "Kolkata", l: 980 },
];

const AdminDashboard = () => (
  <AdminShell title="Platform overview">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <KpiCard icon={Inbox} label="Leads (today)" value="2,890" change={14} accent="primary" />
      <KpiCard icon={Building2} label="Active vendors" value="8,420" change={6} accent="success" />
      <KpiCard icon={Users} label="New users" value="1,240" change={22} accent="accent" />
      <KpiCard icon={IndianRupee} label="GMV (MTD)" value="₹2.4Cr" change={28} accent="warning" />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
        <h3 className="font-display text-base font-bold">Lead vs vendor activity</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
              <Line type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={3} />
              <Line type="monotone" dataKey="vendors" stroke="hsl(var(--accent))" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-base font-bold">Top cities</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cities} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="c" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={70} />
              <Bar dataKey="l" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      {[{ k: "Pending verifications", v: "42", c: "warning" }, { k: "Open tickets", v: "18", c: "destructive" }, { k: "Refund requests", v: "7", c: "primary" }].map(s => (
        <div key={s.k} className="flex items-center justify-between rounded-2xl border border-border bg-card p-5">
          <div><p className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</p><p className="mt-2 font-display text-2xl font-bold">{s.v}</p></div>
          <button className="text-sm font-semibold text-primary hover:underline">Review →</button>
        </div>
      ))}
    </div>
  </AdminShell>
);

export default AdminDashboard;
