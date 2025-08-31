import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/common/tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import NotFound from "./components/pages/NotFound";
import AgentsPage from "./components/pages/TeamAgent"; 
import CountUpDemo from "./components/pages/PriceAgent"; 
import RotateDemo from "./components/pages/FeatureAgent";
import "./lib/utils";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ✅ TracingBeam only on home page */}
          <Route
            path="/"
            element={
              <TracingBeam>
                <Index />
              </TracingBeam>
            }
          />

          {/* ✅ AgentsPage without tracing beam */}
          <Route path="/AgentsPage" element={<AgentsPage />} />
        <Route path="/PriceAgent" element={<CountUpDemo/>} />
        <Route path="/FeatureAgent" element={<RotateDemo/>} />
          {/* ✅ NotFound without tracing beam */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
