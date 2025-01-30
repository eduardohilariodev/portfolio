// https://codepen.io/rauldronca/pen/PzMgzp?editors=0100

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className={cn(
        "relative cursor-pointer rounded-none border-3 border-gray-900 bg-white px-6 py-4 font-serif text-2xl text-gray-900",
        "dark:border-white dark:bg-gray-900 dark:text-white",

        "-translate-[15px] active:translate-0",

        "transition-all duration-300 ease-in",
        "before:transition-all before:duration-300 before:ease-in",
        "after:transition-all after:duration-300 after:ease-in",

        "before:absolute before:skew-x-[45deg] before:bg-white",

        "before:-right-[11px] before:-bottom-[16px] before:h-[13px] before:w-[103%]",
        "active:before:-right-[5px] active:before:-bottom-[0px] active:before:h-[0px] active:before:w-[103%]",

        "after:absolute after:skew-y-[45deg] after:bg-white",

        "after:top-[4px] after:-right-[17px] after:h-[108%] after:w-[15px]",
        "active:after:top-[4px] active:after:-right-[3px] active:after:h-[90%] active:after:w-[0px]",
      )}
      type="button"
    >
      {children}
    </button>
  );
}
