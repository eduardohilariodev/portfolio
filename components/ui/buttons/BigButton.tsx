import { ButtonHTMLAttributes } from "react";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  href?: string;
  download?: string;
}

export default function BigButton({
  children,
  icon,
  href,
  download,
  ...props
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (download) {
      window.open(`/${download}`, "_blank");
      return;
    }
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={cn(
        "relative cursor-pointer rounded-none border-3 border-neutral-900 px-5 py-3 font-serif text-2xl text-neutral-900 select-none",
        "bg-neutral-200 dark:border-neutral-200 dark:text-neutral-200",
        "hover:bg-white dark:bg-neutral-900",
        "before:bg-neutral-900 dark:before:bg-neutral-200",
        "after:bg-neutral-900 dark:after:bg-neutral-200",
        "hover:dark:shadow-[12px_10px_56px_#FFFFFF64 hover:shadow-[12px_10px_56px_#FFFFFF] active:dark:shadow-none",
        "-translate-[15px] active:translate-0",
        "transition-all duration-300 ease-in",
        "before:transition-all before:duration-300 before:ease-in",
        "after:transition-all after:duration-300 after:ease-in",
        "before:absolute before:skew-x-[45deg]",
        "before:-right-[11px] before:-bottom-[16px] before:h-[13px] before:w-[103%]",
        "active:before:-right-[5px] active:before:-bottom-[0px] active:before:h-[0px] active:before:w-[103%]",
        "after:absolute after:skew-y-[45deg]",
        "after:top-[4px] after:-right-[17px] after:h-[108%] after:w-[15px]",
        "active:after:top-[4px] active:after:-right-[3px] active:after:h-[90%] active:after:w-[0px]",
      )}
      type="button"
      onClick={handleClick}
      {...props}
    >
      <div className="inline-flex items-center gap-3">
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
