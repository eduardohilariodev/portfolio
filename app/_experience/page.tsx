"use client";

import { DateTime } from "luxon";
import { useTranslations } from "next-intl";

import BigButton from "@/components/BigButton";
import { StackPill } from "@/components/StackPill";
import { Child, Parent } from "@/components/Timeline";
import { type ExperienceItem } from "@/lib/types";

const experiences: ExperienceItem[] = [
  {
    company: {
      name: "Ckreativ",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGLeuwrogi8bw/company-logo_200_200/company-logo_200_200/0/1710548135771/ckreativ_logo?e=1744848000&v=beta&t=6YZovv4fOMknme-0bOuGi9F9gguN4BNDHob4TNLFZdI",
      linkedIn: "https://www.linkedin.com/company/ckreativ",
    },
    period: {
      start: DateTime.fromObject({ year: 2022, month: 3 }),
      end: DateTime.fromObject({ year: 2024, month: 12 }),
    },
    positions: [
      {
        key: "softwareEngineer",
        period: {
          start: DateTime.fromObject({ year: 2023, month: 3 }),
          end: DateTime.fromObject({ year: 2024, month: 12 }),
        },
      },
      {
        key: "juniorSoftwareEngineer",
        period: {
          start: DateTime.fromObject({ year: 2022, month: 6 }),
          end: DateTime.fromObject({ year: 2023, month: 3 }),
        },
      },
      {
        key: "uxDesigner",
        period: {
          start: DateTime.fromObject({ year: 2022, month: 3 }),
          end: DateTime.fromObject({ year: 2022, month: 6 }),
        },
      },
    ],
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
  },
  {
    company: {
      name: "Brick Abode",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFhRHi0tefe1g/company-logo_200_200/company-logo_200_200/0/1630619625088/brickabode_logo?e=1744848000&v=beta&t=efaIABZOSpz4NqCnbjVAL5GhEbNvVVmW0NGnOVvgKFU",
      linkedIn: "https://www.linkedin.com/company/brickabode",
    },
    period: {
      start: DateTime.fromObject({ year: 2019, month: 11 }),
      end: DateTime.fromObject({ year: 2021, month: 3 }),
    },
    positions: [
      {
        key: "technicalContentProducer",
        period: {
          start: DateTime.fromObject({ year: 2020, month: 3 }),
          end: DateTime.fromObject({ year: 2021, month: 3 }),
        },
      },
      {
        key: "productionIntern",
        period: {
          start: DateTime.fromObject({ year: 2019, month: 11 }),
          end: DateTime.fromObject({ year: 2020, month: 2 }),
        },
      },
    ],
    stack: [
      {
        label: "adobe",
        children: [{ label: "premiere" }, { label: "aftereffects" }],
      },
      { label: "pwsh" },
      { label: "python" },
    ],
  },
  {
    company: {
      name: "GETMORE",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF1TrPLIeswKA/company-logo_200_200/company-logo_200_200/0/1630471547758/getmore_logo?e=1744848000&v=beta&t=sVCwsojd23zNgakotC2LCBnArY70zoNhQLxulL_Nyis",
      linkedIn: "https://www.linkedin.com/company/getmore/",
    },
    period: {
      start: DateTime.fromObject({ year: 2019, month: 3 }),
      end: DateTime.fromObject({ year: 2019, month: 9 }),
    },
    positions: [
      {
        key: "uxDesigner",
        period: {
          start: DateTime.fromObject({ year: 2019, month: 6 }),
          end: DateTime.fromObject({ year: 2019, month: 9 }),
        },
      },
      {
        key: "designIntern",
        period: {
          start: DateTime.fromObject({ year: 2019, month: 3 }),
          end: DateTime.fromObject({ year: 2019, month: 6 }),
        },
      },
    ],
    stack: [
      {
        label: "adobe",
        children: [{ label: "photoshop" }, { label: "illustrator" }],
      },
      { label: "figma" },
    ],
  },
];

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <div aria-label="Experience spacing" className="md:px-12">
      {experiences.map((experience) => (
        <div key={experience.company.name}>
          <Parent
            img={experience.company.logo}
            name={experience.company.name}
            period={experience.period}
          />
          {experience.positions.map(({ key, period }) => (
            <Child
              key={key}
              description={t(`positions.${key}.description`)}
              hasNode
              period={period}
              title={t(`positions.${key}.title`)}
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
                  className="absolute inset-0 top-8 left-18 size-min font-serif text-xl md:top-1 md:left-28 dark:text-neutral-400"
                >
                  <div className="relative z-20 size-full px-2 whitespace-nowrap before:absolute before:inset-0 before:-z-10 before:h-6 before:w-full before:bg-neutral-200 dark:before:bg-neutral-900">
                    {t("coreTechnologies")}
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
      <BigButton
        icon="hn hn-save"
        aria-label={t("saveResumeAria")}
        download="./Eduardo_Hilario_Software_Engineer_Resume.pdf"
      >
        {t("saveResume")}
      </BigButton>
    </div>
  );
}
