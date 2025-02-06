import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ children, onClick }: NavLinkProps) {
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
      href="#"
      onClick={onClick}
      className="group relative flex items-center font-serif text-lg font-medium"
    >
      <div className="delay- absolute top-0 flex w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <hr
            key={index}
            className={cn(
              "z-10 w-full border-2 opacity-0 transition duration-1000 group-hover:opacity-100 dark:border-neutral-200",
              lineClass(index as lineIndex),
            )}
          />
        ))}
      </div>
      {children}
    </Link>
  );
}
