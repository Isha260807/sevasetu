import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { VendorCard } from "@/components/site/VendorCard";
import { LeadFormModal } from "@/components/site/LeadFormModal";
import { Button } from "@/components/ui/button";
import { categories, featuredVendors, socialPosts } from "@/lib/mock-data";
import { Search, MapPin, Sparkles, ShieldCheck, Clock, Zap, ArrowRight, Heart, MessageCircle, Send } from "lucide-react";
import hero from "@/assets/hero-services.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container-x grid gap-10 py-12 md:py-20 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up">
            <span className="chip bg-accent-soft text-accent"><Sparkles className="h-3 w-3" /> 10,000+ verified pros across India</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Premium home services, <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">on demand</span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              Book trusted, background-verified professionals for cleaning, repairs, beauty & more. Get instant quotes from up to 5 vendors.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-2 shadow-elegant">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary/50 px-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <input className="h-11 flex-1 bg-transparent text-sm outline-none" defaultValue="Bandra West, Mumbai" />
                </div>
                <div className="flex flex-[1.5] items-center gap-2 rounded-xl bg-secondary/50 px-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input className="h-11 flex-1 bg-transparent text-sm outline-none" placeholder="Try ‘deep cleaning’ or ‘AC not cooling’…" />
                </div>
                <Link to="/search">
                  <Button size="lg" className="h-11 w-full bg-gradient-accent text-accent-foreground hover:opacity-90 sm:w-auto">
                    Search <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5 px-1 pt-1">
                <span className="text-xs text-muted-foreground">Popular:</span>
                {["Deep cleaning", "AC service", "Salon at home", "Plumber"].map(t => (
                  <button key={t} className="text-xs font-medium text-primary hover:underline">{t}</button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8">
              {[
                { icon: ShieldCheck, label: "Background verified" },
                { icon: Clock, label: "60-min response" },
                { icon: Zap, label: "Same-day booking" },
              ].map(s => (
                <div key={s.label} className="flex items-start gap-2">
                  <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-xs font-medium leading-tight text-foreground sm:text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
            <img src={hero} alt="Verified home service professional smiling in a bright modern home" width={1600} height={1200} className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-elegant" />
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-card p-4 shadow-elegant sm:block animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-success/10 text-success"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Trusted by</p>
                  <p className="font-display text-lg font-bold text-foreground">2.4M+ families</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-2xl bg-card p-3 shadow-elegant md:block animate-fade-in">
              <p className="text-xs font-medium text-muted-foreground">Avg. rating</p>
              <p className="font-display text-2xl font-bold text-primary">4.8 ★</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Browse by category</h2>
            <p className="mt-1 text-sm text-muted-foreground">Pick a service to see top-rated pros near you.</p>
          </div>
          <Link to="/search" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">View all →</Link>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
          {categories.map(c => (
            <Link key={c.id} to={`/category/${c.id}`} className="group rounded-2xl border border-border bg-card p-4 text-center shadow-sm hover-lift">
              <div className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-md transition-transform group-hover:scale-110`}>
                <c.icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-xs font-semibold text-foreground sm:text-sm">{c.name}</p>
              <p className="text-[10px] text-muted-foreground sm:text-xs">{c.count} pros</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED VENDORS */}
      <section className="bg-gradient-soft py-16">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="chip bg-accent-soft text-accent">⭐ Top picks</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">Featured pros near you</h2>
            </div>
            <Link to="/search" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">See all →</Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVendors.slice(0, 6).map(v => <VendorCard key={v.id} v={v} onQuote={() => setOpen(true)} />)}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="container-x py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground sm:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="chip bg-accent text-accent-foreground">Limited time</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Festive Cleaning Sale — flat 25% off</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/80">Refresh your home for the season. Use code <span className="rounded-md bg-background/20 px-2 py-0.5 font-mono">SHINE25</span> on any cleaning booking above ₹999.</p>
              <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:opacity-90">Book a cleaning →</Button>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[{ k: "Avg savings", v: "₹420" }, { k: "Pros available", v: "1,240" }, { k: "Same-day slots", v: "320+" }, { k: "Repeat customers", v: "78%" }].map(s => (
                <div key={s.k} className="rounded-xl bg-background/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.k}</p>
                  <p className="font-display text-2xl font-bold">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PREVIEW */}
      <section className="container-x pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Latest from pros</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tips, transformations & special offers.</p>
          </div>
          <Link to="/feed" className="text-sm font-semibold text-primary hover:underline">Open feed →</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialPosts.slice(0, 3).map(p => (
            <article key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover-lift">
              <img src={p.image} alt="" loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <img src={p.vendor.image} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold leading-none">{p.vendor.name}</p>
                    <p className="text-xs text-muted-foreground">{p.time} ago</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-foreground">{p.caption}</p>
                <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4" /> {p.likes}</span>
                  <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" /> {p.comments}</span>
                  <span className="inline-flex items-center gap-1"><Send className="h-4 w-4" /> Share</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <LeadFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Home;
