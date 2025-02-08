"use client";

import { StackPill } from "@/components/StackPill";
import useMousePosition from "@/lib/hooks/useMousePosition";
import { StackPillProps } from "../../lib/types";

import { motion } from "framer-motion";
import { useState } from "react";

interface StackItem {
  heading: string;
  items: StackPillProps[];
}

const stack: StackItem[] = [
  {
    heading: "Languages",
    items: [
      { label: "javascript" },
      { label: "python" },
      { label: "php" },
      { label: "dart" },
    ],
  },
  {
    heading: "Frontend",
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
    heading: "Backend",
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
    heading: "Data",
    items: [
      { label: "postgresql" },
      { label: "mysql" },
      { label: "mariadb" },
      { label: "sqlite" },
      { label: "mongodb" },
    ],
  },
  {
    heading: "Cloud",
    items: [{ label: "aws" }, { label: "vercel" }, { label: "githubactions" }],
  },
  {
    heading: "Mobile",
    items: [{ label: "flutter" }, { label: "reactnative" }],
  },
  {
    heading: "Testing",
    items: [{ label: "vitest" }, { label: "jest" }, { label: "puppeteer" }],
  },
  {
    heading: "Tooling",
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
    heading: "Design",
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
  const { x, y, isActive } = useMousePosition({ id: "skills" });
  const [isHovered, setIsHovered] = useState(false);

  const maskSize = isActive ? (isHovered ? 500 : 100) : 0;

  return (
    <>
      <div className="text-md mb-12 space-y-3 font-light text-neutral-900 dark:text-neutral-200">
        <p>Usually the tools I use for the job, depend on the job.</p>
        <p>
          There&apos;s no one-size fits all, and as such I&apos;m always trying
          out new technologies, and constantly learning.
        </p>
        <p>
          The following technologies are the ones I&apos;m most familiar with:
        </p>
      </div>
      <div className="relative h-full w-full">
        <motion.div
          id="skills"
          className="absolute size-full"
          animate={{
            WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          style={{
            WebkitMaskImage: "url(/mask.svg)",
            maskImage: "url(/mask.svg)",
            maskRepeat: "no-repeat",
          }}
        >
          <KnowledgeList hasColor setIsHovered={setIsHovered} />
        </motion.div>
        <KnowledgeList setIsHovered={setIsHovered} />
      </div>
    </>
  );
}
function KnowledgeList({
  hasColor = false,
  setIsHovered,
}: {
  hasColor?: boolean;
  setIsHovered: (isHovered: React.SetStateAction<boolean>) => void;
}) {
  return stack.map(({ heading, items }) => (
    <div className="mb-8" key={heading}>
      <h3 className="mb-3 font-serif text-3xl">{heading}</h3>
      <div className="@container flex flex-wrap gap-4">
        {items.map((item) => {
          item.hasColor = hasColor;
          const { children } = item;
          if (children) {
            item.children = children.map((child) => ({
              ...child,
              hasColor,
            }));
          }
          return (
            <StackPill
              key={item.label}
              tech={item}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          );
        })}
      </div>
    </div>
  ));
}
