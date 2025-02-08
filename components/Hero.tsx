"use client";

import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

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

  return (
    <div className="mb-10 flex h-[80vh] max-h-[720px] flex-col justify-center transition-all duration-300 md:mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <div>
            <div className="@container relative font-semibold tracking-tight">
              <h1 className="text-5xl">
                Eduardo <br /> Hilário
              </h1>
              <div
                className="absolute right-0 bottom-2 flex flex-col -space-y-4 text-right text-transparent opacity-20 *:h-18 *:text-[11.9cqw] md:bottom-0 md:-space-y-8 md:*:h-24"
                ref={strokeRef}
              >
                <span>Software Engineer</span>
                <span>Designer</span>
              </div>
            </div>
          </div>

          <hr className="border-[1.5px]" />

          <p className="font-serif text-4xl font-light">
            I help you <strong>solve</strong> and <strong>build</strong> digital
            stuff.
          </p>
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
