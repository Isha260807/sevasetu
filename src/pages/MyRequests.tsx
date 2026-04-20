import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LeadFormModal } from "@/components/site/LeadFormModal";
import { Button } from "@/components/ui/button";
import { myRequests } from "@/lib/mock-data";
import { Inbox, Clock, CheckCircle2, FileText, MessageSquare } from "lucide-react";

const statusStyle = {
  new: { label: "New", cls: "bg-warning/15 text-warning" },
  quoted: { label: "Quoted", cls: "bg-primary/10 text-primary" },
  won: { label: "Booked", cls: "bg-success/15 text-success" },
} as const;

const MyRequests = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="border-b border-border bg-gradient-soft">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-8">
          <div>
            <h1 className="font-display text-3xl font-bold">My requests</h1>
            <p className="mt-1 text-sm text-muted-foreground">Track quotes & messages from vendors.</p>
          </div>
          <Button onClick={() => setOpen(true)} className="bg-gradient-accent text-accent-foreground hover:opacity-90">+ New request</Button>
        </div>
      </section>

      <div className="container-x py-8">
        {myRequests.length === 0 ? (
          <div className="grid place-items-center rounded-2xl border border-dashed border-border bg-card p-16 text-center">
            <Inbox className="h-14 w-14 text-muted-foreground" />
            <p className="mt-4 font-display text-lg font-semibold">No requests yet</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">Post your first service request and get matched with verified vendors in minutes.</p>
            <Button onClick={() => setOpen(true)} className="mt-5 bg-gradient-accent text-accent-foreground">Create request</Button>
          </div>
        ) : (
          <div className="space-y-3">
            {myRequests.map(r => (
              <div key={r.id} className="grid gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{r.id}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusStyle[r.status].cls}`}>{statusStyle[r.status].label}</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-semibold">{r.service}</h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {r.date}</span>
                    <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> {r.vendors} vendors interested</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1"><MessageSquare className="h-4 w-4" /> Chat</Button>
                  <Button size="sm" className="gap-1"><FileText className="h-4 w-4" /> View quotes</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <LeadFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default MyRequests;
