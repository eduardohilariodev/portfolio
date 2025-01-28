"use client";

interface ContactLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface ContactProps {
  links: ContactLink[];
}

export default function Contact({ links }: ContactProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg">
        Feel free to reach out to me through any of these channels:
      </p>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-orange-600 hover:underline dark:text-orange-400"
          >
            <span className="font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
