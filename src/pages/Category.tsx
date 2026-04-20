import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { VendorCard } from "@/components/site/VendorCard";
import { LeadFormModal } from "@/components/site/LeadFormModal";
import { categories, vendors } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const subcategories: Record<string, string[]> = {
  cleaning: ["Deep cleaning", "Bathroom cleaning", "Kitchen cleaning", "Sofa shampoo", "Carpet cleaning", "Move-in/out", "Office cleaning"],
  plumbing: ["Leak fix", "Tap & sink", "Toilet install", "Water tank", "Drainage", "Pipe install"],
  electrical: ["Wiring", "MCB & switches", "Fan install", "Light fitting", "Inverter", "Appliance repair"],
  "ac-repair": ["AC service", "Gas refill", "Installation", "Uninstall", "Repair", "AMC plans"],
};

const Category = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const cat = categories.find(c => c.id === id) ?? categories[0];
  const subs = subcategories[cat.id] ?? ["General services", "Premium", "Express", "Subscription"];
  const list = vendors.filter(v => v.categoryId === cat.id);
  const display = list.length ? list : vendors.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border bg-gradient-soft">
        <div className="container-x py-6">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/search" className="hover:text-primary">Categories</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{cat.name}</span>
          </nav>
          <div className="mt-4 flex items-center gap-4">
            <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-md`}>
              <cat.icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold sm:text-3xl">{cat.name}</h1>
              <p className="text-sm text-muted-foreground">{cat.count} verified pros · avg rating 4.7 ★</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="container-x py-8">
        <h2 className="font-display text-lg font-bold">Browse subcategories</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {subs.map(s => (
            <button key={s} className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-left text-sm font-medium shadow-sm transition-all hover:border-primary hover:shadow-md">
              {s} <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </button>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-xl font-bold sm:text-2xl">Top {cat.name.toLowerCase()} pros</h2>
          <select className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm">
            <option>Sort: Recommended</option>
            <option>Highest rated</option>
            <option>Nearest</option>
            <option>Lowest price</option>
          </select>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {display.map(v => <VendorCard key={v.id} v={v} onQuote={() => setOpen(true)} />)}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">Load more pros</Button>
        </div>
      </section>

      <Footer />
      <LeadFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Category;
