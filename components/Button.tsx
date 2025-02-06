import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ButtonProps {
  icon?: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  icon,
  className,
  href,
  onClick,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        "group relative min-h-12 w-fit min-w-12 border-2 border-transparent text-xl",
        className,
        children ? "px-4 py-3" : "p-2",
      )}
    >
      <button
        onClick={handleClick}
        tabIndex={0}
        className={cn(
          "min-h-12 min-w-12",
          "cursor-pointer group-hover:opacity-0",
          "group-active:opacity-100",
          "group-focus:border-netural-900 border border-transparent dark:group-focus:border-neutral-200",
          "transition-opacity duration-[2s]",
          children ? "px-4 py-3" : "p-2",
        )}
        type="button"
      >
        <ButtonChild icon={icon}>{children}</ButtonChild>
      </button>

      <button
        onClick={handleClick}
        aria-hidden
        tabIndex={-1}
        className={cn(
          children ? "px-4 py-3" : "p-2",
          // TODO: fix this absolute
          "absolute inset-0 cursor-pointer",

          "min-h-12 min-w-12",

          "group-hover:opacity-100",
          "opacity-0 transition-opacity duration-[2s]",
          "group-active:opacity-0 group-active:transition-opacity group-active:duration-[2s]",

          "border-2 group-hover:border-t-neutral-900 group-hover:border-l-neutral-900 group-hover:bg-neutral-100 dark:border-neutral-700 group-hover:dark:border-t-neutral-200 group-hover:dark:border-l-neutral-200 group-hover:dark:bg-neutral-900",
          "dark:border-neutral-200",

          "before:bg-neutral-900 dark:before:bg-neutral-200",
          "after:bg-neutral-900 dark:after:bg-neutral-200",

          "before:absolute before:skew-x-[45deg]",
          "after:absolute after:skew-y-[45deg]",

          "before:-right-[5px] before:-bottom-[9px] before:h-[8px] before:w-[105%]",
          "after:top-[4px] after:-right-[9px] after:h-[103%] after:w-[8px]",

          "group-active:translate-0",
          "group-active:before:-right-[5px] group-active:before:-bottom-[0px] group-active:before:h-[0px] group-active:before:w-[100.5%]",

          "group-active:after:top-[4px] group-active:after:-right-[3px] group-active:after:h-[90%] group-active:after:w-[0px]",
          "dark:shadow-neutral-200 group-hover:dark:shadow-2xl group-active:dark:shadow-none",
          "-translate-2",
        )}
        type="button"
      >
        <ButtonChild icon={icon}>{children}</ButtonChild>
      </button>
    </div>
  );
}

function ButtonChild({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: string | React.ReactNode;
}) {
  return (
    <div className="neutral-200space-nowrap grid place-items-center gap-3 font-serif text-neutral-900 dark:text-neutral-200">
      {icon &&
        (typeof icon === "string" ? (
          <i className={cn(icon, "text-xl")} />
        ) : (
          icon
        ))}
      {children}
    </div>
  );
}
