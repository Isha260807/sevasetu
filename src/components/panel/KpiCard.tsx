import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

export const KpiCard = ({ icon: Icon, label, value, change, accent = "primary" }: { icon: LucideIcon; label: string; value: string; change?: number; accent?: "primary" | "accent" | "success" | "warning" }) => {
  const accentMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning",
  };
  const positive = (change ?? 0) >= 0;
  return (
    <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover-lift">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">{value}</p>
        </div>
        <span className={`grid h-11 w-11 place-items-center rounded-xl ${accentMap[accent]}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      {change !== undefined && (
        <div className={`mt-4 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
          {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {positive ? "+" : ""}{change}% <span className="font-normal text-muted-foreground">vs last week</span>
        </div>
      )}
    </div>
  );
};
