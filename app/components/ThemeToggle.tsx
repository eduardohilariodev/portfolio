"use client";

import { useTheme } from "next-themes";
import { TbMoon, TbSun } from "react-icons/tb";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <TbSun className="w-5 h-5" />
      ) : (
        <TbMoon className="w-5 h-5" />
      )}
    </button>
  );
}
