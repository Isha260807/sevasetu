import { Sparkles, Wrench, Zap, Wind, Paintbrush, Hammer, ShowerHead, Sofa, Bug, Scissors, Car, Leaf } from "lucide-react";

export const categories = [
  { id: "cleaning", name: "Home Cleaning", icon: Sparkles, color: "from-sky-500 to-cyan-500", count: 1240 },
  { id: "plumbing", name: "Plumbing", icon: Wrench, color: "from-blue-500 to-indigo-500", count: 860 },
  { id: "electrical", name: "Electrical", icon: Zap, color: "from-amber-500 to-orange-500", count: 712 },
  { id: "ac-repair", name: "AC Repair", icon: Wind, color: "from-teal-500 to-emerald-500", count: 540 },
  { id: "painting", name: "Painting", icon: Paintbrush, color: "from-rose-500 to-pink-500", count: 420 },
  { id: "carpentry", name: "Carpentry", icon: Hammer, color: "from-orange-600 to-red-500", count: 388 },
  { id: "bathroom", name: "Bath Spa", icon: ShowerHead, color: "from-indigo-500 to-purple-500", count: 296 },
  { id: "furniture", name: "Furniture", icon: Sofa, color: "from-emerald-600 to-green-500", count: 274 },
  { id: "pest", name: "Pest Control", icon: Bug, color: "from-lime-600 to-green-600", count: 218 },
  { id: "salon", name: "Salon at Home", icon: Scissors, color: "from-fuchsia-500 to-pink-500", count: 612 },
  { id: "car-wash", name: "Car Wash", icon: Car, color: "from-slate-600 to-zinc-500", count: 184 },
  { id: "gardening", name: "Gardening", icon: Leaf, color: "from-green-600 to-emerald-600", count: 142 },
];

export type Vendor = {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  rating: number;
  reviews: number;
  price: string;
  distance: string;
  area: string;
  city: string;
  verified: boolean;
  promoted: boolean;
  openNow: boolean;
  experience: number;
  jobs: number;
  image: string;
  cover: string;
  tags: string[];
  description: string;
};

const img = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=600&q=70`;

export const vendors: Vendor[] = [
  { id: "v1", name: "SparkleHome Pros", category: "Deep Home Cleaning", categoryId: "cleaning", rating: 4.9, reviews: 2143, price: "₹599", distance: "1.2 km", area: "Bandra West", city: "Mumbai", verified: true, promoted: true, openNow: true, experience: 7, jobs: 12400, image: img("photo-1581578731548-c64695cc6952"), cover: img("photo-1556909114-f6e7ad7d3136"), tags: ["Eco-friendly", "Same day", "Insured"], description: "Premium deep-cleaning crew with eco-certified supplies and trained professionals." },
  { id: "v2", name: "QuickFix Plumbing", category: "Plumbing & Sanitary", categoryId: "plumbing", rating: 4.8, reviews: 1820, price: "₹299", distance: "0.8 km", area: "Koramangala", city: "Bengaluru", verified: true, promoted: false, openNow: true, experience: 12, jobs: 9800, image: img("photo-1607472586893-edb57bdc0e39"), cover: img("photo-1585128792020-803d29415281"), tags: ["24/7", "Warranty", "Fixed price"], description: "Master plumbers solving leaks, blockages and installs with upfront pricing." },
  { id: "v3", name: "VoltMaster Electricals", category: "Electrical Repairs", categoryId: "electrical", rating: 4.7, reviews: 1342, price: "₹349", distance: "2.4 km", area: "Sector 18", city: "Noida", verified: true, promoted: true, openNow: false, experience: 9, jobs: 7600, image: img("photo-1621905251189-08b45d6a269e"), cover: img("photo-1558618666-fcd25c85cd64"), tags: ["Licensed", "Smart home", "Free quote"], description: "Certified electricians for wiring, fixtures, and smart-home installations." },
  { id: "v4", name: "CoolBreeze AC Care", category: "AC Service & Repair", categoryId: "ac-repair", rating: 4.9, reviews: 980, price: "₹449", distance: "3.1 km", area: "Banjara Hills", city: "Hyderabad", verified: true, promoted: false, openNow: true, experience: 6, jobs: 5400, image: img("photo-1581094794329-c8112a89af12"), cover: img("photo-1631545806609-d20bbed64d1d"), tags: ["All brands", "Gas refill", "AMC plans"], description: "Authorized service partner for all major AC brands with AMC plans." },
  { id: "v5", name: "ColorCraft Painters", category: "Home Painting", categoryId: "painting", rating: 4.8, reviews: 712, price: "₹18/sqft", distance: "4.5 km", area: "Salt Lake", city: "Kolkata", verified: true, promoted: false, openNow: true, experience: 11, jobs: 3200, image: img("photo-1562259949-e8e7689d7828"), cover: img("photo-1589939705384-5185137a7f0f"), tags: ["Asian Paints", "5yr warranty", "Free design"], description: "Premium painting with texture finishes, design consultation included." },
  { id: "v6", name: "Glow Salon at Home", category: "Salon for Women", categoryId: "salon", rating: 4.9, reviews: 3210, price: "₹699", distance: "1.9 km", area: "Indiranagar", city: "Bengaluru", verified: true, promoted: true, openNow: true, experience: 5, jobs: 11200, image: img("photo-1487412947147-5cebf100ffc2"), cover: img("photo-1560066984-138dadb4c035"), tags: ["Hygienic", "Trained", "Single-use"], description: "Professional salon experience at home with single-use kits and trained beauticians." },
  { id: "v7", name: "WoodWorks Carpenters", category: "Carpentry & Furniture", categoryId: "carpentry", rating: 4.6, reviews: 540, price: "₹399", distance: "5.2 km", area: "Andheri East", city: "Mumbai", verified: true, promoted: false, openNow: false, experience: 14, jobs: 2800, image: img("photo-1504148455328-c376907d081c"), cover: img("photo-1556909190-eccf4a8bf97a"), tags: ["Custom build", "Modular", "Repairs"], description: "Custom carpentry, modular installations and on-site repairs by master craftsmen." },
  { id: "v8", name: "GreenGuard Pest Control", category: "Pest Control", categoryId: "pest", rating: 4.7, reviews: 612, price: "₹899", distance: "2.7 km", area: "Vasant Kunj", city: "Delhi", verified: true, promoted: false, openNow: true, experience: 8, jobs: 4100, image: img("photo-1632935190508-bedfa9c918e7"), cover: img("photo-1604014237744-bcdb31f0f2a9"), tags: ["Pet-safe", "Govt certified", "Annual contract"], description: "Govt-licensed pest control with herbal & chemical options, pet-safe formulas." },
];

export const featuredVendors = vendors.filter(v => v.promoted).concat(vendors.slice(0, 4)).slice(0, 6);

export type Lead = {
  id: string;
  customer: string;
  service: string;
  category: string;
  location: string;
  budget: string;
  status: "new" | "contacted" | "quoted" | "won" | "lost";
  time: string;
  urgency: "high" | "medium" | "low";
  description: string;
  phone: string;
};

export const leads: Lead[] = [
  { id: "L-1042", customer: "Priya Sharma", service: "Deep home cleaning - 3BHK", category: "Cleaning", location: "Bandra West, Mumbai", budget: "₹2,000-3,000", status: "new", time: "2 min ago", urgency: "high", description: "Need deep cleaning before Diwali. Sofa shampooing also needed.", phone: "+91 98XXX 12345" },
  { id: "L-1041", customer: "Rahul Mehta", service: "AC not cooling - 1.5 ton split", category: "AC Repair", location: "Koramangala, Bengaluru", budget: "₹500-1,500", status: "contacted", time: "18 min ago", urgency: "high", description: "AC stopped cooling since yesterday. Available evenings.", phone: "+91 99XXX 23456" },
  { id: "L-1040", customer: "Anita Desai", service: "Bathroom plumbing leak", category: "Plumbing", location: "Salt Lake, Kolkata", budget: "₹1,000-2,000", status: "quoted", time: "1 hr ago", urgency: "medium", description: "Continuous leak under wash basin.", phone: "+91 97XXX 34567" },
  { id: "L-1039", customer: "Vikram Singh", service: "Full home painting - 2BHK", category: "Painting", location: "Sector 18, Noida", budget: "₹35,000-50,000", status: "won", time: "3 hr ago", urgency: "low", description: "Asian paints royale, 2BHK approx 850 sqft carpet.", phone: "+91 96XXX 45678" },
  { id: "L-1038", customer: "Sneha Iyer", service: "Salon at home - Bridal", category: "Salon", location: "Indiranagar, Bengaluru", budget: "₹5,000-8,000", status: "new", time: "5 hr ago", urgency: "high", description: "Bridal makeup + hair for sister's wedding next Sunday.", phone: "+91 95XXX 56789" },
  { id: "L-1037", customer: "Arjun Kapoor", service: "Modular wardrobe install", category: "Carpentry", location: "Andheri East, Mumbai", budget: "₹15,000+", status: "lost", time: "1 day ago", urgency: "low", description: "Need install for IKEA wardrobe.", phone: "+91 94XXX 67890" },
  { id: "L-1036", customer: "Ritika Joshi", service: "Pest control - Cockroaches", category: "Pest", location: "Vasant Kunj, Delhi", budget: "₹800-1,200", status: "contacted", time: "1 day ago", urgency: "medium", description: "Recurring cockroach issue in kitchen.", phone: "+91 93XXX 78901" },
];

export const socialPosts = [
  { id: "p1", vendor: vendors[0], image: img("photo-1556909114-f6e7ad7d3136"), caption: "Festive deep-clean special — book now & save 20%! ✨", likes: 342, comments: 28, time: "2h" },
  { id: "p2", vendor: vendors[5], image: img("photo-1560066984-138dadb4c035"), caption: "Bridal glow up at home 💄 Swipe for transformation.", likes: 891, comments: 64, time: "5h" },
  { id: "p3", vendor: vendors[3], image: img("photo-1631545806609-d20bbed64d1d"), caption: "Summer is here ☀️ Get your AC serviced before the rush.", likes: 256, comments: 19, time: "8h" },
  { id: "p4", vendor: vendors[4], image: img("photo-1589939705384-5185137a7f0f"), caption: "Texture wall finishes — 3 trending styles for 2025.", likes: 478, comments: 42, time: "1d" },
  { id: "p5", vendor: vendors[1], image: img("photo-1585128792020-803d29415281"), caption: "How to spot a hidden leak before it ruins your wall 🔧", likes: 198, comments: 31, time: "1d" },
  { id: "p6", vendor: vendors[7], image: img("photo-1604014237744-bcdb31f0f2a9"), caption: "Pet-safe pest control — your fur babies stay protected 🐾", likes: 412, comments: 53, time: "2d" },
];

export const myRequests = [
  { id: "L-1042", service: "Deep home cleaning - 3BHK", status: "new" as const, vendors: 4, date: "Today, 2:30 PM" },
  { id: "L-1029", service: "AC service - 2 units", status: "quoted" as const, vendors: 6, date: "Yesterday" },
  { id: "L-1015", service: "Bathroom tile repair", status: "won" as const, vendors: 3, date: "3 days ago" },
];
