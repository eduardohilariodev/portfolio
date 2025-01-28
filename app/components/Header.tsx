"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { ConnectDialog } from "./ConnectDialog";
import ThemeToggle from "./ThemeToggle";

const leftNavItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
];

const rightNavItems = [
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const activeSection = useScrollSpy();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <button
      onClick={() => scrollToSection(id)}
      className={`rounded-full px-4 py-1 text-sm transition-colors ${
        activeSection === id
          ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-[#0a0b0f]/80">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden gap-2 md:flex">
            {leftNavItems.map((item) => (
              <NavButton key={item.id} {...item} />
            ))}
          </nav>

          {/* Center Logo */}
          <div className="relative h-8 w-16">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              className="object-contain  transition-colors dark:invert"
              priority
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex gap-2">
              {rightNavItems.map((item) => (
                <NavButton key={item.id} {...item} />
              ))}
            </nav>
            <ConnectDialog />
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
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
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "mt-4 max-h-64 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-md px-4 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <ConnectDialog />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
