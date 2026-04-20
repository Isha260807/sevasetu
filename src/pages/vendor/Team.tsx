import { VendorShell } from "./VendorShell";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";

const team = [
  { name: "Rohan Mehta", role: "Owner", email: "rohan@sparklehome.in", status: "Active", jobs: 0 },
  { name: "Sunil Kumar", role: "Lead pro", email: "sunil@sparklehome.in", status: "Active", jobs: 142 },
  { name: "Anjali Rao", role: "Pro", email: "anjali@sparklehome.in", status: "Active", jobs: 98 },
  { name: "Mohammed Imran", role: "Pro", email: "imran@sparklehome.in", status: "On leave", jobs: 76 },
];

const Team = () => (
  <VendorShell title="Team Management">
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-5">
        <div><h3 className="font-display text-base font-bold">{team.length} team members</h3><p className="text-xs text-muted-foreground">Manage staff and assign leads</p></div>
        <Button className="gap-1"><Plus className="h-4 w-4" /> Invite member</Button>
      </div>
      <div className="divide-y divide-border">
        {team.map(m => (
          <div key={m.email} className="flex items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">{m.name.split(" ").map(n => n[0]).join("")}</div>
              <div><p className="font-semibold text-sm">{m.name}</p><p className="text-xs text-muted-foreground">{m.email}</p></div>
            </div>
            <div className="hidden text-sm sm:block">{m.role}</div>
            <div className="hidden text-xs text-muted-foreground sm:block">{m.jobs} jobs</div>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${m.status === "Active" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>{m.status}</span>
            <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-5 w-5" /></button>
          </div>
        ))}
      </div>
    </div>
  </VendorShell>
);

export default Team;
