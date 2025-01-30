"use client";

import { useScrollSpy } from "../hooks/useScrollSpy";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const activeSection = useScrollSpy();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "", `#${id}`);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full bg-neutral-800/50 px-4 py-2 backdrop-blur-xs dark:bg-white/10">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`rounded-full px-4 py-1 text-sm transition-colors ${
            activeSection === id
              ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
              : "text-neutral-600 hover:bg-neutral-700/50 dark:text-neutral-400 dark:hover:bg-white/20"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
