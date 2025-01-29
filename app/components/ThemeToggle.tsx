"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 text-xl text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        // <TbSun className="" />
        <i className="hn hn-sun" />
      ) : (
        <i className="hn hn-moon" />
      )}
    </button>
  );
}
