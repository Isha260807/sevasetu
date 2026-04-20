import { AdminShell } from "./AdminShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SettingsAdmin = () => (
  <AdminShell title="Settings">
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <aside className="rounded-2xl border border-border bg-card p-3">
        {["General", "Branding", "Payments", "Integrations", "Security", "Team"].map((s, i) => (
          <button key={s} className={`w-full rounded-xl px-3 py-2 text-left text-sm font-medium ${i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>{s}</button>
        ))}
      </aside>
      <div className="space-y-6">
        <section className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold">General</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><Label>Platform name</Label><Input defaultValue="Sevasetu" className="mt-1" /></div>
            <div><Label>Support email</Label><Input defaultValue="help@sevasetu.in" className="mt-1" /></div>
            <div><Label>Default city</Label><Input defaultValue="Mumbai" className="mt-1" /></div>
            <div><Label>Default currency</Label><Input defaultValue="INR (₹)" className="mt-1" /></div>
          </div>
        </section>
        <section className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold">Lead settings</h3>
          <div className="mt-4 space-y-4">
            {[{ l: "Auto-distribute new leads", d: "Send to vendors via active rule" }, { l: "Allow customer chat", d: "In-app chat between customer & vendor" }, { l: "Require vendor verification", d: "Only verified vendors get new leads" }].map(s => (
              <div key={s.l} className="flex items-center justify-between rounded-xl border border-border p-4"><div><p className="font-medium">{s.l}</p><p className="text-xs text-muted-foreground">{s.d}</p></div><Switch defaultChecked /></div>
            ))}
          </div>
        </section>
        <Button className="bg-gradient-accent text-accent-foreground">Save settings</Button>
      </div>
    </div>
  </AdminShell>
);

export default SettingsAdmin;
