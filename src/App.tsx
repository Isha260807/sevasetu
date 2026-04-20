import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import VendorProfile from "./pages/VendorProfile";
import MyRequests from "./pages/MyRequests";
import SocialFeed from "./pages/SocialFeed";
import VendorDashboard from "./pages/vendor/Dashboard";
import LeadInbox from "./pages/vendor/LeadInbox";
import LeadDetail from "./pages/vendor/LeadDetail";
import VendorProfileEditor from "./pages/vendor/ProfileEditor";
import Promotions from "./pages/vendor/Promotions";
import Billing from "./pages/vendor/Billing";
import Team from "./pages/vendor/Team";
import VendorReports from "./pages/vendor/Reports";
import AdminDashboard from "./pages/admin/Dashboard";
import LeadsAdmin from "./pages/admin/Leads";
import VendorsAdmin from "./pages/admin/Vendors";
import CategoriesAdmin from "./pages/admin/Categories";
import Distribution from "./pages/admin/Distribution";
import Payments from "./pages/admin/Payments";
import ReportsAdmin from "./pages/admin/ReportsAdmin";
import Notifications from "./pages/admin/Notifications";
import SettingsAdmin from "./pages/admin/Settings";
import { AgentDashboard, AgentLeads, AgentSupport } from "./pages/agent/AgentPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/vendor-profile/:id" element={<VendorProfile />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/feed" element={<SocialFeed />} />

          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/vendor/leads" element={<LeadInbox />} />
          <Route path="/vendor/leads/:id" element={<LeadDetail />} />
          <Route path="/vendor/profile" element={<VendorProfileEditor />} />
          <Route path="/vendor/promotions" element={<Promotions />} />
          <Route path="/vendor/billing" element={<Billing />} />
          <Route path="/vendor/team" element={<Team />} />
          <Route path="/vendor/reports" element={<VendorReports />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/leads" element={<LeadsAdmin />} />
          <Route path="/admin/vendors" element={<VendorsAdmin />} />
          <Route path="/admin/categories" element={<CategoriesAdmin />} />
          <Route path="/admin/distribution" element={<Distribution />} />
          <Route path="/admin/payments" element={<Payments />} />
          <Route path="/admin/reports" element={<ReportsAdmin />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          <Route path="/admin/settings" element={<SettingsAdmin />} />

          <Route path="/agent" element={<AgentDashboard />} />
          <Route path="/agent/leads" element={<AgentLeads />} />
          <Route path="/agent/support" element={<AgentSupport />} />

          <Route path="/legacy" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
