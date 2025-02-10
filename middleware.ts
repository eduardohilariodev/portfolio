import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

// Create middleware for handling i18n routing
export default createMiddleware(routing);

// Match only internationalized pathnames
export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - All files in public folder
    "/((?!api|_next|_vercel|.*\\..*|.*\\.json).*)",
  ],
};
