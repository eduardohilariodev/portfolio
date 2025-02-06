"use client";

import { type CompanyInfo, type ExperienceItem } from "@/app/types";
import BigButton from "@/components/BigButton";
import { StackPill } from "@/components/Stack";
import { Child, Parent } from "@/components/Timeline";

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
    startDate: new Date("2022-03"),
    endDate: new Date("2024-12"),
    stack: [
      { label: "vuejs", children: [{ label: "nuxt" }] },
      { label: "typescript" },
      { label: "python" },
      { label: "laravel" },
      { label: "aws" },
      { label: "docker" },
      { label: "githubactions" },
      { label: "flutter" },
      { label: "mysql" },
    ],
    positions: [
      {
        title: "Software Engineer",
        description:
          "Led development of AI-powered solutions and cloud applications, including a chatbot with sub-minute response times. Implemented subscription systems and optimized development workflows using modern DevOps practices, resulting in improved customer acquisition and system scalability.",
      },
      {
        title: "Junior Software Engineer",
        description:
          "Enhanced and maintained enterprise software platforms, focusing on performance optimization and user experience. Achieved significant improvements in system reliability, user satisfaction, and application performance through systematic testing and debugging processes.",
      },
      {
        title: "UX Designer",
        description: `Spearheaded user interface design initiatives focused on improving accessibility and user engagement across platforms.`,
      },
    ],
  },
  {
    company: companies["Brick Abode"],
    startDate: new Date("2019-11"),
    endDate: new Date("2021-03"),
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
      },
      {
        title: "Production Intern",
        description:
          "Created video content and automated production workflows using industry tools. Improved content delivery efficiency.",
      },
    ],
  },
  {
    company: companies.GETMORE,
    startDate: new Date("2019-03"),
    endDate: new Date("2019-09"),
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
      },
      {
        title: "Design Intern",
        description:
          "Created internal and external communication materials following brand guidelines.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <div aria-label="Experience spacing" className="px-12">
      {experiences.map((experience) => (
        <div key={experience.company.name}>
          <Parent
            img={experience.company.logo}
            name={experience.company.name}
            start={experience.startDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
            end={
              experience.endDate
                ? experience.endDate.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "Present"
            }
          />
          {experience.positions.map(({ title, description }, index, array) => (
            <Child
              key={title}
              title={title}
              description={description}
              isLast={index === array.length - 1}
            />
          ))}

          {experience.stack && experience.stack.length > 0 && (
            <div
              aria-label="Technologies section"
              className="mt-4 flex flex-col gap-3"
            >
              <h5
                aria-label="Technologies heading"
                className="font-serif text-2xl"
              >
                Core Technologies
              </h5>
              <div
                aria-label="Technology pills container"
                className="flex flex-wrap gap-4"
              >
                {experience.stack.map((tech) => (
                  <StackPill key={tech.label} tech={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <BigButton icon="hn hn-save" aria-label="Save resume">
        Save Resume
      </BigButton>
    </div>
  );
}
