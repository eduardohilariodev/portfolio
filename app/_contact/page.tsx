"use client";

import Button from "@/components/Button";
import { getContactLinks } from "@/lib/constants";

export default function Contact() {
  const contactLinks = getContactLinks();
  return (
    <div className="grid grid-flow-col">
      <p className="flex items-center gap-2 font-serif text-2xl">
        You can contact me here<span className="text-5xl">☞</span>
      </p>
      <div className="mx-auto flex max-w-xl justify-between gap-4">
        {contactLinks.map((link) => (
          <Button key={link.href} href={link.href} icon={link.icon}>
            {link.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
