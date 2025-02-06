import Image from "next/image";

export default function Logo() {
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
