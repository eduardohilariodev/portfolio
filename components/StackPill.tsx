import { cn } from "@/lib/utils";
import { BR, ES, GB } from "country-flag-icons/react/3x2";

import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import {
  SiAdobe,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAmazon,
  SiApifox,
  SiBootstrap,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPuppeteer,
  SiPython,
  SiReact,
  SiSass,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";
import {
  TbAppWindow,
  TbBrandApple,
  TbBrandPowershell,
  TbBrandWindows,
  TbDatabase,
  TbDatabaseCog,
  TbDeviceDesktop,
  TbMessageChatbot,
  TbPalette,
  TbSourceCode,
  TbTestPipe,
  TbTopologyStar3,
} from "react-icons/tb";
import type { StackPillProps } from "../lib/types";
export type Tech =
  | "adobe"
  | "aftereffects"
  | "ansible"
  | "api"
  | "aws"
  | "backend"
  | "bash"
  | "bootstrap"
  | "brazilian"
  | "cloud"
  | "config"
  | "css"
  | "cypress"
  | "dart"
  | "databases"
  | "design"
  | "devops"
  | "docker"
  | "english"
  | "expressjs"
  | "fastapi"
  | "figma"
  | "flutter"
  | "frontend"
  | "fullstack"
  | "git"
  | "githubactions"
  | "grafana"
  | "graphql"
  | "html"
  | "illustrator"
  | "javascript"
  | "jest"
  | "jquery"
  | "kubernetes"
  | "languages"
  | "laravel"
  | "libraries"
  | "linux"
  | "macos"
  | "mariadb"
  | "markdown"
  | "mobile"
  | "mongodb"
  | "mysql"
  | "nextjs"
  | "nginx"
  | "nodejs"
  | "nuxt"
  | "os"
  | "other"
  | "photoshop"
  | "php"
  | "postgresql"
  | "premiere"
  | "programming"
  | "prometheus"
  | "puppeteer"
  | "pwsh"
  | "python"
  | "reactjs"
  | "reactnative"
  | "sass"
  | "spanish"
  | "sqlite"
  | "tailwindcss"
  | "testing"
  | "typescript"
  | "vercel"
  | "vite"
  | "vitest"
  | "vuejs"
  | "webpack"
  | "windows";

interface TechConfig {
  icon: IconType;
  color: string;
  background: string;
  border: string;
  label: string;
}

export interface StackGroupProps {
  tech: Tech;
  children: React.ReactNode;
}

type TechStack = Record<Tech, TechConfig>;

const techStack: TechStack = {
  adobe: {
    background: "bg-[#FF0000]/10",
    border: "border-[#FF0000]/30",
    color: "text-[#FF0000]",
    icon: SiAdobe,
    label: "Adobe Creative Cloud",
  },
  aftereffects: {
    background: "bg-[#9999FF]/10",
    border: "border-[#9999FF]/30",
    color: "text-[#9999FF]",
    icon: SiAdobeaftereffects,
    label: "After Effects",
  },
  ansible: {
    background: "bg-[#EE0000]/10",
    border: "border-[#EE0000]/30",
    color: "text-[#EE0000]",
    icon: TbSourceCode,
    label: "Ansible",
  },
  api: {
    background: "bg-[#6DB33F]/10",
    border: "border-[#6DB33F]/30",
    color: "text-[#6DB33F]",
    icon: SiApifox,
    label: "API",
  },
  aws: {
    background: "bg-[#FF9900]/10",
    border: "border-[#FF9900]/30",
    color: "text-[#FF9900]",
    icon: SiAmazon,
    label: "AWS",
  },
  backend: {
    background: "bg-[#68A063]/10",
    border: "border-[#68A063]/30",
    color: "text-[#68A063]",
    icon: TbDatabaseCog,
    label: "Backend",
  },
  bash: {
    background: "bg-[#4EAA25]/10",
    border: "border-[#4EAA25]/30",
    color: "text-[#4EAA25]",
    icon: SiGnubash,
    label: "Bash",
  },
  bootstrap: {
    background: "bg-[#7952B3]/10",
    border: "border-[#7952B3]/30",
    color: "text-[#7952B3]",
    icon: SiBootstrap,
    label: "Bootstrap",
  },
  brazilian: {
    background: "bg-[#009739]/10",
    border: "border-[#FEDD00]/30",
    color: "text-[#FEDD00]",
    icon: BR,
    label: "Brazilian",
  },
  cloud: {
    background: "bg-[#008080]/10",
    border: "border-[#008080]/30",
    color: "text-[#008080]",
    icon: TbTopologyStar3,
    label: "Cloud",
  },
  config: {
    background: "bg-[#808080]/10",
    border: "border-[#808080]/30",
    color: "text-[#808080]",
    icon: TbSourceCode,
    label: "Config",
  },
  css: {
    background: "bg-[#1572B6]/10",
    border: "border-[#1572B6]/30",
    color: "text-[#1572B6]",
    icon: SiCss3,
    label: "CSS",
  },
  cypress: {
    background: "bg-[#17202C]/10",
    border: "border-[#17202C]/30",
    color: "text-[#17202C]",
    icon: TbSourceCode,
    label: "Cypress",
  },
  dart: {
    background: "bg-[#00B4AB]/10",
    border: "border-[#00B4AB]/30",
    color: "text-[#00B4AB]",
    icon: SiDart,
    label: "Dart",
  },
  databases: {
    background: "bg-[#00758F]/10",
    border: "border-[#00758F]/30",
    color: "text-[#00758F]",
    icon: TbDatabase,
    label: "Databases",
  },
  design: {
    background: "bg-[#FF6B6B]/10",
    border: "border-[#FF6B6B]/30",
    color: "text-[#FF6B6B]",
    icon: TbPalette,
    label: "Design",
  },
  devops: {
    background: "bg-[#2396ED]/10",
    border: "border-[#2396ED]/30",
    color: "text-[#2396ED]",
    icon: SiDocker,
    label: "DevOps",
  },
  docker: {
    background: "bg-[#2496ED]/10",
    border: "border-[#2496ED]/30",
    color: "text-[#2496ED]",
    icon: SiDocker,
    label: "Docker",
  },
  english: {
    background: "bg-[#00247D]/10",
    border: "border-[#CF142B]/30",
    color: "text-[#CF142B]",
    icon: GB,
    label: "English",
  },
  expressjs: {
    background: "bg-[#3E84C9]/10 dark:bg-[#3a9cfc]/10",
    border: "border-[#3E84C9]/30 dark:border-[#3a9cfc]/30",
    color: "text-[#3E84C9] dark:text-[#3a9cfc]",
    icon: SiExpress,
    label: "Express.js",
  },
  fastapi: {
    background: "bg-[#009688]/10",
    border: "border-[#009688]/30",
    color: "text-[#009688]",
    icon: SiFastapi,
    label: "FastAPI",
  },
  figma: {
    background: "bg-[#F24E1E]/10",
    border: "border-[#F24E1E]/30",
    color: "text-[#F24E1E]",
    icon: SiFigma,
    label: "Figma",
  },
  flutter: {
    background: "bg-[#1468d4]/10",
    border: "border-[#1468d4]/30",
    color: "text-[#1468d4]",
    icon: SiFlutter,
    label: "Flutter",
  },
  frontend: {
    background: "bg-[#007BFF]/10",
    border: "border-[#007BFF]/30",
    color: "text-[#007BFF]",
    icon: TbAppWindow,
    label: "Frontend",
  },
  fullstack: {
    background: "bg-[#6C5CE7]/10",
    border: "border-[#6C5CE7]/30",
    color: "text-[#6C5CE7]",
    icon: TbTopologyStar3,
    label: "Fullstack",
  },
  git: {
    background: "bg-[#F05032]/10",
    border: "border-[#F05032]/30",
    color: "text-[#F05032]",
    icon: SiGit,
    label: "Git",
  },
  githubactions: {
    background: "bg-[#000000]/0 dark:bg-[#ffffff]/0",
    border: "border-[#000000]/30 dark:border-[#ffffff]/30",
    color: "text-[#000000]/75 dark:text-[#ffffff]/75",
    icon: SiGithubactions,
    label: "GitHub Actions",
  },
  grafana: {
    background: "bg-[#F46800]/10",
    border: "border-[#F46800]/30",
    color: "text-[#F46800]",
    icon: TbSourceCode,
    label: "Grafana",
  },
  graphql: {
    background: "bg-[#e80d9a]/10",
    border: "border-[#e80d9a]/30",
    color: "text-[#e80d9a]",
    icon: SiGraphql,
    label: "GraphQL",
  },
  html: {
    background: "bg-[#E34F26]/10",
    border: "border-[#E34F26]/30",
    color: "text-[#E34F26]",
    icon: TbSourceCode,
    label: "HTML",
  },
  illustrator: {
    background: "bg-[#FF9A00]/10",
    border: "border-[#FF9A00]/30",
    color: "text-[#FF9A00]",
    icon: SiAdobeillustrator,
    label: "Illustrator",
  },
  javascript: {
    background: "bg-[#CF9F38]/10 dark:bg-[#f1db3a]/10",
    border: "border-[#CF9F38]/30 dark:border-[#f1db3a]/30",
    color: "text-[#CF9F38] dark:text-[#f1db3a]",
    icon: SiJavascript,
    label: "JavaScript",
  },
  jest: {
    background: "bg-[#C21325]/10",
    border: "border-[#C21325]/30",
    color: "text-[#C21325]",
    icon: SiJest,
    label: "Jest",
  },
  jquery: {
    background: "bg-[#0769AD]/10",
    border: "border-[#0769AD]/30",
    color: "text-[#0769AD]",
    icon: SiJquery,
    label: "jQuery",
  },
  kubernetes: {
    background: "bg-[#326CE5]/10",
    border: "border-[#326CE5]/30",
    color: "text-[#326CE5]",
    icon: TbSourceCode,
    label: "Kubernetes",
  },
  languages: {
    background: "bg-[#4CAF50]/10",
    border: "border-[#4CAF50]/30",
    color: "text-[#4CAF50]",
    icon: TbMessageChatbot,
    label: "Spoken",
  },
  laravel: {
    background: "bg-[#ed4733]/10",
    border: "border-[#ed4733]/30",
    color: "text-[#ed4733]",
    icon: SiLaravel,
    label: "Laravel",
  },
  libraries: {
    background: "bg-[#61DAFB]/10",
    border: "border-[#61DAFB]/30",
    color: "text-[#61DAFB]",
    icon: TbAppWindow,
    label: "Libraries",
  },
  linux: {
    background: "bg-[#FCC624]/10",
    border: "border-[#FCC624]/30",
    color: "text-[#FCC624]",
    icon: SiLinux,
    label: "Linux",
  },
  macos: {
    background: "bg-[#FFFFFF]/10",
    border: "border-[#FFFFFF]/30",
    color: "text-[#FFFFFF]",
    icon: TbBrandApple,
    label: "macOS",
  },
  mariadb: {
    background: "bg-[#28748b]/10",
    border: "border-[#28748b]/30",
    color: "text-[#28748b]",
    icon: SiMariadb,
    label: "MariaDB",
  },
  markdown: {
    background: "bg-[#000000]/10",
    border: "border-[#000000]/30",
    color: "text-[#000000]",
    icon: TbSourceCode,
    label: "Markdown",
  },
  mobile: {
    background: "bg-[#4CAF50]/10",
    border: "border-[#4CAF50]/30",
    color: "text-[#4CAF50]",
    icon: TbBrandApple,
    label: "Mobile",
  },
  mongodb: {
    background: "bg-[#5de96c]/10",
    border: "border-[#5de96c]/30",
    color: "text-[#5de96c]",
    icon: SiMongodb,
    label: "MongoDB",
  },
  mysql: {
    background: "bg-[#ea9529]/10",
    border: "border-[#ea9529]/30",
    color: "text-[#ea9529]",
    icon: SiMysql,
    label: "MySQL",
  },
  nextjs: {
    background: "bg-[#000000]/0 dark:bg-[#ffffff]/0",
    border: "border-[#000000]/30 dark:border-[#ffffff]/30",
    color: "text-[#000000]/75 dark:text-[#ffffff]/75",
    icon: SiNextdotjs,
    label: "Next.js",
  },
  nginx: {
    background: "bg-[#38933f]/10",
    border: "border-[#38933f]/30",
    color: "text-[#38933f]",
    icon: SiNginx,
    label: "Nginx",
  },
  nodejs: {
    background: "bg-[#339933]/10",
    border: "border-[#339933]/30",
    color: "text-[#339933]",
    icon: SiNodedotjs,
    label: "Node.js",
  },
  nuxt: {
    background: "bg-[#00DC82]/10",
    border: "border-[#00DC82]/30",
    color: "text-[#00DC82]",
    icon: SiNuxtdotjs,
    label: "Nuxt",
  },
  os: {
    background: "bg-[#808080]/10",
    border: "border-[#808080]/30",
    color: "text-[#808080]",
    icon: TbDeviceDesktop,
    label: "Operating Systems",
  },
  other: {
    background: "bg-[#808080]/10",
    border: "border-[#808080]/30",
    color: "text-[#808080]",
    icon: TbSourceCode,
    label: "Other",
  },
  photoshop: {
    background: "bg-[#31A8FF]/10",
    border: "border-[#31A8FF]/30",
    color: "text-[#31A8FF]",
    icon: SiAdobephotoshop,
    label: "Photoshop",
  },
  php: {
    background: "bg-[#4f5b91]/10",
    border: "border-[#4f5b91]/30",
    color: "text-[#4f5b91]",
    icon: SiPhp,
    label: "PHP",
  },
  postgresql: {
    background: "bg-[#6f9dc8]/10",
    border: "border-[#6f9dc8]/30",
    color: "text-[#6f9dc8]",
    icon: SiPostgresql,
    label: "PostgreSQL",
  },
  premiere: {
    background: "bg-[#EA77FF]/10",
    border: "border-[#EA77FF]/30",
    color: "text-[#EA77FF]",
    icon: SiAdobepremierepro,
    label: "Premiere Pro",
  },
  programming: {
    background: "bg-[#3178C6]/10",
    border: "border-[#3178C6]/30",
    color: "text-[#3178C6]",
    icon: TbSourceCode,
    label: "Programming",
  },
  prometheus: {
    background: "bg-[#E6522C]/10",
    border: "border-[#E6522C]/30",
    color: "text-[#E6522C]",
    icon: TbSourceCode,
    label: "Prometheus",
  },
  puppeteer: {
    background: "bg-[#40B5A4]/10",
    border: "border-[#40B5A4]/30",
    color: "text-[#40B5A4]",
    icon: SiPuppeteer,
    label: "Puppeteer",
  },
  pwsh: {
    background: "bg-[#1e77d1]/10",
    border: "border-[#1e77d1]/30",
    color: "text-[#1e77d1]",
    icon: TbBrandPowershell,
    label: "PowerShell",
  },
  python: {
    background: "bg-[#3c6d9b]/10",
    border: "border-[#3c6d9b]/30",
    color: "text-[#3c6d9b]",
    icon: SiPython,
    label: "Python",
  },
  reactjs: {
    background: "bg-[#6bc2db]/10",
    border: "border-[#6bc2db]/30",
    color: "text-[#6bc2db]",
    icon: SiReact,
    label: "React.js",
  },
  reactnative: {
    background: "bg-[#6bc2db]/10",
    border: "border-[#6bc2db]/30",
    color: "text-[#6bc2db]",
    icon: SiReact,
    label: "React Native",
  },
  sass: {
    background: "bg-[#CC6699]/10",
    border: "border-[#CC6699]/30",
    color: "text-[#CC6699]",
    icon: SiSass,
    label: "Sass",
  },
  spanish: {
    background: "bg-[#C60B1E]/10",
    border: "border-[#C60B1E]/30",
    color: "text-[#C60B1E]",
    icon: ES,
    label: "Spanish",
  },
  sqlite: {
    background: "bg-[#297fc9]/10",
    border: "border-[#297fc9]/30",
    color: "text-[#297fc9]",
    icon: SiSqlite,
    label: "SQLite",
  },
  tailwindcss: {
    background: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/30",
    color: "text-[#06B6D4]",
    icon: SiTailwindcss,
    label: "Tailwind CSS",
  },
  testing: {
    background: "bg-[#FF6B6B]/10",
    border: "border-[#FF6B6B]/30",
    color: "text-[#FF6B6B]",
    icon: TbTestPipe,
    label: "Testing",
  },
  typescript: {
    background: "bg-[#3178C6]/10",
    border: "border-[#3178C6]/30",
    color: "text-[#3178C6]",
    icon: SiTypescript,
    label: "TypeScript",
  },
  vercel: {
    background: "bg-[#000000]/0 dark:bg-[#ffffff]/0",
    border: "border-[#000000]/30 dark:border-[#ffffff]/30",
    color: "text-[#000000]/75 dark:text-[#ffffff]/75",
    icon: SiVercel,
    label: "Vercel",
  },
  vite: {
    background: "bg-[#ad4bfa]/10",
    border: "border-[#ad4bfa]/30",
    color: "text-[#ad4bfa]",
    icon: SiVite,
    label: "Vite",
  },
  vitest: {
    background: "bg-[#7a9a2a]/10",
    border: "border-[#7a9a2a]/30",
    color: "text-[#7a9a2a]",
    icon: SiVitest,
    label: "Vitest",
  },
  vuejs: {
    background: "bg-[#42b883]/10",
    border: "border-[#42b883]/30",
    color: "text-[#42b883]",
    icon: SiVuedotjs,
    label: "Vue.js",
  },
  webpack: {
    background: "bg-[#5d99c6]/10",
    border: "border-[#5d99c6]/30",
    color: "text-[#5d99c6]",
    icon: SiWebpack,
    label: "Webpack",
  },
  windows: {
    background: "bg-[#1866b5]/10",
    border: "border-[#1866b5]/30",
    color: "text-[#1866b5]",
    icon: TbBrandWindows,
    label: "Windows",
  },
};

export function StackPill({
  tech,
  ...props
}: { tech: StackPillProps } & HTMLAttributes<HTMLDivElement>) {
  const {
    background,
    border,
    color,
    icon: Icon,
    label,
  } = techStack[tech.label as keyof typeof techStack];
  const borderRadius = "rounded-xs";
  const { hasColor } = tech;

  return (
    <div
      className={cn(
        `inset-0 flex cursor-default items-center bg-neutral-200 before:absolute dark:bg-neutral-900`,
        borderRadius,
      )}
      {...props}
    >
      <div
        className={cn(
          `flex w-fit items-center border-1`,
          borderRadius,
          hasColor
            ? `${background} ${border}`
            : "border-neutral-900 bg-neutral-200 dark:border-neutral-200/30 dark:bg-neutral-900",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 px-2 py-1",
            hasColor ? color : "text-neutral-900 dark:text-neutral-200",
          )}
        >
          <Icon className="size-3.5" />
          <span className="text-xs tracking-wide">{label}</span>
        </div>

        {tech.children && (
          // Children
          <div className="flex flex-wrap items-center gap-2 p-1">
            {tech.children.map((tech) => {
              tech.isChild = true;
              return <StackPill key={tech.label} tech={tech} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const Stack = { StackPill };
export default Stack;
