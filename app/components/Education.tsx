"use client";

import { Timeline, TimelineItem } from "./Timeline";

interface Education {
  school: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

interface EducationProps {
  education: Education[];
}

export default function Education({ education }: EducationProps) {
  return (
    <Timeline>
      {education.map((edu, index) => (
        <TimelineItem key={index}>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{edu.school}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {edu.degree} · (
              {edu.startDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}{" "}
              -{" "}
              {edu.endDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
              )
            </p>
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
