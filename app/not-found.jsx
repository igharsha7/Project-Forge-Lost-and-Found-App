"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      
      {/* ✅ Prevent Hydration Mismatch */}
      <div className="relative flex items-center justify-center h-[20rem] w-full max-w-2xl">
        {isClient && ( // Ensure it only renders on the client
          <TextRevealCard
            text={
              <span className="text-5xl md:text-6xl font-semibold tracking-wide leading-normal">
                Welcome to Finder!
              </span>
            }
            revealText={
              <span className="text-5xl md:text-6xl font-semibold tracking-wide leading-normal text-white">
                Oops! 404 Page Not Found
              </span>
            }
            className="absolute inset-0 flex items-center justify-center text-center w-full h-full"
          />
        )}
      </div>

      {/* Redirect Button */}
      <Link href="/">
        <Button className="mt-6 flex items-center gap-4 animate-bounce">
          <Undo2 className="w-5 h-5" />
          Redirecting to Home Page
        </Button>
      </Link>
    </div>
  );
}
