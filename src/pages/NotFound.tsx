import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Return Home
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
