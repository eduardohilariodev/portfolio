"use client";

import Button from "@/components/ui/buttons/Button";
import { getContactLinks } from "@/lib/constants";

export default function Contact() {
  const contactLinks = getContactLinks();
  return (
    <div className="grid md:grid-flow-col">
      <div className="flex max-w-xl justify-center md:mx-auto md:justify-between md:gap-4">
        {contactLinks.map((link) => (
          <Button key={link.href} href={link.href} icon={link.icon}>
            {link.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
