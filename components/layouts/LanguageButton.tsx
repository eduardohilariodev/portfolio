"use client";

import { useCallback, useEffect, useState } from "react";

import { usePathname, useRouter } from "@/i18n/routing";
import { getLocaleConfigs, LOCALE_CONFIG } from "@/lib/constants";
import { getUserLocale, setUserLocale } from "@/lib/services/locale";
import { cn } from "@/lib/utils/cn";

import { DropdownItem, DropdownMenu } from "../ui/buttons/DropdownMenu";

import type { Locale } from "@/lib/constants";

interface LanguageButtonProps {
  className?: string;
  side?: "top" | "bottom";
  align?: "start" | "end";
}

export default function LanguageButton({
  className,
  side,
  align,
}: LanguageButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cookieLocale, setCookieLocale] = useState<Locale>();
  const [currentLocale, setCurrentLocale] = useState(LOCALE_CONFIG.en);

  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = useCallback(
    async (value: Locale) => {
      await setUserLocale(value);
      setCookieLocale(value);
      setCurrentLocale(LOCALE_CONFIG[value]);
      setIsMenuOpen(false);
      router.replace(pathname, { locale: value });
    },
    [pathname, router],
  );

  useEffect(() => {
    const fetchLocale = async () => {
      const locale = (await getUserLocale()) as Locale;
      setCookieLocale(locale);
      setCurrentLocale(LOCALE_CONFIG[locale]);
    };
    fetchLocale();
  }, []);

  const CurrentIcon = currentLocale.icon;

  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-2">
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">{currentLocale.label}</span>
        </div>
      }
      className={cn("w-auto", className)}
      isOpen={isMenuOpen}
      action={setIsMenuOpen}
      side={side}
      align={align}
    >
      {getLocaleConfigs().map(({ code, label, icon: Icon }) => (
        <DropdownItem
          key={code}
          onClick={() => changeLanguage(code as Locale)}
          active={code === cookieLocale}
        >
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            {label}
          </div>
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
}
