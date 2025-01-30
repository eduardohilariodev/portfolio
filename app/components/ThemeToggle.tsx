"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 text-xl text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-white/5"
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
