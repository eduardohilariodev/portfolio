import Image from "next/image";

import { cn } from "@/lib/utils/cn";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  width = 100,
  height = 100,
  className = "",
}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      className={cn("object-contain transition-colors dark:invert", className)}
      priority
      width={width}
      height={height}
    />
  );
}
