"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import Button from "./Button";

export default function ThemeButton({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const Icon = (
    <i className={cn("hn", theme === "dark" ? "hn-sun" : "hn-moon")} />
  );

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={className}
      icon={Icon}
    />
  );
}
