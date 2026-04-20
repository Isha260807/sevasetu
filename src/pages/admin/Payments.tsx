import { AdminShell } from "./AdminShell";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const txns = [
  { id: "TX-A0921", vendor: "SparkleHome", amount: 2499, type: "Plan", date: "Apr 12", status: "Success" },
  { id: "TX-A0920", vendor: "QuickFix", amount: 799, type: "Credits", date: "Apr 12", status: "Success" },
  { id: "TX-A0919", vendor: "VoltMaster", amount: 6499, type: "Plan", date: "Apr 11", status: "Success" },
  { id: "TX-A0918", vendor: "CoolBreeze", amount: 3499, type: "Boost", date: "Apr 10", status: "Failed" },
  { id: "TX-A0917", vendor: "ColorCraft", amount: 2499, type: "Plan", date: "Apr 09", status: "Success" },
];
const data = [{ d: "Mon", v: 142000 }, { d: "Tue", v: 168000 }, { d: "Wed", v: 198000 }, { d: "Thu", v: 224000 }, { d: "Fri", v: 286000 }, { d: "Sat", v: 312000 }, { d: "Sun", v: 248000 }];

const Payments = () => (
  <AdminShell title="Payments & Transactions">
    <div className="grid gap-4 sm:grid-cols-3">
      {[{ k: "GMV (7d)", v: "₹15.8L" }, { k: "Net revenue", v: "₹3.2L" }, { k: "Refunds", v: "₹14,200" }].map(s => (
        <div key={s.k} className="rounded-2xl border border-border bg-card p-5"><p className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</p><p className="mt-2 font-display text-3xl font-bold">{s.v}</p></div>
      ))}
    </div>
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-bold">Daily revenue</h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
            <Bar dataKey="v" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="mt-6 rounded-2xl border border-border bg-card p-5">
      <h3 className="font-display text-base font-bold">Recent transactions</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground"><th className="py-3">ID</th><th>Vendor</th><th>Type</th><th>Date</th><th className="text-right">Amount</th><th>Status</th></tr></thead>
          <tbody>{txns.map(t => (
            <tr key={t.id} className="border-b border-border/50">
              <td className="py-3 font-mono text-xs">{t.id}</td><td>{t.vendor}</td><td>{t.type}</td><td className="text-muted-foreground">{t.date}</td>
              <td className="text-right font-semibold">₹{t.amount.toLocaleString()}</td>
              <td><span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${t.status === "Success" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{t.status}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  </AdminShell>
);

export default Payments;
