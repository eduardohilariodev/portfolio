"use client";

import Image from "next/image";
import Link from "next/link";
import StackPill, {
  getTechsByCategory,
  type StackPillProps,
} from "./StackPill";

interface AboutProps {
  profileImage: string;
  techs: StackPillProps["tech"][];
}

export default function About({ profileImage, techs }: AboutProps) {
  const techsByCategory = getTechsByCategory(techs);
  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    tooling: "Tools",
    mobile: "Mobile",
  };

  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
      <div className="space-y-6 md:col-span-2">
        <div className="space-y-4 text-lg">
          <p className="italic text-gray-600 dark:text-gray-400">
            Proactive Software Engineer with 5 years of experience
          </p>

          <p>
            I&apos;m Eduardo, a software engineer specializing in TypeScript,
            React, and UX/UI Design. I focus on delivering user-focused digital
            experiences, optimizing software performance, and building scalable
            solutions for web and mobile platforms.
          </p>

          <div className="space-y-4">
            {Array.from(techsByCategory.entries()).map(([category, techs]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <StackPill key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href="/blog"
            className="inline-block rounded-md bg-orange-500/10 px-6 py-2 text-orange-600 transition hover:bg-orange-500/20 dark:text-orange-400"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="inline-block rounded-md bg-orange-500/10 px-6 py-2 text-orange-600 transition hover:bg-orange-500/20 dark:text-orange-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-orange-500/10 px-6 py-2 text-orange-600 transition hover:bg-orange-500/20 dark:text-orange-400"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[300px]">
        <Image
          src={profileImage}
          alt="Eduardo's profile picture"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  );
}
