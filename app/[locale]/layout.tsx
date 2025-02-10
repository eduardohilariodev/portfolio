import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import Script from "next/script";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { cn } from "@/lib/utils/cn";

import type { Locale } from "@/lib/constants";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const garamond = localFont({
  variable: "--font-garamond",
  src: [
    {
      path: "../../public/fonts/Garamond/ITC Garamond Std Light Narrow.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Garamond/ITC Garamond Std Book Narrow.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Garamond/ITC Garamond Std Book.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Garamond/ITC Garamond Std Bold Narrow.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${garamond.variable}`}
      suppressHydrationWarning
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
      <body className="min-h-screen bg-neutral-200 font-sans text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-neutral-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Header />
            <main className="mx-auto max-w-5xl px-6 md:mt-16 md:max-w-3xl md:px-8 md:pt-8">
              {children}
              <div
                className={cn(
                  "pointer-events-none fixed inset-0 z-5 bg-neutral-200/95 backdrop-blur-xs dark:bg-neutral-900/95",
                )}
                style={{
                  transform: "scale(200%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 30%, black 50%)",
                }}
              />
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>

        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="c7c7f5c4-c0c4-4b3f-9c63-dd6c7b2c3b3f"
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale: Locale) => ({ locale }));
}
