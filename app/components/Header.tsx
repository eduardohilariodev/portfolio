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
      className={`px-4 py-1 rounded-full text-sm transition-colors ${
        activeSection === id
          ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
          : "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0a0b0f]/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex gap-2">
            {leftNavItems.map((item) => (
              <NavButton
                key={item.id}
                {...item}
              />
            ))}
          </nav>

          {/* Center Logo */}
          <div className="h-8 w-16 relative">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              className="object-contain  dark:invert transition-colors"
              priority
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex gap-2">
              {rightNavItems.map((item) => (
                <NavButton
                  key={item.id}
                  {...item}
                />
              ))}
            </nav>
            <ConnectDialog />
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 mt-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeSection === item.id
                    ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
                    : "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400"
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
