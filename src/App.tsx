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
import Navigation from "./components/layout/Navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./lib/utils";
import { ScrollProvider } from "@/contexts/ScrollContext";
import TeamSection from "./components/pages/TeamSection";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="bg-background text-foreground min-h-screen">
            <Navigation />
            <Routes>
              <Route
                path="/"
                element={
                  <TracingBeam>
                    <Index />
                  </TracingBeam>
                }
              />
              <Route path="/team" element={<TeamSection />} />
         
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
