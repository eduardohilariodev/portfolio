import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

import localFont from "next/font/local";

const garamond = localFont({
  variable: "--font-garamond",
  src: [
    {
      path: "./fonts/Garamond/ITC Garamond Std Light Narrow.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Garamond/ITC Garamond Std Book Narrow.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Garamond/ITC Garamond Std Book.otf",
      weight: "600",
      style: "normal",
    },
  ],
});
const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Hilario - Software Engineer",
  description: "Personal portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.className} ${garamond.variable}`}
    >
      <body
        className={`min-h-screen bg-neutral-200 font-sans text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-white`}
      >
        <ThemeProvider>
          <Header />
          <main className="mx-auto mt-16 max-w-5xl px-8 py-8 md:max-w-3xl">
            <div
              className={cn(
                "fixed inset-0 z-5 scale-x-200 scale-y-120 bg-neutral-900/95 backdrop-blur-xs",
              )}
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 30%, black 50%)",
              }}
            />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
