import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import { ThemeProvider } from "@/lib/providers/ThemeProvider";

import type { Metadata } from "next";

import "./globals.css";

import { PostHogProvider } from "@/lib/providers/PostHogProvider";

import type { ReactNode } from "react";

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
    {
      path: "../public/fonts/Garamond/ITC Garamond Std Bold Narrow.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardohilariodev.com"),
  title: {
    default: "Eduardo Hilário - Software Engineer",
    template: "%s | Eduardo Hilário",
  },
  description:
    "Full-stack software engineer crafting scalable web & mobile solutions. Expert in React, Vue.js, Flutter, and AI development. Specializing in UX/UI design and cloud-native applications.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Vue.js",
    "TypeScript",
    "Python",
    "Laravel",
    "Flutter",
    "UX/UI design",
    "cloud platforms",
    "web development",
    "mobile development",
    "AI development",
    "system optimization",
    "scalable solutions",
  ],
  authors: [{ name: "Eduardo Hilário" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduardohilariodev.com",
    title: "Eduardo Hilário - Software Engineer",
    description:
      "Full-stack software engineer crafting scalable web & mobile solutions. Expert in React, Vue.js, Flutter, and AI development. Specializing in UX/UI design and cloud-native applications.",
    siteName: "Eduardo Hilário Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eduardo Hilário - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Hilário - Software Engineer",
    description:
      "Full-stack software engineer crafting scalable web & mobile solutions. Expert in React, Vue.js, Flutter, and AI development. Specializing in UX/UI design and cloud-native applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${archivo.variable} ${garamond.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eduardo Hilário",
              jobTitle: "Software Engineer",
              url: "https://eduardohilariodev.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Vue.js",
                "TypeScript",
                "Python",
                "Laravel",
                "Flutter",
                "UX/UI Design",
                "Cloud Platforms",
                "Mobile Development",
                "AI Development",
                "System Optimization",
                "Scalable Solutions",
              ],
              description:
                "Full-stack software engineer specializing in web development, mobile applications, and cloud solutions. Expert in React, Vue.js, Flutter, and AI development.",
              alumniOf: {
                "@type": "Organization",
                name: "Your University",
              },
              workLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "BR",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`min-h-screen bg-neutral-200 font-sans text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-neutral-200`}
      >
        <PostHogProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>{children}</ThemeProvider>
          </NextIntlClientProvider>
          <Script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id="c7c7f5c4-c0c4-4b3f-9c63-dd6c7b2c3b3f"
          />
        </PostHogProvider>
      </body>
    </html>
  );
}
