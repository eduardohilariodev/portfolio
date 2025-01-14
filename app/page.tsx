import Image from "next/image";
import Link from "next/link";
import StackPill from "./components/StackPill";
import { getTimePeriod } from "./utils/date";

const experiences = [
  {
    title: "Software Engineer",
    company: "gbbs – Goodbye Blue Sky",
    startDate: new Date("2022-03"),
    endDate: null,
    description: [
      "Positively impacted 500+ sales professionals across more than four Brazilian states by enhancing the UX of the B2B sales app. Increased user satisfaction and adoption rate, significantly reducing support tickets and shortening the time-to-sale user journey.",
      "Directly assisted dozens of small-to-large clients with UX improvements and maintenance of the ERP system. Bootstrapped and managed the development of an AI chatbot, incorporating context from the company's domain-specific internal knowledge.",
      "Streamlined the branding of the product ecosystem by adhering to Material Design guidelines, creating greater visual cohesion across the company.",
    ],
    stack: [
      "flutter",
      "vue",
      "laravel",
      "python",
      "docker",
      "aws",
      "git",
      "figma",
    ] as const,
  },
  {
    title: "Content Producer",
    company: "Brick Abode",
    startDate: new Date("2019-11"),
    endDate: new Date("2021-03"),
    description: [
      "Produced and edited audiovisual materials using NLE software, and managed recording hardware. Developed a production line for short, self-recorded 200+ job proposal videos, including camera setup, voice capture, green screening, lighting, and automated editing for YouTube API integration.",
    ],
    stack: [] as const,
  },
  {
    title: "UI Designer",
    company: "GETMORE",
    startDate: new Date("2019-03"),
    endDate: new Date("2019-09"),
    description: [
      "Served as a design generalist, creating dozens of presentations and layouts for print and other media, for internal and external company communication efforts. Specialized in UI design, developing wireframes and prototypes of varying complexity for key clients, and designed email marketing layouts.",
    ],
    stack: ["figma"] as const,
  },
];

const education = [
  {
    school: "Universidade Federal de Santa Catarina",
    degree: "Bachelor's degree, Design",
    startDate: new Date("2016-03"),
    endDate: new Date("2022-02"),
  },
];

export default function Home() {
  return (
    <div className="space-y-32">
      {/* About Section */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-20"
      >
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
            About
          </h1>

          <div className="space-y-4 text-lg">
            <p className="text-gray-600 dark:text-gray-400 italic">
              Just your average dev...
            </p>

            <p>
              I'm Eduardo, a software engineer passionate about building great
              user experiences and solving complex problems.
            </p>

            <p>
              I specialize in frontend development with React and TypeScript,
              but I'm also experienced with backend technologies. I love working
              with modern web technologies and exploring new ways to make
              applications faster and more user-friendly.
            </p>

            <p>
              When I'm not coding, you'll find me gaming, reading tech blogs, or
              contributing to open-source projects.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/blog"
              className="inline-block px-6 py-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-500/20 transition"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="inline-block px-6 py-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-500/20 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-md hover:bg-teal-500/20 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[300px] mx-auto">
          <Image
            src="/pro_v2_sq.png"
            alt="Eduardo's profile picture"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="space-y-8 pt-20"
      >
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-teal-600/20 dark:border-teal-400/20"
            >
              <div className="absolute w-4 h-4 bg-teal-600 dark:bg-teal-400 rounded-full -left-[9px] top-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  {exp.title} @ {exp.company}
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
                {exp.description.map((desc, i) => (
                  <p
                    key={i}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {desc}
                  </p>
                ))}
                {exp.stack.length > 0 && (
                  <div className="flex gap-2 flex-wrap mt-2">
                    {exp.stack.map((tech) => (
                      <StackPill
                        key={tech}
                        tech={tech}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="space-y-8 pt-20"
      >
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
          Education
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-teal-600/20 dark:border-teal-400/20"
            >
              <div className="absolute w-4 h-4 bg-teal-600 dark:bg-teal-400 rounded-full -left-[9px] top-0" />
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
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="space-y-8 pt-20"
      >
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
          Contact
        </h2>
        <div className="space-y-4">
          <p className="text-lg">
            Feel free to reach out to me through any of these channels:
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:eduardohilariodev@pm.me"
              className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span className="font-medium">eduardohilariodev@pm.me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eduardohilariodev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
