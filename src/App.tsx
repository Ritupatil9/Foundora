import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/common/tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AgentsPage from "./components/pages/TeamAgent"; 
import CountUpDemo from "./components/pages/PriceAgent"; 
import RotateDemo from "./components/pages/FeatureAgent";
import Index from "./components/layout/Index";
import "./lib/utils";
import { ScrollProvider } from "@/contexts/ScrollContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Keep only one toaster unless you need both */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="bg-background text-foreground min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <TracingBeam>
                  <Index />
                </TracingBeam>
              }
            />
            <Route path="/AgentsPage" element={<AgentsPage />} />
            <Route path="/PriceAgent" element={<CountUpDemo />} />
            <Route path="/FeatureAgent" element={<RotateDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
