import { AnchorHTMLAttributes } from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils/cn";

interface NavLinkProps
  extends LinkProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  onClick?: () => void;
  href: string;
  className?: string;
  active?: boolean;
}

export default function NavLink({
  children,
  onClick,
  href,
  className,
  active = false,
  ...props
}: NavLinkProps) {
  type lineIndex = 0 | 1 | 2 | 3 | 4;

  function lineClass(number: lineIndex) {
    const lineClasses = [
      "group-hover:delay-150",
      "group-hover:delay-200",
      "group-hover:delay-300",
      "group-hover:delay-500",
      "group-hover:delay-700",
    ];

    return lineClasses[number];
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        active
          ? "text-neutral-900 dark:text-neutral-200"
          : "text-neutral-600 dark:text-neutral-400",
        "group relative flex h-10 w-fit items-center font-serif text-lg font-light tracking-tight hover:text-neutral-400 md:text-xl dark:hover:text-neutral-300",
        className,
      )}
      {...props}
    >
      <div className="absolute top-0 flex w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <hr
            key={index}
            className={cn(
              "z-10 w-full border opacity-0 transition duration-1000 group-hover:opacity-100 dark:border-neutral-200",
              lineClass(index as lineIndex),
              active ? "opacity-100" : "",
            )}
          />
        ))}
      </div>
      {children}
    </Link>
  );
}
