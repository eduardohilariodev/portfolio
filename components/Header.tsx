"use client";

import { cn } from "@/lib/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeButton from "./ThemeButton";

const navItems = [
  { id: "contact", label: "Let's talk" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Knowledge" },
  { id: "experience", label: "Carreer" },
];

export default function Header() {
  const [{ y }] = useWindowScroll();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 160;

  useEffect(() => {
    if (y === 0) {
      setActiveSection("");
      return;
    }

    const options = {
      threshold: 0.7,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (window.scrollY === 0) {
          setActiveSection("");
          return;
        }
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [y]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });

    setIsMenuOpen(false);
  };

  const NavButton = ({ id, label }: { id: string; label: string }) => (
    <NavLink
      href={`#${id}`}
      onClick={() => scrollToSection(id)}
      active={activeSection === id}
    >
      {label}
    </NavLink>
  );

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full p-8 transition-all duration-100 md:py-10",
        y &&
          y > scrollThreshold &&
          "border-b-2 backdrop-blur-xs dark:border-b-neutral-700 dark:bg-neutral-800/50",
      )}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <div className="flex gap-8">
          {/* Logo */}
          <div
            className="relative h-8 w-16 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo />
          </div>
          {/* Left Navigation */}
          <nav className="hidden gap-4 md:flex">
            {navItems.map((item) => (
              <NavButton key={item.id} {...item} />
            ))}
          </nav>
        </div>
        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeButton />
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ria-label="Toggle menu"
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
      <nav
        className={cn(
          "mt-4 flex w-full flex-col items-end gap-2 transition-all duration-300 ease-out md:opacity-0",
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "pointer-events-none hidden max-h-0 opacity-0",
        )}
      >
        {[...navItems].map((item) => (
          <Button key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </Button>
        ))}
      </nav>
    </header>
  );
}
