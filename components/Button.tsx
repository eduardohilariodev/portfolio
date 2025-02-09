import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface ButtonProps {
  icon?: string | React.ReactNode | IconType;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export default function Button({
  children,
  icon,
  className,
  href,
  onClick,
  external,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      if (external) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }
    if (onClick) {
      onClick();
    }
  };

  const paddingLabel = "px-2 py-1 md:px-4 md:py-3";
  const paddingIcon = "p-1";
  const buttonSize = "min-h-10min-w-10md:min-h-12 md:min-w-12";

  return (
    <div
      className={cn(
        "group relative w-fit border-2 border-transparent text-xl",
        buttonSize,
        className,
        children ? paddingLabel : paddingIcon,
      )}
    >
      <button
        onClick={handleClick}
        tabIndex={0}
        className={cn(
          buttonSize,
          "cursor-pointer group-hover:opacity-0",
          "group-active:opacity-100",
          "border border-transparent group-focus:border-neutral-900 dark:group-focus:border-neutral-200",
          "transition-opacity duration-[2s]",
          children ? paddingLabel : paddingIcon,
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
          children ? paddingLabel : paddingIcon,
          // TODO: fix this absolute
          "absolute inset-0 cursor-pointer",

          buttonSize,

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
  icon?: string | React.ReactNode | IconType;
}) {
  return (
    <div className="grid place-items-center gap-3 font-serif text-nowrap text-neutral-900 dark:text-neutral-200">
      {icon &&
        (typeof icon === "function" ? (
          icon({ className: "text-xl" })
        ) : typeof icon === "string" ? (
          <i className={cn(icon, "text-xl")} />
        ) : (
          icon
        ))}
      {children}
    </div>
  );
}
