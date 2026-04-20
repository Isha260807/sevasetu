import { VendorShell } from "./VendorShell";
import { Button } from "@/components/ui/button";
import { Download, IndianRupee } from "lucide-react";

const txns = [
  { id: "TX-9821", date: "Apr 12, 2025", desc: "Premium plan renewal", amount: -2499, status: "Paid" },
  { id: "TX-9820", date: "Apr 10, 2025", desc: "Lead credits topup (50)", amount: -799, status: "Paid" },
  { id: "TX-9819", date: "Apr 02, 2025", desc: "Featured boost — 7 days", amount: -3499, status: "Paid" },
  { id: "TX-9818", date: "Mar 28, 2025", desc: "Refund — failed lead L-0982", amount: 199, status: "Refunded" },
];

const Billing = () => (
  <VendorShell title="Payments & Billing">
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-border bg-gradient-primary p-5 text-primary-foreground">
        <p className="text-xs uppercase tracking-wider opacity-80">Wallet balance</p>
        <p className="mt-2 font-display text-3xl font-bold">₹4,820</p>
        <Button size="sm" className="mt-3 bg-background/20 text-primary-foreground hover:bg-background/30">+ Add money</Button>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5"><p className="text-xs uppercase tracking-wider text-muted-foreground">Lead credits</p><p className="mt-2 font-display text-3xl font-bold">146 <span className="text-sm font-normal text-muted-foreground">/300</span></p><p className="mt-1 text-xs text-muted-foreground">Resets May 1</p></div>
      <div className="rounded-2xl border border-border bg-card p-5"><p className="text-xs uppercase tracking-wider text-muted-foreground">This month spend</p><p className="mt-2 font-display text-3xl font-bold">₹6,797</p><p className="mt-1 text-xs text-success">−12% vs last month</p></div>
    </div>

    <div className="mt-6 rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-bold">Transaction history</h3>
        <Button size="sm" variant="outline" className="gap-1"><Download className="h-4 w-4" /> Export CSV</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="py-3">ID</th><th>Date</th><th>Description</th><th className="text-right">Amount</th><th>Status</th>
          </tr></thead>
          <tbody>
            {txns.map(t => (
              <tr key={t.id} className="border-b border-border/50">
                <td className="py-3 font-mono text-xs">{t.id}</td>
                <td className="text-muted-foreground">{t.date}</td>
                <td>{t.desc}</td>
                <td className={`text-right font-semibold ${t.amount < 0 ? "text-foreground" : "text-success"}`}>{t.amount < 0 ? "−" : "+"}₹{Math.abs(t.amount).toLocaleString()}</td>
                <td><span className="inline-flex items-center rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">{t.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </VendorShell>
);

export default Billing;
