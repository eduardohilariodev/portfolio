"use client";

import BigButton from "@/components/BigButton";
import { StackPill } from "@/components/StackPill";
import { Child, Parent } from "@/components/Timeline";
import { type CompanyInfo, type ExperienceItem } from "@/lib/types";
import { DateTime } from "luxon";

const companies: Record<string, CompanyInfo> = {
  Ckreativ: {
    name: "Ckreativ",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGLeuwrogi8bw/company-logo_200_200/company-logo_200_200/0/1710548135771/ckreativ_logo?e=1744848000&v=beta&t=6YZovv4fOMknme-0bOuGi9F9gguN4BNDHob4TNLFZdI",
    linkedIn: "https://www.linkedin.com/company/ckreativ",
  },

  "Brick Abode": {
    name: "Brick Abode",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFhRHi0tefe1g/company-logo_200_200/company-logo_200_200/0/1630619625088/brickabode_logo?e=1744848000&v=beta&t=efaIABZOSpz4NqCnbjVAL5GhEbNvVVmW0NGnOVvgKFU",
    linkedIn: "https://www.linkedin.com/company/brickabode",
  },

  GETMORE: {
    name: "GETMORE",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF1TrPLIeswKA/company-logo_200_200/company-logo_200_200/0/1630471547758/getmore_logo?e=1744848000&v=beta&t=sVCwsojd23zNgakotC2LCBnArY70zoNhQLxulL_Nyis",
    linkedIn: "https://www.linkedin.com/company/getmore/",
  },
};

const experiences: ExperienceItem[] = [
  {
    company: companies.Ckreativ,
    period: {
      start: DateTime.fromObject({ year: 2022, month: 3 }),
      end: DateTime.fromObject({ year: 2024, month: 12 }),
    },
    stack: [
      { label: "typescript" },
      { label: "vuejs", children: [{ label: "nuxt" }] },
      { label: "python", children: [{ label: "fastapi" }] },
      {
        label: "css",
        children: [
          { label: "sass" },
          { label: "bootstrap" },
          { label: "tailwindcss" },
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
      { label: "aws" },
      { label: "docker" },
      { label: "githubactions" },
      { label: "mysql" },
      { label: "figma" },
    ],
    positions: [
      {
        title: "Software Engineer",
        description:
          "Led development of AI-powered solutions and cloud applications, including a chatbot with sub-minute response times. Implemented subscription systems and optimized development workflows using modern DevOps practices, resulting in improved customer acquisition and system scalability.",
        period: {
          start: DateTime.fromObject({ year: 2023, month: 6 }),
          end: DateTime.fromObject({ year: 2024, month: 12 }),
        },
      },
      {
        title: "Junior Software Engineer",
        description:
          "Enhanced and maintained enterprise software platforms, focusing on performance optimization and user experience. Achieved significant improvements in system reliability, user satisfaction, and application performance through systematic testing and debugging processes.",
        period: {
          start: DateTime.fromObject({ year: 2022, month: 9 }),
          end: DateTime.fromObject({ year: 2023, month: 6 }),
        },
      },
      {
        title: "UX Designer",
        description: `Spearheaded user interface design initiatives focused on improving accessibility and user engagement across platforms.`,
        period: {
          start: DateTime.fromObject({ year: 2022, month: 3 }),
          end: DateTime.fromObject({ year: 2022, month: 9 }),
        },
      },
    ],
  },
  {
    company: companies["Brick Abode"],
    period: {
      start: DateTime.fromObject({ year: 2019, month: 11 }),
      end: DateTime.fromObject({ year: 2021, month: 3 }),
    },
    stack: [
      {
        label: "adobe",
        children: [{ label: "premiere" }, { label: "aftereffects" }],
      },
      { label: "pwsh" },
      { label: "python" },
    ],
    positions: [
      {
        title: "Technical Content Producer",
        description:
          "Led video production workflow and automated content distribution systems. Optimized hardware setup and content delivery processes.",
        period: {
          start: DateTime.fromObject({ year: 2020, month: 3 }),
          end: DateTime.fromObject({ year: 2021, month: 3 }),
        },
      },
      {
        title: "Production Intern",
        description:
          "Created video content and automated production workflows using industry tools. Improved content delivery efficiency.",
        period: {
          start: DateTime.fromObject({ year: 2019, month: 11 }),
          end: DateTime.fromObject({ year: 2020, month: 3 }),
        },
      },
    ],
  },
  {
    company: companies.GETMORE,
    period: {
      start: DateTime.fromObject({ year: 2019, month: 3 }),
      end: DateTime.fromObject({ year: 2019, month: 9 }),
    },
    stack: [
      {
        label: "adobe",
        children: [{ label: "photoshop" }, { label: "illustrator" }],
      },
      { label: "figma" },
    ],
    positions: [
      {
        title: "UX Designer",
        description:
          "Designed brand-aligned communication materials with focus on visual consistency.",
        period: {
          start: DateTime.fromObject({ year: 2019, month: 6 }),
          end: DateTime.fromObject({ year: 2019, month: 9 }),
        },
      },
      {
        title: "Design Intern",
        description:
          "Created internal and external communication materials following brand guidelines.",
        period: {
          start: DateTime.fromObject({ year: 2019, month: 3 }),
          end: DateTime.fromObject({ year: 2019, month: 6 }),
        },
      },
    ],
  },
];

export default function Experience() {
  return (
    <div aria-label="Experience spacing" className="md:px-12">
      {experiences.map((experience) => (
        <div key={experience.company.name}>
          <Parent
            img={experience.company.logo}
            name={experience.company.name}
            start={experience.period.start.toFormat("MMM yyyy")}
            end={experience.period.end?.toFormat("MMM yyyy") ?? "Present"}
          />
          {experience.positions.map(({ title, description, period }) => (
            <Child
              key={title}
              title={title}
              period={period?.end
                ?.diff(period.start, ["months", "years"])
                .years.toString()}
              description={description}
              hasNode
            />
          ))}

          {experience.stack && experience.stack.length > 0 && (
            <Child isLast>
              <div
                aria-label="Technologies section"
                className="mt-4 flex flex-col gap-3 rounded-lg border border-dashed border-neutral-900 p-4 pt-6 dark:border-neutral-200"
              >
                <h5
                  aria-label="Technologies heading"
                  className="absolute inset-0 top-1 left-18 size-min font-serif text-xl md:left-28 dark:text-neutral-400"
                >
                  <div className="relative z-20 size-full px-2 whitespace-nowrap before:absolute before:inset-0 before:-z-10 before:h-6 before:w-full before:bg-neutral-200 dark:before:bg-neutral-900">
                    Core Technologies
                  </div>
                </h5>
                <div
                  aria-label="Technology pills container"
                  className="@container flex flex-wrap gap-4"
                >
                  {experience.stack.map((tech) => (
                    <StackPill key={tech.label} tech={tech} />
                  ))}
                </div>
              </div>
            </Child>
          )}
        </div>
      ))}
      <BigButton icon="hn hn-save" aria-label="Save resume">
        Save Resume
      </BigButton>
    </div>
  );
}
