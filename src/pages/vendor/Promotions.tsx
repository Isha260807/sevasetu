import { VendorShell } from "./VendorShell";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  { name: "Starter", price: "Free", desc: "For new vendors getting started", features: ["20 lead credits / mo", "Basic profile", "Email support"], featured: false },
  { name: "Growth", price: "₹2,499", desc: "Most popular for growing teams", features: ["150 lead credits", "Verified badge", "Priority listing", "Phone support"], featured: true },
  { name: "Premium", price: "₹6,499", desc: "For high-volume businesses", features: ["500 lead credits", "Featured slot", "Dedicated manager", "Promotion tools", "API access"], featured: false },
];

const Promotions = () => (
  <VendorShell title="Promotions & Plans">
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map(p => (
        <div key={p.name} className={`relative rounded-2xl border bg-card p-6 shadow-sm ${p.featured ? "border-primary shadow-elegant ring-2 ring-primary/20" : "border-border"}`}>
          {p.featured && <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground"><Sparkles className="h-3 w-3" /> Most popular</span>}
          <p className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">{p.name}</p>
          <p className="mt-2 font-display text-4xl font-bold">{p.price}<span className="text-sm font-normal text-muted-foreground">{p.price !== "Free" && "/mo"}</span></p>
          <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          <ul className="mt-5 space-y-2.5">
            {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-success" /> {f}</li>)}
          </ul>
          <Button className={`mt-6 w-full ${p.featured ? "bg-gradient-accent text-accent-foreground" : ""}`} variant={p.featured ? "default" : "outline"}>
            {p.name === "Growth" ? "Current plan" : "Upgrade"}
          </Button>
        </div>
      ))}
    </div>

    <section className="mt-8 rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-base font-bold">Boost your visibility</h3>
      <p className="mt-1 text-sm text-muted-foreground">Run featured campaigns and reach 5x more customers.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {["Top of search", "Category banner", "Push notification"].map(b => (
          <div key={b} className="rounded-xl border border-border p-4"><p className="font-semibold">{b}</p><p className="mt-1 text-xs text-muted-foreground">Starting ₹499/day</p><Button size="sm" variant="outline" className="mt-3">Activate</Button></div>
        ))}
      </div>
    </section>
  </VendorShell>
);

export default Promotions;
