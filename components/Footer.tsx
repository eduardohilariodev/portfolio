"use client";

import { getContactLinks, getSectionsArray } from "@/lib/constants";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Footer() {
  const sectionLinks = getSectionsArray();
  const contactLinks = getContactLinks();

  return (
    <footer className="mt-32 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto grid max-w-3xl grid-flow-row grid-cols-[4fr_2fr_2fr] gap-x-10 gap-y-16 px-8 py-32">
        <div className="flex flex-col gap-4">
          <Logo width={84} />
          <p className="text-xl font-thin tracking-wide">
            I&apos;m Eduardo, a software engineer and designer from Brazil.
          </p>
        </div>
        <div className="flex flex-col">
          {sectionLinks.map(({ href, title }) => (
            <NavLink
              key={title}
              href={href}
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              aria-label={title}
            >
              {title}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col">
          {contactLinks.map(({ href, title }) => (
            <NavLink
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              aria-label={title}
            >
              {title}
            </NavLink>
          ))}
        </div>

        <p className="col-span-3 place-self-center font-serif text-2xl font-light tracking-tight text-neutral-900 dark:text-neutral-200">
          Built with Next.js by Eduardo Hilário in {new Date().getFullYear()}
          .&nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
