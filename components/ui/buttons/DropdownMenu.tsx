"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import Button from "./Button";

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  action: (isOpen: boolean) => void;
  align?: "start" | "end";
  side?: "top" | "bottom";
}

export function DropdownMenu({
  trigger,
  children,
  className,
  isOpen,
  action,
  align = "end",
  side = "bottom",
}: DropdownMenuProps) {
  return (
    <div className="text-medium relative">
      <Button onClick={() => action(!isOpen)} className={cn(className)}>
        {trigger}
      </Button>
      <div
        className={cn(
          "absolute mt-2 w-40 origin-top-right rounded-md border",
          "border-neutral-200 bg-white/80 py-1 shadow-lg backdrop-blur-sm",
          "cursor-pointer dark:border-neutral-800 dark:bg-neutral-900/80",
          "opacity-0 transition-all duration-1000",
          "pointer-events-none",
          isOpen && "pointer-events-auto opacity-100",
          align === "end" ? "right-0" : "left-0",
          side === "top" ? "bottom-full mb-2" : "top-full mt-2",
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

export function DropdownItem({
  children,
  className,
  active,
  ...props
}: DropdownItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full cursor-pointer items-center px-4 py-2 text-sm transition-colors",
        "text-neutral-900 hover:bg-neutral-100",
        "dark:text-neutral-50 dark:hover:bg-neutral-800",
        active && "bg-neutral-100 dark:bg-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
