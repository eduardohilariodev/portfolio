"use server";

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "./routing";

import type { Locale } from "@/lib/constants";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  try {
    return {
      locale,
      messages: (await import(`../../messages/${locale}.json`)).default,
      // You can use a different time zone for each locale
      timeZone: "America/Sao_Paulo",
      // Disable locale detection since we have middleware
      now: new Date(),
    };
  } catch {
    notFound();
  }
});
