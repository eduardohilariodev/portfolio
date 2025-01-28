"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Logo from "./Logo";

const words = ["design", "develop", "deliver"];

export default function Hero() {
  const scrollPosition = useScrollPosition();
  const minHeight = 400; // minimum height in pixels
  const maxHeight = 800; // maximum height in pixels
  const scrollThreshold = 300; // scroll position at which to start reducing height

  const currentHeight = Math.max(
    minHeight,
    maxHeight - (scrollPosition / scrollThreshold) * (maxHeight - minHeight),
  );

  return (
    <div
      className="flex flex-col items-center justify-center transition-all duration-300"
      style={{ height: `${currentHeight}px` }}
    >
      <div className="space-y-12 text-center">
        <div className="relative mx-auto h-24 w-24">
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            className="object-contain text-black transition-colors dark:text-white"
            priority
          />
          <Logo />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Eduardo
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
            <div className="font-serif font-light">
              <p>I design.</p>
              <p>I develop.</p>
              <p>I deliver.</p>
            </div>
            {/* <FlipWords
              className="leading-tight font-serif"
              words={words}
            /> */}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn more
          </Button>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/eduardohilariodev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 dark:hover:text-orange-400"
              >
                <TbBrandGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/eduardohilariodev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 dark:hover:text-orange-400"
              >
                <TbBrandLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:eduardohilariodev@pm.me"
                className="hover:text-orange-600 dark:hover:text-orange-400"
              >
                <TbMail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
