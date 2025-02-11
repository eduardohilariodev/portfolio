"use client";

import { DateTime } from "luxon";
import { useTranslations } from "next-intl";

import { getContactLinks, getSectionsArray } from "@/lib/constants";

import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";

export default function Footer() {
  const t = useTranslations("Footer");
  const tSections = useTranslations();
  const sectionLinks = getSectionsArray();
  const contactLinks = getContactLinks();

  return (
    <footer className="border-t border-neutral-900 dark:border-neutral-200">
      <div className="mx-auto grid max-w-3xl grid-flow-row grid-cols-[4fr_2fr_2fr] gap-x-10 gap-y-16 px-8 py-32">
        <div className="flex flex-col gap-4">
          <Logo width={84} />
          <p className="text-sm font-thin tracking-wide md:text-xl">
            {t("intro")}
          </p>
        </div>
        <div className="flex flex-col">
          {sectionLinks.map(({ href, title }) => (
            <NavLink
              key={title}
              href={href}
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              aria-label={tSections(title)}
            >
              {tSections(title)}
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

        <p className="col-span-3 place-self-center text-center font-serif text-lg font-light tracking-tight text-neutral-900 md:text-2xl dark:text-neutral-200">
          {t.rich("copyright", {
            year: DateTime.now().get("year").toString(),
            br: () => <br className="md:hidden" />,
          })}
        </p>
      </div>
    </footer>
  );
}
