import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LeadFormModal } from "@/components/site/LeadFormModal";
import { vendors } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, MapPin, Phone, MessageSquare, BadgeCheck, Award, Clock, Calendar, ShieldCheck, ThumbsUp, ChevronRight } from "lucide-react";

const VendorProfile = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const v = vendors.find(x => x.id === id) ?? vendors[0];

  const services = [
    { name: "Standard cleaning (1BHK)", duration: "2 hr", price: "₹599" },
    { name: "Deep cleaning (2BHK)", duration: "4 hr", price: "₹1,499" },
    { name: "Sofa shampoo (5-seater)", duration: "1.5 hr", price: "₹899" },
    { name: "Bathroom deep clean", duration: "1 hr", price: "₹399" },
  ];
  const reviews = [
    { name: "Anita R.", rating: 5, time: "2 days ago", text: "Excellent service. Team was on time, professional and very thorough. Will book again!", helpful: 12 },
    { name: "Rohit M.", rating: 5, time: "1 week ago", text: "They cleaned everything I asked and even moved furniture to clean underneath. Worth every rupee.", helpful: 8 },
    { name: "Sneha K.", rating: 4, time: "2 weeks ago", text: "Good job overall. Slightly delayed but they communicated proactively.", helpful: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Cover */}
      <div className="relative h-48 overflow-hidden sm:h-72">
        <img src={v.cover} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container-x -mt-20 pb-16">
        <nav className="mb-3 flex items-center gap-1 text-xs text-primary-foreground/90">
          <Link to="/" className="hover:underline">Home</Link><ChevronRight className="h-3 w-3" />
          <Link to={`/category/${v.categoryId}`} className="hover:underline">{v.category}</Link><ChevronRight className="h-3 w-3" />
          <span>{v.name}</span>
        </nav>

        {/* Header card */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <img src={v.image} alt={v.name} className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-4 ring-card sm:h-32 sm:w-32" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-2xl font-bold sm:text-3xl">{v.name}</h1>
                {v.verified && <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary"><BadgeCheck className="h-3.5 w-3.5" /> Verified</span>}
                {v.promoted && <span className="rounded-full bg-gradient-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Promoted</span>}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{v.category}</p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
                <span className="inline-flex items-center gap-1 font-semibold"><Star className="h-4 w-4 fill-warning text-warning" /> {v.rating} <span className="font-normal text-muted-foreground">({v.reviews.toLocaleString()} reviews)</span></span>
                <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="h-4 w-4" /> {v.area}, {v.city} · {v.distance}</span>
                <span className="inline-flex items-center gap-1 text-success"><Clock className="h-4 w-4" /> Open now</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {v.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
            <div className="flex w-full gap-2 sm:w-auto sm:flex-col">
              <Button onClick={() => setOpen(true)} size="lg" className="flex-1 bg-gradient-accent text-accent-foreground hover:opacity-90 sm:flex-none">Get Quote</Button>
              <Button variant="outline" size="lg" className="gap-1"><Phone className="h-4 w-4" /> Call</Button>
              <Button variant="outline" size="lg" className="gap-1"><MessageSquare className="h-4 w-4" /> Chat</Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 sm:grid-cols-4">
            {[
              { icon: Award, label: "Experience", value: `${v.experience} years` },
              { icon: ShieldCheck, label: "Jobs done", value: v.jobs.toLocaleString() },
              { icon: Calendar, label: "Availability", value: "Today, 6-8 PM" },
              { icon: BadgeCheck, label: "ID verified", value: "Yes" },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><s.icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="mt-8">
          <TabsList className="bg-secondary">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services & Pricing</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({v.reviews})</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-5 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold">About {v.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description} Trained on hygiene & safety SOPs, the team carries professional-grade equipment and certified supplies. We serve {v.city} with same-day availability and a 100% satisfaction guarantee.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["100% Background verified", "Insurance covered", "Trained & uniformed"].map(p => (
                <div key={p} className="flex items-center gap-2 rounded-xl bg-secondary/50 p-3 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-success" /> {p}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-5 rounded-2xl border border-border bg-card p-2">
            {services.map(s => (
              <div key={s.name} className="flex items-center justify-between gap-3 border-b border-border p-4 last:border-b-0">
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-xs text-muted-foreground">Duration: {s.duration}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-bold text-primary">{s.price}</span>
                  <Button size="sm" onClick={() => setOpen(true)}>Book</Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="reviews" className="mt-5 space-y-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center">
                  <p className="font-display text-5xl font-bold text-primary">{v.rating}</p>
                  <div className="mt-1 flex justify-center text-warning">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{v.reviews} reviews</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5, 4, 3, 2, 1].map(n => (
                    <div key={n} className="flex items-center gap-2 text-xs">
                      <span className="w-3">{n}</span><Star className="h-3 w-3 fill-warning text-warning" />
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-gradient-primary" style={{ width: `${n === 5 ? 78 : n === 4 ? 15 : n === 3 ? 4 : n === 2 ? 2 : 1}%` }} /></div>
                      <span className="w-8 text-right text-muted-foreground">{n === 5 ? "78%" : n === 4 ? "15%" : "rest"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">{r.name[0]}</div>
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.time}</p>
                    </div>
                  </div>
                  <div className="flex text-warning">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{r.text}</p>
                <button className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"><ThumbsUp className="h-3.5 w-3.5" /> Helpful ({r.helpful})</button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="gallery" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {vendors.slice(0, 6).map((g, i) => <img key={i} src={g.cover} alt="" loading="lazy" className="aspect-square w-full rounded-2xl object-cover hover-lift" />)}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <LeadFormModal open={open} onOpenChange={setOpen} vendorName={v.name} />
    </div>
  );
};

export default VendorProfile;
