{ /*

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
*/}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
{/*
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
*/}

import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Audience } from './components/Audience'
import { CalculatorQuiz } from './components/CalculatorQuiz'
import { Catalog } from './components/Catalog'
import { DeliveryPayment } from './components/DeliveryPayment'
import { Steps } from './components/Steps'
import { ClientsCarousel } from './components/ClientsCarousel'
import { ReviewsFlip } from './components/ReviewsFlip'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-stone-100 text-gray-900">
          <Header />
          <main className="flex flex-col">
            <section id="hero"><Hero /></section>
            <section id="benefits"><Benefits /></section>
            <section id="audience"><Audience /></section>
            <section id="calculator" className="scroll-mt-24"><CalculatorQuiz /></section>
            <section id="catalog"><Catalog /></section>
            <section id="delivery-payment"><DeliveryPayment /></section>
            <section id="steps"><Steps /></section>
            <section id="clients"><ClientsCarousel /></section>
            <section id="reviews"><ReviewsFlip /></section>
            <section id="faq"><FAQ /></section>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
