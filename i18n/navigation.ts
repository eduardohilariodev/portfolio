import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "@/lib/constants";

// Define routing configuration
export const routing = defineRouting({
  locales,
  defaultLocale,
  // Use "as-needed" to avoid unnecessary locale prefixes
  localePrefix: "as-needed",
});

// Create navigation utilities with the routing config
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Export additional hooks from next-intl
export { useTranslations, useLocale } from "next-intl";
