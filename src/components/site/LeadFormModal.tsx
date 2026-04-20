import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const LeadFormModal = ({ open, onOpenChange, vendorName }: { open: boolean; onOpenChange: (v: boolean) => void; vendorName?: string }) => {
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Quote request sent! Vendors will reach out within 30 mins.");
    setTimeout(() => { onOpenChange(false); setSubmitted(false); }, 1800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Get free quotes</DialogTitle>
          <DialogDescription>
            {vendorName ? `Send your requirement to ${vendorName} and similar verified vendors.` : "Tell us what you need — get matched with up to 5 verified pros."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="grid place-items-center gap-3 py-10 text-center animate-scale-in">
            <CheckCircle2 className="h-14 w-14 text-success" />
            <p className="font-display text-lg font-semibold">Request submitted!</p>
            <p className="text-sm text-muted-foreground">Track it under My Requests.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-2">
              <Label>Service needed</Label>
              <Input required placeholder="e.g. Deep home cleaning - 2BHK" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label>Preferred time</Label>
                <Input required type="datetime-local" />
              </div>
              <div className="grid gap-2">
                <Label>Budget</Label>
                <Input placeholder="₹1,000 - 3,000" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Location</Label>
              <Input required placeholder="Area, City" defaultValue="Bandra West, Mumbai" />
            </div>
            <div className="grid gap-2">
              <Label>Describe your requirement</Label>
              <Textarea rows={3} placeholder="Add any details that help vendors quote accurately…" />
            </div>
            <div className="grid gap-2">
              <Label>Attach photos (optional)</Label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/40 px-4 py-6 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Upload className="h-4 w-4" /> Drop files or click to upload
                <input type="file" multiple className="hidden" />
              </label>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90">
              Send request to verified vendors
            </Button>
            <p className="text-center text-xs text-muted-foreground">By submitting you agree to our Terms & Privacy.</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
