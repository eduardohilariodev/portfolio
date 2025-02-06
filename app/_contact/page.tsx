"use client";

import Button from "@/components/Button";

export interface ContactLink {
  href: string;
  icon: string;
  label: string;
}

const contactLinks: ContactLink[] = [
  {
    href: "mailto:eduardohilariodev@pm.me",
    label: "Email",
    icon: "hn hn-envelope",
  },
  {
    href: "https://www.linkedin.com/in/eduardohilariodev",
    label: "LinkedIn",
    icon: "hn hn-linkedin",
  },
  {
    href: "https://www.github.com/eduardohilariodev",
    label: "GitHub",
    icon: "hn hn-github",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto flex max-w-xl justify-between gap-4">
      {contactLinks.map((link) => (
        <Button key={link.href} href={link.href} icon={link.icon}>
          {link.label}
        </Button>
      ))}
    </div>
  );
}
