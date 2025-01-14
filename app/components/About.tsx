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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 space-y-6">
        <div className="space-y-4 text-lg">
          <p className="text-gray-600 dark:text-gray-400 italic">
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
              <div
                key={category}
                className="space-y-2"
              >
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <StackPill
                      key={tech}
                      tech={tech}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href="/blog"
            className="inline-block px-6 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-500/20 transition"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="inline-block px-6 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-500/20 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-500/20 transition"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-[300px] mx-auto">
        <Image
          src={profileImage}
          alt="Eduardo's profile picture"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
