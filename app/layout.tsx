import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

import localFont from "next/font/local";

const helvetica = localFont({
  variable: "--font-helvetica",
  src: [
    {
      path: "./fonts/Helvetica/Helvetica-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica/Helvetica.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica/Helvetica-Oblique.ttf",
      weight: "500",
      style: "oblique",
    },
    {
      path: "./fonts/Helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "oblique",
    },
  ],
});
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
      className={`${helvetica.variable} ${garamond.variable}`}
    >
      <body
        className={`min-h-screen bg-neutral-200 font-sans text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-200`}
      >
        <ThemeProvider>
          <Header />
          <main className="mx-auto mt-16 max-w-5xl px-8 py-8 md:max-w-3xl">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
