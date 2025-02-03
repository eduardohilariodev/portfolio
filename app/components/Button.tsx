// https://codepen.io/rauldronca/pen/PzMgzp?editors=0100

import { cn } from "@/lib/utils";

interface ButtonProps {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick: () => void; // Added type for onClick
}

export default function Button({
  children,
  onClick,
  icon,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "min-h-12 min-w-12 p-2 text-xl text-neutral-600 transition-colors",
        "transition-all dark:text-neutral-400",

        "transition-all duration-300 ease-in",

        "hover:-translate-1 hover:cursor-pointer hover:border-1 hover:border-neutral-900 hover:transition-all hover:duration-300 hover:ease-in dark:hover:border-white",

        "before:bg-neutral-900 dark:hover:before:bg-white",
        "after:bg-neutral-900 dark:hover:after:bg-white",

        "before:transition-all before:duration-300 before:ease-in",
        "after:transition-all after:duration-300 after:ease-in",

        "hover:before:transition-all hover:before:duration-300 hover:before:ease-in",
        "hover:after:transition-all hover:after:duration-300 hover:after:ease-in",

        "before:absolute before:skew-x-[45deg]",
        "after:absolute after:skew-y-[45deg]",

        "before:-right-[6px] before:-bottom-[0px] before:h-[0px] before:w-[100.5%]",
        "after:top-[4px] after:-right-[3px] after:h-[90%] after:w-[0px]",

        "hover:before:-right-[5px] hover:before:-bottom-[9px] hover:before:h-[8px] hover:before:w-[100.5%]",
        "hover:after:top-[4px] hover:after:-right-[9px] hover:after:h-[104%] hover:after:w-[8px]",

        "active:translate-0",
        "active:before:-right-[5px] active:before:-bottom-[0px] active:before:h-[0px] active:before:w-[100.5%]",

        "active:after:top-[4px] active:after:-right-[3px] active:after:h-[90%] active:after:w-[0px]",
        "dark:shadow-white hover:dark:shadow-2xl active:dark:shadow-none",

        className,
      )}
      type="button"
    >
      <div className="grid place-items-center gap-3 font-serif whitespace-nowrap text-neutral-900 dark:text-white">
        {icon &&
          (typeof icon === "string" ? (
            <i className={cn(icon, "text-xl")} />
          ) : (
            icon
          ))}
        {children}
      </div>
    </button>
  );
}
