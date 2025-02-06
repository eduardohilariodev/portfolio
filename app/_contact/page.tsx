"use client";

import Button from "@/components/Button";

export interface ContactLink {
  href: string;
  icon: string;
  label: string;
}

interface ContactProps {
  links: ContactLink[];
}

export default function Contact({ links }: ContactProps) {
  return (
    <div className="mx-auto flex max-w-xl justify-between gap-4">
      {links.map((link) => (
        <Button key={link.href} href={link.href} icon={link.icon}>
          {link.label}
        </Button>
      ))}
    </div>
  );
}
