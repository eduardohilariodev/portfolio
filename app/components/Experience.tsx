"use client";

import Image from "next/image";

import Button from "./Button";
import { StackPill, type StackPillProps } from "./Stack";

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
    positions: [
      {
        title: "Software Engineer",
        projects: [
          {
            description:
              "Worked on both web and mobile fronts to serve companies",
            stack: [
              { label: "flutter" },
              { label: "dart" },
              { label: "figma" },
              // { label: "material design" },
            ],
          },
          {
            description:
              "Led the development of an AI chatbot capable of answering domain-specific natural language queries in under 50 seconds using a database with over 7 years of knowledge.",
            stack: [
              { label: "nuxt" },
              { label: "vuejs" },
              { label: "typescript" },
              { label: "python" },
              { label: "laravel" },
              // { label: "langchain" },
              { label: "aws" },
            ],
          },
          {
            description:
              "Increased customer acquisition by 15% through the integration of a custom Stripe subscription system, simplifying SaaS billing for end users.",
            stack: [
              { label: "vuejs" },
              { label: "laravel" },
              { label: "aws" },
              { label: "mysql" },
            ],
          },
          {
            description:
              "Designed and deployed scalable software solutions, including cloud-hosted applications, while streamlining development pipelines using GitHub Actions and Docker.",
            stack: [
              { label: "docker" },
              { label: "githubactions" },
              { label: "aws" },
            ],
          },
        ],
      },
      {
        title: "Junior Software Engineer",
        projects: [
          {
            description:
              "Enhanced the UX and maintained the Ckreativ ERP platform for over 25 businesses, achieving a 30% increase in user satisfaction scores and a 25% reduction in reported system issues.",
            stack: [
              { label: "vuejs" },
              { label: "laravel" },
              { label: "bootstrap" },
              { label: "aws" },
              { label: "mysql" },
            ],
          },
          {
            description:
              "Contributed to the scalability and maintenance of web and mobile applications, increasing application response speed by 40% and user retention rates by 20%.",
            stack: [{ label: "flutter" }, { label: "git" }],
          },
          {
            description:
              "Streamlined testing and debugging processes to improve platform performance, reducing error resolution time by 50% and ensuring 99.9% system uptime for small to medium-sized businesses.",
            stack: [
              // { label: "postman" },
              { label: "mysql" },
            ],
          },
        ],
      },
      {
        title: "UX Designer",
        projects: [
          {
            description:
              "Designed and tested user interfaces, increasing accessibility and user engagement.",
            stack: [{ label: "figma" }],
          },
        ],
      },
    ],
  },
  {
    company: companies["Brick Abode"],
    startDate: new Date("2019-11"),
    endDate: new Date("2021-03"),
    positions: [
      {
        title: "Technical Content Producer",
        projects: [
          {
            description:
              "Produced and edited videos, managed recording hardware, and optimized workflows using NLE software.",
            stack: [{ label: "adobe" }],
          },
          {
            description:
              "Created a production line for short job proposal videos, automating camera setups, voice capture, and YouTube API integration.",
            stack: [{ label: "adobe" }, { label: "python" }],
          },
        ],
      },
    ],
  },
  {
    company: companies.GETMORE,
    startDate: new Date("2019-03"),
    endDate: new Date("2019-09"),
    positions: [
      {
        title: "UI Designer",
        projects: [
          {
            description:
              "Designed presentations, layouts, and various print materials for company-wide communication.",
            stack: [{ label: "figma" }],
          },
        ],
      },
    ],
  },
];

interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

interface ExperienceItem {
  company: CompanyInfo;
  startDate: Date;
  endDate: Date | null;
  positions: Position[];
}

interface Position {
  title: string;
  projects: Project[];
}

interface Project {
  description: string;
  stack: StackPillProps[];
}

interface CompanyProps {
  img: string;
  name: string;
  start: string;
  end: string;
}
function Company({ img, name, start, end }: CompanyProps) {
  return (
    <div>
      <div className="flex gap-4 text-lg font-light dark:text-white">
        <Image
          src={img}
          alt={`${img} logo`}
          height={80}
          width={80}
          className="object-contain"
        />
        <div className="flex grow items-center justify-between text-2xl">
          <h3>{name}</h3>

          <span>
            {start}&ndash;{end}
          </span>
        </div>
      </div>
    </div>
  );
}

interface PositionProps {
  title: string;
  projects: Project[];
}

function Position({ title, projects }: PositionProps) {
  return (
    <div className="grid grid-flow-row grid-cols-[80px_auto] gap-x-4">
      <div className="ml-0.5 h-6 justify-self-center border-l-3 border-l-white" />
      <div />
      <div className="grid-cols-subgrid place-items-center">
        <div className="ml-0.5 h-8 justify-self-center border-l-3 border-l-white" />
        <div className="size-4 rounded-full bg-white" />
        <div className="ml-0.5 h-8 border-l-3 border-l-white" />
      </div>
      <h4 className="self-center justify-self-start font-serif text-3xl text-white">
        {title}
      </h4>

      {projects.map(({ description, stack }) => (
        <>
          <div className="grid-cols-subgrid place-items-center">
            <div className="ml-0.5 h-2 border-l-3 border-l-white" />
            <div className="size-2 rounded-full bg-white" />
            <div className="ml-0.5 h-full border-l-3 border-l-white" />
          </div>
          <div
            className="mb-6 space-y-4 dark:text-neutral-300"
            key={description}
          >
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
        </>
      ))}
      <div className="ml-0.5 h-18 justify-self-center border-l-3 border-l-white" />
      <div />
    </div>
  );
}

export default function Experience() {
  return (
    <div className="px-12">
      {experiences.map((experience) => (
        <div key={experience.company.name}>
          <Company
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
          {experience.positions.map(({ title, projects }) => (
            <Position title={title} projects={projects} key={title} />
          ))}
        </div>
      ))}
      <Button icon={"hn hn-save"}>Save Resume</Button>
    </div>
  );
}
