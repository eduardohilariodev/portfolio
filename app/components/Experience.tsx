"use client";

import Image from "next/image";
import { getTimePeriod } from "../utils/date";
import type { StackPillProps } from "./StackPill";
import StackPill from "./StackPill";
import { Timeline, TimelineItem } from "./Timeline";

interface Project {
  name: string;
  description: string;
  stack: StackPillProps["tech"][];
}

interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

interface Experience {
  title: string;
  company: CompanyInfo;
  startDate: Date;
  endDate: Date | null;
  projects: Project[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Timeline>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
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
                      className="text-orange-600 dark:text-orange-400 hover:underline"
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
                <TimelineItem
                  key={pIndex}
                  isNested
                >
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                      {project.name}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    {project.stack.length > 0 && (
                      <div className="flex gap-2 flex-wrap mt-4">
                        {project.stack.map((tech) => (
                          <StackPill
                            key={tech}
                            tech={tech}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
