import { AdminShell } from "./AdminShell";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

const months = Array.from({ length: 12 }).map((_, i) => ({ m: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i], leads: 1200 + i * 380 + Math.round(Math.random() * 400), vendors: 100 + i * 28 }));
const cats = [{ n: "Cleaning", v: 32, c: "hsl(184 75% 22%)" }, { n: "Plumbing", v: 18, c: "hsl(174 60% 38%)" }, { n: "Electrical", v: 14, c: "hsl(14 95% 62%)" }, { n: "AC", v: 12, c: "hsl(38 95% 55%)" }, { n: "Other", v: 24, c: "hsl(200 12% 45%)" }];

const ReportsAdmin = () => (
  <AdminShell title="Reports & Analytics">
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
        <h3 className="font-display text-base font-bold">Growth</h3>
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={months}>
              <defs>
                <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} /><stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} /></linearGradient>
                <linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.4} /><stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
              <Area type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#ga)" />
              <Area type="monotone" dataKey="vendors" stroke="hsl(var(--accent))" strokeWidth={2} fill="url(#gb)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-base font-bold">Category mix</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={cats} dataKey="v" nameKey="n" outerRadius={90}>{cats.map(c => <Cell key={c.n} fill={c.c} />)}</Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </AdminShell>
);

export default ReportsAdmin;
