import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import CTA from "./pages/CTA";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import CodingProfiles from "./pages/CodingProfiles";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Hero} />
      <Route path={"/about"} component={About} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/skills"} component={Skills} />
      <Route path={"/cta"} component={CTA} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/resume"} component={Resume} />
      <Route path={"/coding-profiles"} component={CodingProfiles} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
        <Router />
      </main>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
