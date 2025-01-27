"use client";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
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
    maxHeight - (scrollPosition / scrollThreshold) * (maxHeight - minHeight)
  );

  return (
    <div
      className="flex flex-col items-center justify-center transition-all duration-300"
      style={{ height: `${currentHeight}px` }}
    >
      <div className="space-y-12 text-center">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            className="object-contain text-black dark:text-white transition-colors"
            priority
          />
          <Logo />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Eduardo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            I
            <FlipWords
              className="leading-tight"
              words={words}
            />
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
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
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://github.com/eduardohilariodev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 dark:hover:text-orange-400"
              >
                <TbBrandGithub className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://linkedin.com/in/eduardohilariodev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 dark:hover:text-orange-400"
              >
                <TbBrandLinkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="mailto:eduardohilariodev@pm.me"
                className="hover:text-orange-600 dark:hover:text-orange-400"
              >
                <TbMail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
