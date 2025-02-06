"use client";

import Button from "@/components/Button";
import { getContactLinks } from "@/lib/constants";

export default function Contact() {
  const contactLinks = getContactLinks();
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
