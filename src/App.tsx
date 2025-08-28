import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";
import "./lib/utils";

const queryClient = new QueryClient();

// In your app/page.tsx
import Navigation from '@/components/Navigation';
import TeamSection from '@/components/TeamSection';


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <TracingBeam>
        <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </TracingBeam>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
