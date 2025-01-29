"use client";

import { StackPill, StackPillProps } from "./Stack";

interface Stack {
  heading: string;
  items: StackPillProps[];
}

const stack: Stack[] = [
  {
    heading: "Languages",
    items: [
      {
        label: "languages",
        children: [
          { label: "brazilian" },
          { label: "english" },
          { label: "spanish" },
        ],
      },
      {
        label: "programming",
        children: [
          { label: "javascript" },
          { label: "python" },
          { label: "php" },
          { label: "dart" },
        ],
      },
      {
        label: "javascript",
        children: [
          { label: "typescript" },
          { label: "nodejs" },
          { label: "reactjs" },
          { label: "nextjs" },
          { label: "vuejs" },
          { label: "vite" },
          { label: "vitest" },
          { label: "jest" },
        ],
      },
      {
        label: "php",
        children: [{ label: "laravel" }],
      },
      {
        label: "dart",
        children: [{ label: "flutter" }],
      },
      {
        label: "css",
        children: [
          { label: "tailwindcss" },
          { label: "bootstrap" },
          { label: "sass" },
        ],
      },
      {
        label: "databases",
        children: [
          { label: "mysql" },
          { label: "mongodb" },
          { label: "graphql" },
        ],
      },
      {
        label: "python",
        children: [{ label: "fastapi" }],
      },
    ],
  },
  {
    heading: "Frameworks",
    items: [
      {
        label: "libraries",
        children: [
          { label: "reactjs" },
          { label: "vuejs" },
          { label: "flutter" },
        ],
      },
      {
        label: "backend",
        children: [
          { label: "nodejs" },
          { label: "laravel" },
          { label: "fastapi" },
        ],
      },
      {
        label: "fullstack",
        children: [{ label: "nextjs" }, { label: "laravel" }],
      },
    ],
  },
  {
    heading: "Data",
    items: [
      {
        label: "devops",
        children: [
          { label: "aws" },
          { label: "vercel" },
          { label: "githubactions" },
          { label: "nginx" },
          { label: "docker" },
        ],
      },
    ],
  },
  {
    heading: "Tooling",
    items: [
      {
        label: "testing",
        children: [{ label: "vitest" }, { label: "jest" }],
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
];

export default function Skills() {
  return stack.map(({ heading, items }) => (
    <div className="mb-8" key={heading}>
      <h3 className="mb-3 font-serif text-3xl">{heading}</h3>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <StackPill key={item.label} tech={item} />
        ))}
      </div>
    </div>
  ));
}
