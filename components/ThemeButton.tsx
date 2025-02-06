"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Button from "./Button";

export default function ThemeButton({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={className}
    >
      <i className={cn("hn", theme === "dark" ? "hn-sun" : "hn-moon")} />
    </Button>
  );
}
