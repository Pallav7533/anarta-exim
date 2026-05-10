import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";
import { MessageSquareQuote } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

import Home from "@/pages/home";
import Metals from "@/pages/metals";
import Spices from "@/pages/spices";
import Jewellery from "@/pages/jewellery";
import About from "@/pages/about";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function FloatingQuoteButton() {
  const [, setLocation] = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => setLocation('/contact')}
      className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:scale-110 transition-transform z-50 animate-pulse"
      title="Get a Quote"
    >
      <MessageSquareQuote className="w-6 h-6" />
    </button>
  );
}

function Router() {
  return (
    <LanguageProvider>
      <div className="relative flex flex-col min-h-screen font-sans selection:bg-primary/30 overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/products/metals" component={Metals} />
            <Route path="/products/spices" component={Spices} />
            <Route path="/products/jewellery" component={Jewellery} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <FloatingQuoteButton />
      </div>
    </LanguageProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
