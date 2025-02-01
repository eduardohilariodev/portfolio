"use client";

import Image from "next/image";
import { Timeline, TimelineItem } from "./Timeline";

interface Education {
  img: string;
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

const education: Education[] = [
  {
    degree: "Bachelor's degree, Design",
    endDate: new Date("2029-01"),
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQG5HFi6nWrpQg/company-logo_200_200/company-logo_200_200/0/1655119369480/grupo_uninter_logo?e=1746662400&v=beta&t=v5NVBuHE6N_RY7tOI0_vNlpzstBLVsJrrb-9ygKRg-U",
    institution: "UNINTER",
    startDate: new Date("2025-01"),
  },
  {
    degree: "Bachelor's degree, Design",
    endDate: new Date("2022-02"),
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQF1YvdM9TWgkg/company-logo_200_200/company-logo_200_200/0/1726172033341/ufsc_logo?e=1746662400&v=beta&t=7CbsZiKoYzMf0bbwOiO-8PP-510WMlkQLBA4AutbZGM",
    institution: "Universidade Federal de Santa Catarina",
    startDate: new Date("2016-03"),
  },
];

export default function Education() {
  return (
    <Timeline>
      {education.map((edu, index) => (
        <TimelineItem key={index}>
          <div className="flex gap-4">
            <Image
              src={edu.img}
              alt={edu.institution}
              height={12}
              width={12}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
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
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
