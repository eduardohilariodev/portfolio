"use client";

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
        <ContactButton
          key={link.href}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
}

function ContactButton({ href, icon, label }: ContactLink) {
  return (
    <a
      key={href}
      className="flex flex-col items-center justify-center gap-4 border-3 border-black px-14 py-12 text-black dark:border-white dark:text-white"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`${icon} text-6xl`} />
      <span className="font-serif text-2xl font-medium">{label}</span>
    </a>
  );
}
