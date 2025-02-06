import { useEffect, useState } from "react";

export default function useMousePosition({ id }: { id: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  function updateMousePosition(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
    setIsActive(true);
  }

  function handleMouseLeave() {
    setIsActive(false);
  }

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    element.addEventListener("mousemove", updateMousePosition as EventListener);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener(
        "mousemove",
        updateMousePosition as EventListener,
      );
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ...mousePosition, isActive };
}
