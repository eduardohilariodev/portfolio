"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useSectionScrollSpy } from "../hooks/useSectionScrollSpy";
import Button from "./Button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "contact", label: "Let's talk" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Knowledge" },
  { id: "experience", label: "Carreer" },
];

export default function Header() {
  const activePageSection = useSectionScrollSpy();
  const [scrollPosition] = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 320;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState({}, "", `#${id}`);
    setIsMenuOpen(false);
  };

  const NavButton = ({ id, label }: { id: string; label: string }) => (
    <Button
      onClick={() => scrollToSection(id)}
      className={`cursor-pointer px-4 py-1 font-serif text-2xl ${
        activePageSection === id
          ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
          : "text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-white/5"
      }`}
    >
      {label}
    </Button>
  );

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 mx-auto max-w-5xl px-8 backdrop-blur-xs transition-all duration-100 md:max-w-3xl md:py-16",
        scrollPosition > scrollThreshold ? "py-3" : "py-6",
        scrollPosition > scrollThreshold &&
          "border-b-2 dark:border-b-neutral-700 dark:bg-neutral-800/50",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          {/* Logo */}
          <div className="relative h-8 w-16">
            <Logo />
          </div>
          {/* Left Navigation */}
          <nav className="hidden gap-2 md:flex">
            {navItems.map((item) => (
              <NavButton key={item.id} {...item} />
            ))}
          </nav>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-white dark:hover:text-neutral-200"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "mt-4 max-h-64 opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col items-end gap-2">
          {[...navItems].map((item) => (
            <Button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
