import createNextIntlPlugin from "next-intl/plugin";

import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Eduardo_Hilario_Software_Engineer_Resume.pdf",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
