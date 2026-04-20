import { AdminShell } from "./AdminShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GitBranch, Plus, Save } from "lucide-react";

const Distribution = () => (
  <AdminShell title="Lead distribution rules">
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><GitBranch className="h-5 w-5" /></span>
          <div><h3 className="font-display text-lg font-bold">Active rule: Round-robin (verified)</h3><p className="text-xs text-muted-foreground">Distribute new leads equally among verified vendors within radius</p></div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>Max vendors per lead</Label><Input type="number" defaultValue={5} className="mt-1" /></div>
            <div><Label>Distribution radius (km)</Label><Input type="number" defaultValue={10} className="mt-1" /></div>
            <div><Label>Min vendor rating</Label><Input type="number" step={0.1} defaultValue={4.0} className="mt-1" /></div>
            <div><Label>Response window (mins)</Label><Input type="number" defaultValue={30} className="mt-1" /></div>
          </div>

          <div>
            <Label>Priority order</Label>
            <div className="mt-2 space-y-2">
              {["Premium plan vendors", "Verified vendors", "Distance ascending", "Rating descending", "Round-robin"].map((p, i) => (
                <div key={p} className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <span className="flex-1 text-sm font-medium">{p}</span>
                  <span className="text-xs text-muted-foreground">⋮⋮</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Categories override</Label>
            <div className="mt-2 flex flex-wrap gap-1.5">{["Cleaning", "AC Repair", "Plumbing"].map(c => <span key={c} className="chip">{c} ×</span>)}<button className="chip border border-dashed border-border bg-transparent hover:bg-muted"><Plus className="h-3 w-3" /> Add</button></div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button className="gap-1"><Save className="h-4 w-4" /> Save changes</Button>
            <Button variant="outline">Test rule</Button>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">All rules</h3>
          <div className="mt-3 space-y-2">
            {[{ n: "Round-robin (verified)", a: true }, { n: "Premium-first (Mumbai)", a: false }, { n: "Salon — top-rated", a: false }].map(r => (
              <div key={r.n} className={`rounded-xl border p-3 ${r.a ? "border-primary bg-primary/5" : "border-border"}`}>
                <p className="text-sm font-semibold">{r.n}</p>
                <p className="text-xs text-muted-foreground">{r.a ? "Active globally" : "Inactive"}</p>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full gap-1"><Plus className="h-4 w-4" /> New rule</Button>
          </div>
        </div>
      </aside>
    </div>
  </AdminShell>
);

export default Distribution;
