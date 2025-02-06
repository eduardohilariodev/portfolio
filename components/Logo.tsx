import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 100, height = 100 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      className="object-contain transition-colors dark:invert"
      priority
      width={width}
      height={height}
    />
  );
}
