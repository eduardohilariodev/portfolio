"use client";

import Image from "next/image";

import { type Project } from "@/app/types";
import { StackPill } from "./Stack";

interface ParentProps {
  img: string;
  name: string;
  start: string;
  end: string;
}

interface ChildProps {
  title: string;
  projects: Project[];
}

export function Parent({ img, name, start, end }: ParentProps) {
  return (
    <div
      aria-label="Parent container"
      className="flex gap-4 text-lg font-light dark:text-white"
    >
      <Image
        src={img}
        alt={name}
        height={80}
        width={80}
        className="object-contain"
        aria-label="Parent logo"
      />
      <div
        aria-label="Parent details"
        className="flex grow items-center justify-between text-2xl"
      >
        <h3 aria-label="Title">{name}</h3>
        <span aria-label="Period">
          {start}&ndash;{end}
        </span>
      </div>
    </div>
  );
}

export function Child({ title, projects }: ChildProps) {
  return (
    <div aria-label="Container" className="grid grid-cols-[80px_1fr] gap-x-4">
      <div className="h-6 w-0.5 place-self-center bg-white" />
      <div aria-hidden="true" />
      {/* Initial connector */}
      <div className="flex flex-col items-center">
        <div className="h-8 w-0.5 bg-white" />
        <div className="size-4 rounded-full bg-white" />
        <div className="h-8 w-0.5 bg-white" />
      </div>

      {/* Title */}
      <h4 className="self-center font-serif text-3xl text-white">{title}</h4>

      {/* Projects */}
      {projects?.map(({ description, stack }, index) => (
        <div key={`${description}-${index}`} className="contents">
          <div className="flex flex-col items-center">
            <div className="h-2 w-0.5 bg-white" />
            <div className="size-2 rounded-full bg-white" />
            <div className="h-full w-0.5 bg-white" />
          </div>

          <div className="mb-6 space-y-4 dark:text-neutral-300">
            <p>{description}</p>
            <div className="flex flex-col gap-3">
              <h5 className="font-serif text-2xl">Core Technologies</h5>
              <div className="flex flex-wrap gap-4">
                {stack.map((tech) => (
                  <StackPill key={tech.label} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Final connector */}
      <div className="flex flex-col items-center">
        <div className="h-18 w-0.5 bg-white" />
      </div>
      <div aria-hidden="true" />
    </div>
  );
}
