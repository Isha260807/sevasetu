import { VendorShell } from "./VendorShell";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import { KpiCard } from "@/components/panel/KpiCard";
import { TrendingUp, Star, Users, Repeat } from "lucide-react";

const months = [
  { m: "Nov", revenue: 84000 }, { m: "Dec", revenue: 92000 }, { m: "Jan", revenue: 110000 },
  { m: "Feb", revenue: 128000 }, { m: "Mar", revenue: 156000 }, { m: "Apr", revenue: 184000 },
];
const sources = [
  { name: "Search", value: 48, color: "hsl(184 75% 22%)" },
  { name: "Category", value: 24, color: "hsl(174 60% 38%)" },
  { name: "Social", value: 16, color: "hsl(14 95% 62%)" },
  { name: "Direct", value: 12, color: "hsl(38 95% 55%)" },
];

const Reports = () => (
  <VendorShell title="Reports">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <KpiCard icon={TrendingUp} label="Revenue (6m)" value="₹7.6L" change={32} accent="success" />
      <KpiCard icon={Users} label="Customers" value="412" change={18} accent="primary" />
      <KpiCard icon={Repeat} label="Repeat rate" value="42%" change={5} accent="accent" />
      <KpiCard icon={Star} label="NPS" value="74" change={9} accent="warning" />
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
        <h3 className="font-display text-base font-bold">Revenue trend</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={months}>
              <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} /><stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} fill="url(#g1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-base font-bold">Lead sources</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={sources} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {sources.map(s => <Cell key={s.name} fill={s.color} />)}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </VendorShell>
);

export default Reports;
