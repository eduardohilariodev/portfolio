"use client";

import { useTranslations } from "next-intl";

import { StackPill } from "@/components/StackPill";

import { StackPillProps } from "../../lib/types";

interface StackItem {
  heading: categories;
  items: StackPillProps[];
}

type categories =
  | "languages"
  | "frontend"
  | "backend"
  | "data"
  | "cloud"
  | "mobile"
  | "testing"
  | "tooling"
  | "design";

const stack: StackItem[] = [
  {
    heading: "languages" as categories,
    items: [
      { label: "javascript" },
      { label: "python" },
      { label: "php" },
      { label: "dart" },
    ],
  },
  {
    heading: "frontend",
    items: [
      { label: "reactjs", children: [{ label: "nextjs" }] },
      { label: "vuejs", children: [{ label: "nuxt" }] },
      {
        label: "css",
        children: [
          { label: "tailwindcss" },
          { label: "bootstrap" },
          { label: "sass" },
        ],
      },
      { label: "html" },
      { label: "jquery" },
      { label: "vite" },
      { label: "webpack" },
    ],
  },
  {
    heading: "backend",
    items: [
      {
        label: "javascript",
        children: [{ label: "nodejs" }, { label: "expressjs" }],
      },
      { label: "php", children: [{ label: "laravel" }] },
      { label: "python", children: [{ label: "fastapi" }] },
      { label: "nginx" },
      { label: "graphql" },
    ],
  },
  {
    heading: "data",
    items: [
      { label: "postgresql" },
      { label: "mysql" },
      { label: "mariadb" },
      { label: "sqlite" },
      { label: "mongodb" },
    ],
  },
  {
    heading: "cloud",
    items: [{ label: "aws" }, { label: "vercel" }, { label: "githubactions" }],
  },
  {
    heading: "mobile",
    items: [{ label: "flutter" }, { label: "reactnative" }],
  },
  {
    heading: "testing",
    items: [{ label: "vitest" }, { label: "jest" }, { label: "puppeteer" }],
  },
  {
    heading: "tooling",
    items: [
      {
        label: "docker",
      },
      {
        label: "bash",
      },
      {
        label: "pwsh",
      },
      {
        label: "os",
        children: [
          { label: "windows" },
          { label: "linux" },
          { label: "macos" },
        ],
      },
    ],
  },
  {
    heading: "design",
    items: [
      { label: "figma" },
      {
        label: "adobe",
        children: [
          { label: "photoshop" },
          { label: "illustrator" },
          { label: "premiere" },
          { label: "aftereffects" },
        ],
      },
    ],
  },
];

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <>
      <div className="text-md mb-12 space-y-3 font-light text-neutral-900 dark:text-neutral-200">
        <p>{t("intro.tools")}</p>
        <p>{t("intro.noOneSize")}</p>
        <p>{t("intro.familiar")}</p>
      </div>
      <div className="h-full w-full">
        {stack.map(({ heading, items }) => (
          <div className="mb-8" key={heading}>
            <h3 className="mb-3 font-serif text-3xl">
              {t(`categories.${heading}`)}
            </h3>
            <div className="@container flex flex-wrap gap-4">
              {items.map((item) => (
                <StackPill key={item.label} tech={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
