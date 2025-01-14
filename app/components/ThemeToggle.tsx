"use client";

import { TbMoon, TbSun } from "react-icons/tb";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-800/50 dark:bg-white/10 backdrop-blur-sm transition-colors hover:bg-gray-700/50 dark:hover:bg-white/20"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <TbSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <TbMoon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
