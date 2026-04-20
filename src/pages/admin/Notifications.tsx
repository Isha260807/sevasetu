import { AdminShell } from "./AdminShell";
import { Mail, MessageSquare, Bell, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const tpls = [
  { i: Mail, name: "Welcome email", channel: "Email", trigger: "User signup", active: true },
  { i: MessageSquare, name: "New lead alert (vendor)", channel: "SMS + Push", trigger: "Lead assigned", active: true },
  { i: Bell, name: "Quote received", channel: "Push", trigger: "Vendor sends quote", active: true },
  { i: Mail, name: "Booking confirmation", channel: "Email + SMS", trigger: "Booking confirmed", active: true },
  { i: MessageSquare, name: "Review reminder", channel: "SMS", trigger: "24h after job", active: false },
];

const Notifications = () => (
  <AdminShell title="Notification templates">
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-5">
        <div><h3 className="font-display text-base font-bold">{tpls.length} templates</h3><p className="text-xs text-muted-foreground">Configure transactional messages across channels</p></div>
        <Button>+ New template</Button>
      </div>
      <div className="divide-y divide-border">
        {tpls.map(t => (
          <div key={t.name} className="flex items-center gap-4 p-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><t.i className="h-5 w-5" /></span>
            <div className="flex-1 min-w-0"><p className="font-semibold">{t.name}</p><p className="text-xs text-muted-foreground">Trigger: {t.trigger}</p></div>
            <span className="hidden text-xs sm:block">{t.channel}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${t.active ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>{t.active ? "Active" : "Off"}</span>
            <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted"><Edit className="h-4 w-4" /></button>
          </div>
        ))}
      </div>
    </div>
  </AdminShell>
);

export default Notifications;
