import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { VendorCard } from "@/components/site/VendorCard";
import { LeadFormModal } from "@/components/site/LeadFormModal";
import { vendors, categories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Map, List, SlidersHorizontal, Star, Filter as FilterIcon, X } from "lucide-react";

const Search = () => {
  const [view, setView] = useState<"list" | "map">("list");
  const [openModal, setOpenModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [openOnly, setOpenOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [distance, setDistance] = useState([10]);
  const [sort, setSort] = useState("relevance");

  let list = vendors.slice();
  if (openOnly) list = list.filter(v => v.openNow);
  if (verifiedOnly) list = list.filter(v => v.verified);
  if (minRating > 0) list = list.filter(v => v.rating >= minRating);
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (sort === "reviews") list.sort((a, b) => b.reviews - a.reviews);

  const Filters = () => (
    <div className="space-y-6">
      <div>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Quick filters</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={openOnly} onChange={e => setOpenOnly(e.target.checked)} className="h-4 w-4 accent-primary" /> Open now</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={verifiedOnly} onChange={e => setVerifiedOnly(e.target.checked)} className="h-4 w-4 accent-primary" /> Verified vendors only</label>
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Min rating</h4>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map(r => (
            <button key={r} onClick={() => setMinRating(r)} className={`flex flex-1 items-center justify-center gap-1 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${minRating === r ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:border-primary"}`}>
              {r === 0 ? "Any" : <><Star className="h-3 w-3 fill-current" /> {r}+</>}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Distance: {distance[0]} km</h4>
        <Slider value={distance} onValueChange={setDistance} min={1} max={25} step={1} />
      </div>
      <div>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Categories</h4>
        <div className="flex flex-wrap gap-1.5">
          {categories.slice(0, 8).map(c => <span key={c.id} className="chip cursor-pointer hover:bg-primary hover:text-primary-foreground">{c.name}</span>)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-gradient-soft">
        <div className="container-x py-6">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Cleaning services in Mumbai</h1>
          <p className="mt-1 text-sm text-muted-foreground">{list.length} verified pros · sorted by relevance</p>
        </div>
      </section>

      <div className="container-x grid gap-6 py-6 lg:grid-cols-[260px_1fr]">
        <aside className="hidden rounded-2xl border border-border bg-card p-5 lg:block">
          <Filters />
        </aside>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-3">
            <div className="flex gap-2">
              <Button variant={view === "list" ? "default" : "outline"} size="sm" onClick={() => setView("list")} className="gap-1"><List className="h-4 w-4" /> List</Button>
              <Button variant={view === "map" ? "default" : "outline"} size="sm" onClick={() => setView("map")} className="gap-1"><Map className="h-4 w-4" /> Map</Button>
              <Button variant="outline" size="sm" onClick={() => setShowFilters(true)} className="gap-1 lg:hidden"><FilterIcon className="h-4 w-4" /> Filters</Button>
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select value={sort} onChange={e => setSort(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm">
                <option value="relevance">Sort: Relevance</option>
                <option value="rating">Highest rated</option>
                <option value="reviews">Most reviewed</option>
              </select>
            </div>
          </div>

          {view === "list" ? (
            list.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                <p className="font-display text-lg font-semibold">No vendors match these filters</p>
                <p className="mt-1 text-sm text-muted-foreground">Try widening your distance or rating range.</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                {list.map(v => <VendorCard key={v.id} v={v} onQuote={() => setOpenModal(true)} />)}
              </div>
            )
          ) : (
            <div className="grid h-[500px] place-items-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary to-muted">
              <div className="text-center">
                <Map className="mx-auto h-14 w-14 text-primary" />
                <p className="mt-3 font-display text-lg font-semibold">Map view</p>
                <p className="text-sm text-muted-foreground">Interactive map will appear here.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 bg-foreground/40 lg:hidden" onClick={() => setShowFilters(false)}>
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-card p-5 animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold">Filters</h3>
              <button onClick={() => setShowFilters(false)}><X className="h-5 w-5" /></button>
            </div>
            <Filters />
          </div>
        </div>
      )}

      <Footer />
      <LeadFormModal open={openModal} onOpenChange={setOpenModal} />
    </div>
  );
};

export default Search;
