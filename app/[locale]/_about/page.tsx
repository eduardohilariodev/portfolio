"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { CONTACT_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
      <div className="order-2 space-y-6 md:order-1 md:col-span-2">
        <div className="space-y-4">
          <section className="text-md space-y-4 font-light dark:text-neutral-200">
            <p>
              {t("greeting")} <strong className="font-bold">{t("name")}</strong>
              !
            </p>
            <p>{t("intro")}</p>
            <p>{t("work")}</p>
            <p>{t("learning")}</p>
            <p>
              {t("cta")}&nbsp;
              <a
                href={CONTACT_LINKS.WHATSAPP.href}
                target="_blank"
                className="underline"
              >
                {t("sendMessage")}
              </a>
              !
            </p>
          </section>
        </div>
      </div>

      <div className="relative order-1 mx-auto aspect-square w-full max-w-[300px] border-4 border-neutral-900 bg-neutral-50 p-8 md:order-2 dark:border-neutral-200 dark:bg-neutral-800">
        <Image
          src="/profile_bnw.png"
          alt={t("profileAlt")}
          fill
          className={cn(
            "scale-75 object-contain",
            "[--bgPosition:calc(var(--bgSize)/2)] [--bgSize:0.7rem] [--dotSize:0.15rem]",
            "[background-image:radial-gradient(circle_at_center,black_var(--dotSize),transparent_0),radial-gradient(circle_at_center,black_var(--dotSize),transparent_0)]",
            "[background-size:var(--bgSize)_var(--bgSize)]",
            "[background-position:0_0,var(--bgPosition)_var(--bgPosition)]",
            "dark:[background-image:radial-gradient(circle_at_center,white_var(--dotSize),transparent_0),radial-gradient(circle_at_center,white_var(--dotSize),transparent_0)]",
          )}
          priority
        />
      </div>
    </div>
  );
}
