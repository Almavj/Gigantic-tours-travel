import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookingPage from "./pages/Booking";
import DestinationsPage from "./pages/Destinations";
import DestinationDetailPage from "./pages/DestinationDetail";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <a href="/" className="text-blue-600 hover:underline text-lg">Return to Home</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/destinations" component={DestinationsPage} />
      <Route path="/destinations/:slug" component={DestinationDetailPage} />
      <Route component={NotFound} />
    </Switch>
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
