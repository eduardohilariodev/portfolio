"use client";

import { DateTime } from "luxon";
import { useTranslations } from "next-intl";

import { Child, Parent } from "@/components/Timeline";

import type { Education } from "@/lib/types";

export default function Education() {
  const t = useTranslations("Education");

  const education: Education[] = [
    {
      degree: t("degrees.computerScience.title"),
      period: {
        start: DateTime.fromISO("2025-01"),
        end: DateTime.fromISO("2029-01"),
      },
      img: "https://media.licdn.com/dms/image/v2/C4E0BAQG5HFi6nWrpQg/company-logo_200_200/company-logo_200_200/0/1655119369480/grupo_uninter_logo?e=1746662400&v=beta&t=v5NVBuHE6N_RY7tOI0_vNlpzstBLVsJrrb-9ygKRg-U",
      institution: "UNINTER",
      description: t("degrees.computerScience.description"),
    },
    {
      degree: t("degrees.design.title"),
      period: {
        start: DateTime.fromISO("2016-03"),
        end: DateTime.fromISO("2022-03"),
      },
      img: "https://media.licdn.com/dms/image/v2/D4D0BAQF1YvdM9TWgkg/company-logo_200_200/company-logo_200_200/0/1726172033341/ufsc_logo?e=1746662400&v=beta&t=7CbsZiKoYzMf0bbwOiO-8PP-510WMlkQLBA4AutbZGM",
      institution: "UFSC",
      description: t("degrees.design.description"),
    },
  ];

  return (
    <div className="">
      {education.map((edu, index) => (
        <div key={edu.institution}>
          <Parent img={edu.img} name={edu.institution} period={edu.period} />
          <Child
            hasNode
            title={edu.degree}
            description={edu.description}
            isLast={index === education.length - 1}
            status={index === 0 ? "in_progress" : "completed"}
          />
        </div>
      ))}
    </div>
  );
}
