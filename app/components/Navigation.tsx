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
    <nav className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 gap-2 rounded-full bg-gray-800/50 px-4 py-2 backdrop-blur-sm dark:bg-white/10">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`rounded-full px-4 py-1 text-sm transition-colors ${
            activeSection === id
              ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
              : "text-gray-600 hover:bg-gray-700/50 dark:text-gray-400 dark:hover:bg-white/20"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
