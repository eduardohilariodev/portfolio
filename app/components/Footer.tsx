"use client";

import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const socialLinks = [
  {
    icon: TbBrandGithub,
    href: "https://github.com/eduardohilariodev",
    label: "GitHub",
  },
  {
    icon: TbBrandLinkedin,
    href: "https://linkedin.com/in/eduardohilariodev",
    label: "LinkedIn",
  },
  {
    icon: TbMail,
    href: "mailto:eduardohilariodev@pm.me",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Eduardo Hilário. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
