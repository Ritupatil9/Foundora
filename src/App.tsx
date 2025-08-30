import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/common/tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import NotFound from "./components/pages/NotFound";
import AgentsPage from "./components/pages/AgentsPage"; // ✅ your page
import "./lib/utils";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TracingBeam>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/AgentsPage" element={<AgentsPage />} /> {/* ✅ added */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TracingBeam>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
