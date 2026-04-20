import { VendorShell } from "./VendorShell";
import { useParams, Link } from "react-router-dom";
import { leads } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, Clock, IndianRupee, AlertCircle, ArrowLeft, Send } from "lucide-react";

const LeadDetail = () => {
  const { id } = useParams();
  const lead = leads.find(l => l.id === id) ?? leads[0];

  return (
    <VendorShell title={`Lead ${lead.id}`}>
      <Link to="/vendor/leads" className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back to inbox</Link>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${lead.urgency === "high" ? "bg-destructive/10 text-destructive" : "bg-warning/15 text-warning"}`}>{lead.urgency} urgency</span>
                <h2 className="mt-2 font-display text-2xl font-bold">{lead.service}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{lead.description}</p>
              </div>
              <div className="text-right text-xs text-muted-foreground"><Clock className="inline h-3.5 w-3.5" /> {lead.time}</div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-muted p-3"><p className="text-xs text-muted-foreground">Budget</p><p className="font-semibold">{lead.budget}</p></div>
              <div className="rounded-xl bg-muted p-3"><p className="text-xs text-muted-foreground">Category</p><p className="font-semibold">{lead.category}</p></div>
              <div className="rounded-xl bg-muted p-3"><p className="text-xs text-muted-foreground">Lead ID</p><p className="font-mono text-sm font-semibold">{lead.id}</p></div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-bold">Conversation</h3>
            <div className="mt-4 space-y-3">
              <div className="flex gap-2"><div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{lead.customer[0]}</div><div className="max-w-md rounded-2xl rounded-tl-sm bg-muted px-4 py-2 text-sm">{lead.description}</div></div>
              <div className="flex justify-end gap-2"><div className="max-w-md rounded-2xl rounded-tr-sm bg-primary px-4 py-2 text-sm text-primary-foreground">Hi {lead.customer.split(" ")[0]}, thanks for reaching out! Can I confirm the address and time?</div></div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-border p-2">
              <input className="flex-1 bg-transparent px-2 text-sm outline-none" placeholder="Type your reply…" />
              <Button size="sm" className="gap-1"><Send className="h-3.5 w-3.5" /> Send</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Customer</h3>
            <div className="mt-3 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary font-display text-base font-bold text-primary-foreground">{lead.customer[0]}</div>
              <div><p className="font-semibold">{lead.customer}</p><p className="text-xs text-muted-foreground">{lead.phone}</p></div>
            </div>
            <div className="mt-3 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />{lead.location}</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="gap-1"><Phone className="h-4 w-4" /> Call</Button>
              <Button variant="outline" size="sm" className="gap-1"><MessageSquare className="h-4 w-4" /> Chat</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Send quote</h3>
            <div className="mt-3 space-y-3">
              <div><label className="text-xs">Amount</label><div className="mt-1 flex h-10 items-center rounded-lg border border-border px-2"><IndianRupee className="h-4 w-4 text-muted-foreground" /><input className="flex-1 bg-transparent px-2 text-sm outline-none" placeholder="2,500" /></div></div>
              <div><label className="text-xs">Note</label><textarea className="mt-1 w-full rounded-lg border border-border p-2 text-sm" rows={3} placeholder="Includes…" /></div>
              <Button className="w-full bg-gradient-accent text-accent-foreground">Send quote</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-warning/40 bg-warning/5 p-4 text-xs text-warning-foreground">
            <AlertCircle className="mb-1 h-4 w-4 text-warning" />
            Respond within 30 mins to keep your conversion score high.
          </div>
        </div>
      </div>
    </VendorShell>
  );
};

export default LeadDetail;
