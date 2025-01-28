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
    // Light variants
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Light.otf",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Light Italic.otf",
    //   weight: "300",
    //   style: "italic",
    // },
    {
      path: "./fonts/Garamond/ITC Garamond Std Light Narrow.otf",
      weight: "300",
      style: "normal",
    },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Light Narrow Italic.otf",
    //   weight: "300",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Light Condensed.otf",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Light Condensed Italic.otf",
    //   weight: "300",
    //   style: "italic",
    // },
    // Regular variants
    {
      path: "./fonts/Garamond/ITC Garamond Std Book.otf",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Italic.otf",
    //   weight: "500",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Narrow.otf",
    //   weight: "500",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Narrow Italic.otf",
    //   weight: "500",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Condensed.otf",
    //   weight: "500",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Condensed Italic.otf",
    //   weight: "500",
    //   style: "italic",
    // },
    // // Book variants
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Book.otf",
    //   weight: "450",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Book Italic.otf",
    //   weight: "450",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Book Narrow.otf",
    //   weight: "450",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Book Narrow Italic.otf",
    //   weight: "450",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Book Condensed.otf",
    //   weight: "450",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Book Condensed Italic.otf",
    //   weight: "450",
    //   style: "italic",
    // },
    // Bold variants
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Bold Italic.otf",
    //   weight: "700",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Bold Narrow.otf",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Bold Narrow Italic.otf",
    //   weight: "700",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Bold Condensed.otf",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Bold Condensed Italic.otf",
    //   weight: "700",
    //   style: "italic",
    // },
    // // Ultra variants
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Ultra.otf",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Ultra Italic.otf",
    //   weight: "900",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Ultra Narrow.otf",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Ultra Narrow Italic.otf",
    //   weight: "900",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Ultra Condensed.otf",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/Garamond/ITC Garamond Std Ultra Condensed Italic.otf",
    //   weight: "900",
    //   style: "italic",
    // },
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
    >
      <body
        className={`${helvetica.variable} ${garamond.variable} font-sans bg-white dark:bg-[#0a0b0f] text-gray-900 dark:text-gray-200 min-h-screen transition-colors`}
      >
        <ThemeProvider>
          <Header />
          <main className="max-w-6xl mx-auto px-4 py-8 mt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
