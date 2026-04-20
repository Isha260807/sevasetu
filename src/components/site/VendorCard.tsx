import { Link } from "react-router-dom";
import { Star, MapPin, Phone, MessageSquare, BadgeCheck, Sparkles, Clock } from "lucide-react";
import type { Vendor } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export const VendorCard = ({ v, onQuote }: { v: Vendor; onQuote?: () => void }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover-lift">
    <div className="relative h-44 overflow-hidden">
      <img src={v.cover} alt={v.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      <div className="absolute left-3 top-3 flex gap-1.5">
        {v.promoted && (
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground shadow-md">
            <Sparkles className="h-3 w-3" /> Promoted
          </span>
        )}
        {v.openNow && (
          <span className="inline-flex items-center gap-1 rounded-full bg-success/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-success-foreground">
            <Clock className="h-3 w-3" /> Open
          </span>
        )}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
        <div className="flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-xs font-semibold text-foreground shadow-md">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          {v.rating} <span className="text-muted-foreground">({v.reviews})</span>
        </div>
        <span className="rounded-full bg-background/95 px-2.5 py-1 text-xs font-bold text-primary shadow-md">{v.price}</span>
      </div>
    </div>

    <div className="p-4">
      <Link to={`/vendor-profile/${v.id}`} className="group/link">
        <h3 className="flex items-center gap-1.5 font-display text-base font-semibold leading-tight text-foreground group-hover/link:text-primary">
          {v.name}
          {v.verified && <BadgeCheck className="h-4 w-4 fill-primary text-primary-foreground" />}
        </h3>
      </Link>
      <p className="mt-0.5 text-sm text-muted-foreground">{v.category}</p>

      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" /> {v.area} · {v.distance} away
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {v.tags.slice(0, 3).map(t => <span key={t} className="chip">{t}</span>)}
      </div>

      <div className="mt-4 flex gap-2">
        <Button size="sm" variant="outline" className="flex-1 gap-1"><Phone className="h-3.5 w-3.5" />Call</Button>
        <Button size="sm" variant="outline" className="flex-1 gap-1"><MessageSquare className="h-3.5 w-3.5" />Chat</Button>
        <Button size="sm" onClick={onQuote} className="flex-1 bg-gradient-accent text-accent-foreground hover:opacity-90">Get Quote</Button>
      </div>
    </div>
  </article>
);
