"use client";

import { getSectionsArray } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useClickAway, useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

import useScrollById from "@/lib/hooks/useScrollById";
import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [{ y }] = useWindowScroll();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 160;
  const navItems = getSectionsArray();
  const { scrollToSection } = useScrollById(() => setIsMenuOpen(false));

  useEffect(() => {
    if (y && y < 400) {
      setActiveSection("");
      return;
    }

    const options = {
      threshold: 0.9,
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
  }, [navItems, y]);

  const ref = useClickAway(() => {
    setIsMenuOpen(false);
  });

  const NavButton = ({
    id,
    children,
    ...props
  }: {
    id: string;
    children: React.ReactNode;
    onClick?: () => void;
  } & React.ComponentPropsWithoutRef<"a">) => (
    <NavLink
      href={`#${id}`}
      onClick={() => {
        scrollToSection(id);
      }}
      active={activeSection === id}
      {...props}
    >
      {children}
    </NavLink>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full px-6 py-1 transition-all duration-100 md:px-8 md:py-10",
        isMenuOpen ||
          (y &&
            y > scrollThreshold &&
            "border-b-2 border-b-neutral-900 backdrop-blur-xs dark:border-b-neutral-700 dark:bg-neutral-900/80"),
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
              <NavButton key={item.id} id={item.id}>
                {item.title}
              </NavButton>
            ))}
          </nav>
        </div>

        {/* Mobile Buttons */}
        <div className="-pr-6 flex items-center md:gap-4">
          <ThemeButton />
          <Button
            className="md:hidden"
            icon={
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
            }
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        ref={ref as React.RefObject<HTMLElement>}
        className={cn(
          "mt-4 flex w-full flex-col items-end justify-end gap-2 transition-all duration-300 ease-out md:opacity-0",
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "pointer-events-none hidden max-h-0 opacity-0",
        )}
      >
        {[...navItems].map((item) => (
          <NavButton key={item.id} id={item.id}>
            {item.title}
          </NavButton>
        ))}
      </nav>
    </header>
  );
}
