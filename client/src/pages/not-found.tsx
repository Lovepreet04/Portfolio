import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="w-full max-w-md mx-4 text-center">
          <div className="pt-6">
            <div className="flex mb-4 gap-2 justify-center items-center">
              <AlertCircle className="h-8 w-8 text-red-500 drop-shadow-lg" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] bg-clip-text text-transparent drop-shadow-lg">404 Page Not Found</h1>
            </div>
            <p className="mt-4 text-base text-gray-200 drop-shadow-lg">
              Did you forget to add the page to the router?
            </p>
            <a
              href="/"
              className="mt-8 inline-block px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] text-white shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
