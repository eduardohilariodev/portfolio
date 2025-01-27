import Image from "next/image";

interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      fill
      className="object-contain dark:invert transition-colors"
      priority
    />
  );
}
