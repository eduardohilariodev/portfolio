import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const garamond = localFont({
  variable: "--font-garamond",
  src: [
    {
      path: "../public/fonts/Garamond/ITC Garamond Std Light Narrow.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Garamond/ITC Garamond Std Book Narrow.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Garamond/ITC Garamond Std Book.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

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
      className={`${archivo.variable} ${garamond.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
