"use client";

import { getContactLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import Button from "./Button";

export default function Hero() {
  const { theme } = useTheme();
  const [{ y }] = useWindowScroll();

  const strokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (strokeRef.current) {
      strokeRef.current.style.webkitTextStroke =
        theme === "dark" ? "0.5px white" : "1px black";
    }
  }, [theme]);

  const contactLinks = getContactLinks();

  return (
    <div className="mb-10 flex h-[80vh] max-h-[720px] flex-col justify-center transition-all duration-300 md:mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <div>
            <div className="@container relative font-semibold tracking-tight">
              <h1 className="text-4xl leading-8 font-bold tracking-tighter sm:text-6xl sm:leading-12">
                Eduardo <br /> Hilário
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
            I help you <br className="sm:hidden" />
            <strong>solve</strong> and <strong>build</strong>
            <br className="sm:hidden" /> digital stuff.
          </p>
        </div>
        <div className="grid md:grid-flow-col">
          <div className="flex max-w-xl justify-center md:mx-auto md:justify-between md:gap-4">
            {contactLinks.map((link) => (
              <Button key={link.href} href={link.href} icon={link.icon}>
                {link.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="relative transition-opacity">
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
