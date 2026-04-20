import { VendorShell } from "./VendorShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Plus } from "lucide-react";

const VendorProfileEditor = () => (
  <VendorShell title="Profile editor">
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="space-y-6">
        <section className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold">Business info</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><Label>Business name</Label><Input defaultValue="SparkleHome Pros" className="mt-1" /></div>
            <div><Label>Primary category</Label><Input defaultValue="Home Cleaning" className="mt-1" /></div>
            <div><Label>Phone</Label><Input defaultValue="+91 98765 43210" className="mt-1" /></div>
            <div><Label>Email</Label><Input defaultValue="hello@sparklehome.in" className="mt-1" /></div>
            <div className="sm:col-span-2"><Label>About business</Label><Textarea rows={4} defaultValue="Premium deep-cleaning crew with eco-certified supplies and trained professionals." className="mt-1" /></div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between"><h3 className="font-display text-base font-bold">Services & pricing</h3><Button size="sm" variant="outline" className="gap-1"><Plus className="h-3.5 w-3.5" /> Add service</Button></div>
          <div className="mt-4 space-y-2">
            {[{ n: "Standard cleaning (1BHK)", p: "₹599" }, { n: "Deep cleaning (2BHK)", p: "₹1,499" }, { n: "Sofa shampoo (5-seater)", p: "₹899" }].map(s => (
              <div key={s.n} className="flex items-center justify-between rounded-xl border border-border p-3"><span className="text-sm font-medium">{s.n}</span><div className="flex items-center gap-2"><span className="font-semibold text-primary">{s.p}</span><Button size="sm" variant="ghost">Edit</Button></div></div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold">Service area</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div><Label>City</Label><Input defaultValue="Mumbai" className="mt-1" /></div>
            <div><Label>Service radius (km)</Label><Input type="number" defaultValue={15} className="mt-1" /></div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Bandra", "Khar", "Santacruz", "Andheri W", "Juhu"].map(a => <span key={a} className="chip">{a} ×</span>)}
          </div>
        </section>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Logo & cover</h3>
          <div className="mt-3 grid h-32 place-items-center rounded-xl border-2 border-dashed border-border bg-muted text-muted-foreground"><div className="text-center"><Camera className="mx-auto h-6 w-6" /><p className="mt-1 text-xs">Upload cover</p></div></div>
        </div>
        <div className="rounded-2xl border border-success/40 bg-success/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-success">Profile strength</p>
          <p className="mt-2 font-display text-3xl font-bold text-success">86%</p>
          <p className="mt-1 text-xs text-muted-foreground">Add 2 more photos to reach 100%.</p>
        </div>
        <Button className="w-full bg-gradient-accent text-accent-foreground">Save changes</Button>
      </aside>
    </div>
  </VendorShell>
);

export default VendorProfileEditor;
