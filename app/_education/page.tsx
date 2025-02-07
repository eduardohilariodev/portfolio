"use client";

import { Child, Parent } from "@/components/Timeline";
import { type Education } from "@/lib/types";

const education: Education[] = [
  {
    degree: "Computer Science, BA",
    endDate: new Date("2029-02"),
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQG5HFi6nWrpQg/company-logo_200_200/company-logo_200_200/0/1655119369480/grupo_uninter_logo?e=1746662400&v=beta&t=v5NVBuHE6N_RY7tOI0_vNlpzstBLVsJrrb-9ygKRg-U",
    institution: "UNINTER",
    startDate: new Date("2025-02"),
    description:
      "Focusing on digital design and user experience, with emphasis on modern design systems and accessibility practices. Developing skills in interaction design and visual communication through practical projects.",
  },
  {
    degree: "Design, BA",
    endDate: new Date("2022-03"),
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQF1YvdM9TWgkg/company-logo_200_200/company-logo_200_200/0/1726172033341/ufsc_logo?e=1746662400&v=beta&t=7CbsZiKoYzMf0bbwOiO-8PP-510WMlkQLBA4AutbZGM",
    institution: "UFSC",
    startDate: new Date("2016-04"),
    description:
      "Studied comprehensive design principles including visual communication, user-centered design, and design thinking methodologies. Participated in research projects focused on interface design and user experience.",
  },
];

export default function Education() {
  return (
    <div className="px-12">
      {education.map((edu, index) => (
        <div key={edu.institution}>
          <Parent
            img={edu.img}
            name={edu.institution}
            start={edu.startDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
            end={edu.endDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          />
          <Child
            hasNode
            title={edu.degree}
            description={edu.description}
            isLast
          />
        </div>
      ))}
    </div>
  );
}
