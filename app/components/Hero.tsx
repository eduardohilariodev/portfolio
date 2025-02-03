"use client";

import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="-mt-24 flex h-screen flex-col justify-center transition-all duration-300">
      <div className="space-y-12">
        <div className="space-y-4">
          <div>
            <div className="@container relative font-semibold tracking-tight">
              <h1 className="text-4xl md:text-5xl">
                Eduardo <br /> Hilário
              </h1>
              <div
                style={{
                  WebkitTextStroke:
                    theme === "dark" ? "0.5px white" : "1px black",
                }}
                className="absolute right-0 bottom-0 flex flex-col -space-y-4 text-right text-transparent opacity-20 *:h-16 *:text-[11.9cqw] md:-space-y-8 md:*:h-24"
              >
                <span>Software Engineer</span>
                <span>Designer</span>
              </div>
            </div>
          </div>

          <hr className="border-[1.5px]" />

          <p className="font-serif text-3xl font-light">
            I help you <strong>solve</strong> and <strong>build</strong> digital
            stuff.
          </p>
        </div>
      </div>
    </div>
  );
}
