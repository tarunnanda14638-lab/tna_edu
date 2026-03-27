import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Results from "@/pages/Results";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Layout
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

// Ensure viewport scrolls to top on route change
const RouteWrapper = ({ component: Component }: { component: React.ComponentType }) => {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
  return <Component />;
};

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={() => <RouteWrapper component={Home} />} />
        <Route path="/about" component={() => <RouteWrapper component={About} />} />
        <Route path="/courses" component={() => <RouteWrapper component={Courses} />} />
        <Route path="/results" component={() => <RouteWrapper component={Results} />} />
        <Route path="/contact" component={() => <RouteWrapper component={Contact} />} />
        <Route component={() => <RouteWrapper component={NotFound} />} />
      </Switch>
    </Layout>
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
