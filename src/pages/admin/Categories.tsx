import { AdminShell } from "./AdminShell";
import { categories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";

const CategoriesAdmin = () => (
  <AdminShell title="Categories">
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div><h3 className="font-display text-base font-bold">{categories.length} categories</h3><p className="text-xs text-muted-foreground">Drag to reorder. Click to edit subcategories.</p></div>
        <Button className="gap-1"><Plus className="h-4 w-4" /> Add category</Button>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(c => (
          <div key={c.id} className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-all hover:border-primary hover:shadow-md">
            <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-white`}><c.icon className="h-6 w-6" /></div>
            <div className="flex-1 min-w-0"><p className="font-semibold">{c.name}</p><p className="text-xs text-muted-foreground">{c.count} vendors</p></div>
            <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted"><Edit className="h-4 w-4" /></button>
              <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-destructive/10 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AdminShell>
);

export default CategoriesAdmin;
