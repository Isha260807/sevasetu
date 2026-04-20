import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { socialPosts } from "@/lib/mock-data";
import { Heart, MessageCircle, Send, Bookmark, BadgeCheck, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const SocialFeed = () => {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      <div className="container-x grid gap-8 py-8 lg:grid-cols-[1fr_280px]">
        <div className="mx-auto w-full max-w-lg space-y-6">
          {socialPosts.map(p => (
            <article key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img src={p.vendor.image} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20" />
                  <div>
                    <p className="flex items-center gap-1 text-sm font-semibold">{p.vendor.name} {p.vendor.verified && <BadgeCheck className="h-3.5 w-3.5 fill-primary text-primary-foreground" />}</p>
                    <p className="text-xs text-muted-foreground">{p.vendor.area} · {p.time}</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal /></button>
              </header>

              <img src={p.image} alt="" loading="lazy" className="aspect-square w-full object-cover" />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setLiked({ ...liked, [p.id]: !liked[p.id] })} className="transition-transform hover:scale-110">
                      <Heart className={`h-6 w-6 ${liked[p.id] ? "fill-accent text-accent" : ""}`} />
                    </button>
                    <button className="hover:scale-110 transition-transform"><MessageCircle className="h-6 w-6" /></button>
                    <button className="hover:scale-110 transition-transform"><Send className="h-6 w-6" /></button>
                  </div>
                  <button onClick={() => setSaved({ ...saved, [p.id]: !saved[p.id] })}>
                    <Bookmark className={`h-6 w-6 ${saved[p.id] ? "fill-primary text-primary" : ""}`} />
                  </button>
                </div>
                <p className="mt-3 text-sm font-semibold">{(p.likes + (liked[p.id] ? 1 : 0)).toLocaleString()} likes</p>
                <p className="mt-1 text-sm"><span className="font-semibold">{p.vendor.name}</span> {p.caption}</p>
                <p className="mt-1 text-xs text-muted-foreground">View all {p.comments} comments</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Trending tags</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["#deepclean", "#bridalglow", "#ACservice", "#painting", "#petsafe", "#monsoonready"].map(t => (
                  <span key={t} className="chip cursor-pointer hover:bg-primary hover:text-primary-foreground">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Suggested vendors</h3>
              <div className="mt-3 space-y-3">
                {socialPosts.slice(0, 4).map(p => (
                  <div key={p.id} className="flex items-center gap-3">
                    <img src={p.vendor.image} className="h-9 w-9 rounded-full object-cover" alt="" />
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold">{p.vendor.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{p.vendor.category}</p>
                    </div>
                    <button className="text-xs font-semibold text-primary hover:underline">Follow</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default SocialFeed;
