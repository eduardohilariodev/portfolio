"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import { getContactLinks, SECTION } from "@/lib/constants";
import useScrollById from "@/lib/hooks/useScrollById";
import { cn } from "@/lib/utils/cn";

import Button from "./Button";
import RichText from "./RichText";

export default function Hero() {
  const { theme } = useTheme();
  const [{ y }] = useWindowScroll();
  const { scrollToSection } = useScrollById();

  const strokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (strokeRef.current) {
      strokeRef.current.style.webkitTextStroke =
        theme === "dark" ? "0.5px white" : "1px black";
    }
  }, [theme]);

  const contactLinks = getContactLinks();

  const t = useTranslations("Hero");

  return (
    <div className="mt-4 mb-10 flex h-[80vh] max-h-[720px] flex-col justify-center transition-all duration-300 md:mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <div>
            <div className="@container relative font-semibold tracking-tight">
              <h1 className="text-4xl leading-8 font-bold tracking-tighter sm:text-6xl sm:leading-12">
                {t("name")} <br /> {t("surname")}
              </h1>
              <div
                className="absolute right-0 -bottom-1 flex flex-col justify-end -space-y-4 text-right text-transparent opacity-20 *:h-14 *:text-[11.9cqw] sm:*:h-24 md:-space-y-8"
                ref={strokeRef}
              >
                <span>Software Engineer</span>
                <span>Designer</span>
              </div>
            </div>
          </div>

          <hr className="border-[1.5px]" />

          <p className="font-serif text-4xl font-light">
            <RichText>{(tags) => t.rich("subtitle", tags)}</RichText>
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-2 place-items-center md:grid-cols-4">
          {contactLinks.map((link) => (
            <Button external key={link.href} href={link.href} icon={link.icon}>
              {link.title}
            </Button>
          ))}
        </div>
        <div
          className="relative transition-opacity"
          onClick={() => scrollToSection(SECTION.ABOUT.id)}
        >
          <div
            className={cn(
              "animate-bounce-hard text-center opacity-100",
              y && y > 0 && "opacity-0",
            )}
          >
            <i className="hn hn-arrow-down size-6 text-3xl" />
          </div>
          <div
            className={cn(
              "animate-bounce-hard absolute inset-0 text-center opacity-10 delay-1000",
              y && y > 0 && "opacity-0",
            )}
          >
            <i className="hn hn-arrow-down size-6 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
