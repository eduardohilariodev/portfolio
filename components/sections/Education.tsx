"use client";

import { DateTime } from "luxon";
import { useTranslations } from "next-intl";

import { Child, Parent } from "@/components/layouts/Timeline";

import type { Education } from "@/lib/types";

export default function Education() {
  const t = useTranslations("Education");

  const education: Education[] = [
    {
      title: t("degrees.computerScience.title"),
      degree: t("degrees.computerScience.degree"),
      period: {
        start: DateTime.fromISO("2025-01"),
        end: DateTime.fromISO("2029-01"),
      },
      img: "/grupo_uninter_logo.webp",
      institution: "UNINTER",
      description: t("degrees.computerScience.description"),
    },
    {
      title: t("degrees.design.title"),
      degree: t("degrees.design.degree"),
      period: {
        start: DateTime.fromISO("2016-03"),
        end: DateTime.fromISO("2022-02"),
      },
      img: "/ufsc_logo.webp",
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
            title={edu.title}
            degree={edu.degree}
            description={edu.description}
            isLast={index === education.length - 1}
            status={index === 0 ? "in_progress" : "completed"}
          />
        </div>
      ))}
    </div>
  );
}
