"use client";

import Button from "@/components/Button";
import { getContactLinks } from "@/lib/constants";

export default function Contact() {
  const contactLinks = getContactLinks();
  return (
    <div className="grid md:grid-flow-col">
      <p className="flex items-center gap-2 font-serif text-2xl">
        You can contact me here
        <br className="md:hidden" />
        <span className="rotate-90 text-5xl md:rotate-0">☞</span>
      </p>
      <div className="flex max-w-xl justify-between md:mx-auto md:gap-4">
        {contactLinks.map((link) => (
          <Button key={link.href} href={link.href} icon={link.icon}>
            {link.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
