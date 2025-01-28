import Image from "next/image";

interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      fill
      className="object-contain transition-colors dark:invert"
      priority
    />
  );
}
