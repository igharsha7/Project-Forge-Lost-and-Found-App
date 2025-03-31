import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { SparklesCore } from "@/components/ui/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finder",
  description: "Find your Lost Devices and More!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ClerkProvider
          appearance={{
            baseTheme: neobrutalism,
          }}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            {/* Full-page Sparkles effect */}
            <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
              <SparklesCore className="w-full h-full" />
            </div>

            <Header />
            <main className="min-h-screen relative">{children}</main>

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made  For Project Forge</p>
              </div>
            </footer>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
