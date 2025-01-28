"use client";

import { useTheme } from "next-themes";
import { TbMoon, TbSun } from "react-icons/tb";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <TbSun className="h-5 w-5" />
      ) : (
        <TbMoon className="h-5 w-5" />
      )}
    </button>
  );
}
