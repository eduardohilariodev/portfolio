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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-full bg-gray-800/50 dark:bg-white/10 backdrop-blur-sm z-50">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`px-4 py-1 rounded-full text-sm transition-colors ${
            activeSection === id
              ? "bg-teal-500/20 text-teal-600 dark:text-teal-400"
              : "hover:bg-gray-700/50 dark:hover:bg-white/20 text-gray-600 dark:text-gray-400"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
