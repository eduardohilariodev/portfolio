"use client";

import Image from "next/image";
import { getTimePeriod } from "../utils/date";
import type { StackPillProps } from "./Stack";
import { Timeline, TimelineItem } from "./Timeline";

interface Project {
  name: string;
  description: string;
  stack: StackPillProps[];
}

interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

interface ExperienceDatum {
  title: string;
  company: CompanyInfo;
  startDate: Date;
  endDate: Date | null;
  projects: Project[];
}

interface ExperienceProps {
  experiences: ExperienceDatum[];
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
        <div className="flex grow items-center justify-between">
          <h4>{name}</h4>
          <span>
            {start}&ndash;{end}
          </span>
        </div>
      </div>
      <div className="ml-[40px] h-12 border-l-3 border-l-white" />
    </div>
  );
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="px-12">
      {experiences.map((exp) => (
        <Company
          key={exp.company.name}
          img={exp.company.logo}
          name={exp.company.name}
          start={exp.startDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
          end={
            exp.endDate
              ? exp.endDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              : "Present"
          }
        />
      ))}
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={exp.company.logo}
                      alt={`${exp.company.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {exp.title} @{" "}
                      <a
                        href={exp.company.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline dark:text-orange-400"
                      >
                        {exp.company.name}
                      </a>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.startDate.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {exp.endDate
                        ? exp.endDate.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Present"}{" "}
                      ({getTimePeriod(exp.startDate, exp.endDate || undefined)})
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-12">
                {exp.projects.map((project, pIndex) => (
                  <TimelineItem key={pIndex} isNested>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                        {project.name}
                      </h4>
                      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                      {/* {project.stack.length > 0 && (
                        // <div className="mt-4 flex flex-wrap gap-2">
                        //   {project.stack.map((tech) => (
                        //     <StackPill key={tech.label} tech={tech} />
                        //   ))}
                        // </div>
                      )} */}
                    </div>
                  </TimelineItem>
                ))}
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
