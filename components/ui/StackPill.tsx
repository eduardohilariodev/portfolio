import { HTMLAttributes } from "react";

import { BR, ES, GB } from "country-flag-icons/react/3x2";
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
  SiDotnet,
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
  TbBrandAzure,
  TbBrandCSharp,
  TbBrandPowershell,
  TbBrandWindows,
  TbDatabase,
  TbDatabaseCog,
  TbDeviceDesktop,
  TbMessageChatbot,
  TbPalette,
  TbSourceCode,
  TbSql,
  TbTestPipe,
  TbTopologyStar3,
} from "react-icons/tb";

import { cn } from "@/lib/utils/cn";

import type { StackPillProps } from "../../lib/types";

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
  | "windows"
  | "csharp"
  | "aspnet"
  | "azure"
  | "microsoftsqlserver";

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
    background: "hover:bg-[#FF0000]/10 dark:hover:bg-[#FF0000]/10",
    border: "hover:border-[#FF0000]/30 dark:hover:border-[#FF0000]/30",
    color: "hover:text-[#FF0000] dark:hover:text-[#FF0000]",
    icon: SiAdobe,
    label: "Adobe Creative Cloud",
  },
  aftereffects: {
    background: "hover:bg-[#9999FF]/10 dark:hover:bg-[#9999FF]/10",
    border: "hover:border-[#9999FF]/30 dark:hover:border-[#9999FF]/30",
    color: "hover:text-[#9999FF] dark:hover:text-[#9999FF]",
    icon: SiAdobeaftereffects,
    label: "After Effects",
  },
  ansible: {
    background: "hover:bg-[#EE0000]/10 dark:hover:bg-[#EE0000]/10",
    border: "hover:border-[#EE0000]/30 dark:hover:border-[#EE0000]/30",
    color: "hover:text-[#EE0000] dark:hover:text-[#EE0000]",
    icon: TbSourceCode,
    label: "Ansible",
  },
  api: {
    background: "hover:bg-[#6DB33F]/10 dark:hover:bg-[#6DB33F]/10",
    border: "hover:border-[#6DB33F]/30 dark:hover:border-[#6DB33F]/30",
    color: "hover:text-[#6DB33F] dark:hover:text-[#6DB33F]",
    icon: SiApifox,
    label: "API",
  },
  aws: {
    background: "hover:bg-[#FF9900]/10 dark:hover:bg-[#FF9900]/10",
    border: "hover:border-[#FF9900]/30 dark:hover:border-[#FF9900]/30",
    color: "hover:text-[#FF9900] dark:hover:text-[#FF9900]",
    icon: SiAmazon,
    label: "AWS",
  },
  backend: {
    background: "hover:bg-[#68A063]/10 dark:hover:bg-[#68A063]/10",
    border: "hover:border-[#68A063]/30 dark:hover:border-[#68A063]/30",
    color: "hover:text-[#68A063] dark:hover:text-[#68A063]",
    icon: TbDatabaseCog,
    label: "Backend",
  },
  bash: {
    background: "hover:bg-[#4EAA25]/10 dark:hover:bg-[#4EAA25]/10",
    border: "hover:border-[#4EAA25]/30 dark:hover:border-[#4EAA25]/30",
    color: "hover:text-[#4EAA25] dark:hover:text-[#4EAA25]",
    icon: SiGnubash,
    label: "Bash",
  },
  bootstrap: {
    background: "hover:bg-[#7952B3]/10 dark:hover:bg-[#7952B3]/10",
    border: "hover:border-[#7952B3]/30 dark:hover:border-[#7952B3]/30",
    color: "hover:text-[#7952B3] dark:hover:text-[#7952B3]",
    icon: SiBootstrap,
    label: "Bootstrap",
  },
  brazilian: {
    background: "hover:bg-[#009739]/10 dark:hover:bg-[#009739]/10",
    border: "hover:border-[#FEDD00]/30 dark:hover:border-[#FEDD00]/30",
    color: "hover:text-[#FEDD00] dark:hover:text-[#FEDD00]",
    icon: BR,
    label: "Brazilian",
  },
  cloud: {
    background: "hover:bg-[#008080]/10 dark:hover:bg-[#008080]/10",
    border: "hover:border-[#008080]/30 dark:hover:border-[#008080]/30",
    color: "hover:text-[#008080] dark:hover:text-[#008080]",
    icon: TbTopologyStar3,
    label: "Cloud",
  },
  config: {
    background: "hover:bg-[#808080]/10 dark:hover:bg-[#808080]/10",
    border: "hover:border-[#808080]/30 dark:hover:border-[#808080]/30",
    color: "hover:text-[#808080] dark:hover:text-[#808080]",
    icon: TbSourceCode,
    label: "Config",
  },
  css: {
    background: "hover:bg-[#1572B6]/10 dark:hover:bg-[#1572B6]/10",
    border: "hover:border-[#1572B6]/30 dark:hover:border-[#1572B6]/30",
    color: "hover:text-[#1572B6] dark:hover:text-[#1572B6]",
    icon: SiCss3,
    label: "CSS",
  },
  cypress: {
    background: "hover:bg-[#17202C]/10 dark:hover:bg-[#17202C]/10",
    border: "hover:border-[#17202C]/30 dark:hover:border-[#17202C]/30",
    color: "hover:text-[#17202C] dark:hover:text-[#17202C]",
    icon: TbSourceCode,
    label: "Cypress",
  },
  dart: {
    background: "hover:bg-[#00B4AB]/10 dark:hover:bg-[#00B4AB]/10",
    border: "hover:border-[#00B4AB]/30 dark:hover:border-[#00B4AB]/30",
    color: "hover:text-[#00B4AB] dark:hover:text-[#00B4AB]",
    icon: SiDart,
    label: "Dart",
  },
  databases: {
    background: "hover:bg-[#00758F]/10 dark:hover:bg-[#00758F]/10",
    border: "hover:border-[#00758F]/30 dark:hover:border-[#00758F]/30",
    color: "hover:text-[#00758F] dark:hover:text-[#00758F]",
    icon: TbDatabase,
    label: "Databases",
  },
  design: {
    background: "hover:bg-[#FF6B6B]/10 dark:hover:bg-[#FF6B6B]/10",
    border: "hover:border-[#FF6B6B]/30 dark:hover:border-[#FF6B6B]/30",
    color: "hover:text-[#FF6B6B] dark:hover:text-[#FF6B6B]",
    icon: TbPalette,
    label: "Design",
  },
  devops: {
    background: "hover:bg-[#2396ED]/10 dark:hover:bg-[#2396ED]/10",
    border: "hover:border-[#2396ED]/30 dark:hover:border-[#2396ED]/30",
    color: "hover:text-[#2396ED] dark:hover:text-[#2396ED]",
    icon: SiDocker,
    label: "DevOps",
  },
  docker: {
    background: "hover:bg-[#2496ED]/10 dark:hover:bg-[#2496ED]/10",
    border: "hover:border-[#2496ED]/30 dark:hover:border-[#2496ED]/30",
    color: "hover:text-[#2496ED] dark:hover:text-[#2496ED]",
    icon: SiDocker,
    label: "Docker",
  },
  english: {
    background: "hover:bg-[#00247D]/10 dark:hover:bg-[#00247D]/10",
    border: "hover:border-[#CF142B]/30 dark:hover:border-[#CF142B]/30",
    color: "hover:text-[#CF142B] dark:hover:text-[#CF142B]",
    icon: GB,
    label: "English",
  },
  expressjs: {
    background: "hover:bg-[#3E84C9]/10 dark:hover:bg-[#3a9cfc]/10",
    border: "hover:border-[#3E84C9]/30 dark:hover:border-[#3a9cfc]/30",
    color: "hover:text-[#3E84C9] dark:hover:text-[#3a9cfc]",
    icon: SiExpress,
    label: "Express.js",
  },
  fastapi: {
    background: "hover:bg-[#009688]/10 dark:hover:bg-[#009688]/10",
    border: "hover:border-[#009688]/30 dark:hover:border-[#009688]/30",
    color: "hover:text-[#009688] dark:hover:text-[#009688]",
    icon: SiFastapi,
    label: "FastAPI",
  },
  figma: {
    background: "hover:bg-[#F24E1E]/10 dark:hover:bg-[#F24E1E]/10",
    border: "hover:border-[#F24E1E]/30 dark:hover:border-[#F24E1E]/30",
    color: "hover:text-[#F24E1E] dark:hover:text-[#F24E1E]",
    icon: SiFigma,
    label: "Figma",
  },
  flutter: {
    background: "hover:bg-[#1468d4]/10 dark:hover:bg-[#1468d4]/10",
    border: "hover:border-[#1468d4]/30 dark:hover:border-[#1468d4]/30",
    color: "hover:text-[#1468d4] dark:hover:text-[#1468d4]",
    icon: SiFlutter,
    label: "Flutter",
  },
  frontend: {
    background: "hover:bg-[#007BFF]/10 dark:hover:bg-[#007BFF]/10",
    border: "hover:border-[#007BFF]/30 dark:hover:border-[#007BFF]/30",
    color: "hover:text-[#007BFF] dark:hover:text-[#007BFF]",
    icon: TbAppWindow,
    label: "Frontend",
  },
  fullstack: {
    background: "hover:bg-[#6C5CE7]/10 dark:hover:bg-[#6C5CE7]/10",
    border: "hover:border-[#6C5CE7]/30 dark:hover:border-[#6C5CE7]/30",
    color: "hover:text-[#6C5CE7] dark:hover:text-[#6C5CE7]",
    icon: TbTopologyStar3,
    label: "Fullstack",
  },
  git: {
    background: "hover:bg-[#F05032]/10 dark:hover:bg-[#F05032]/10",
    border: "hover:border-[#F05032]/30 dark:hover:border-[#F05032]/30",
    color: "hover:text-[#F05032] dark:hover:text-[#F05032]",
    icon: SiGit,
    label: "Git",
  },
  githubactions: {
    background:
      "hover:bg-[#000000]/0 dark:bg-[#ffffff]/0 hover:bg-[#000000]/dark:0 dark:bg-[#ffffff]/0",
    border:
      "hover:border-[#000000]/30 dark:border-[#ffffff]/30 hover:border-[#000000]/30 dark:dark:border-[#ffffff]/30",
    color:
      "hover:text-[#000000]/75 dark:text-[#ffffff]/75 hover:text-[#000000]/75 dark:dark:text-[#ffffff]/75",
    icon: SiGithubactions,
    label: "GitHub Actions",
  },
  grafana: {
    background: "hover:bg-[#F46800]/10 dark:hover:bg-[#F46800]/10",
    border: "hover:border-[#F46800]/30 dark:hover:border-[#F46800]/30",
    color: "hover:text-[#F46800] dark:hover:text-[#F46800]",
    icon: TbSourceCode,
    label: "Grafana",
  },
  graphql: {
    background: "hover:bg-[#e80d9a]/10 dark:hover:bg-[#e80d9a]/10",
    border: "hover:border-[#e80d9a]/30 dark:hover:border-[#e80d9a]/30",
    color: "hover:text-[#e80d9a] dark:hover:text-[#e80d9a]",
    icon: SiGraphql,
    label: "GraphQL",
  },
  html: {
    background: "hover:bg-[#E34F26]/10 dark:hover:bg-[#E34F26]/10",
    border: "hover:border-[#E34F26]/30 dark:hover:border-[#E34F26]/30",
    color: "hover:text-[#E34F26] dark:hover:text-[#E34F26]",
    icon: TbSourceCode,
    label: "HTML",
  },
  illustrator: {
    background: "hover:bg-[#FF9A00]/10 dark:hover:bg-[#FF9A00]/10",
    border: "hover:border-[#FF9A00]/30 dark:hover:border-[#FF9A00]/30",
    color: "hover:text-[#FF9A00] dark:hover:text-[#FF9A00]",
    icon: SiAdobeillustrator,
    label: "Illustrator",
  },
  javascript: {
    background: "hover:bg-[#CF9F38]/10 dark:hover:bg-[#f1db3a]/10",
    border: "hover:border-[#CF9F38]/30 dark:hover:border-[#f1db3a]/30",
    color: "hover:text-[#CF9F38] dark:hover:text-[#f1db3a]",
    icon: SiJavascript,
    label: "JavaScript",
  },
  jest: {
    background: "hover:bg-[#C21325]/10 dark:hover:bg-[#C21325]/10",
    border: "hover:border-[#C21325]/30 dark:hover:border-[#C21325]/30",
    color: "hover:text-[#C21325] dark:hover:text-[#C21325]",
    icon: SiJest,
    label: "Jest",
  },
  jquery: {
    background: "hover:bg-[#0769AD]/10 dark:hover:bg-[#0769AD]/10",
    border: "hover:border-[#0769AD]/30 dark:hover:border-[#0769AD]/30",
    color: "hover:text-[#0769AD] dark:hover:text-[#0769AD]",
    icon: SiJquery,
    label: "jQuery",
  },
  kubernetes: {
    background: "hover:bg-[#326CE5]/10 dark:hover:bg-[#326CE5]/10",
    border: "hover:border-[#326CE5]/30 dark:hover:border-[#326CE5]/30",
    color: "hover:text-[#326CE5] dark:hover:text-[#326CE5]",
    icon: TbSourceCode,
    label: "Kubernetes",
  },
  languages: {
    background: "hover:bg-[#4CAF50]/10 dark:hover:bg-[#4CAF50]/10",
    border: "hover:border-[#4CAF50]/30 dark:hover:border-[#4CAF50]/30",
    color: "hover:text-[#4CAF50] dark:hover:text-[#4CAF50]",
    icon: TbMessageChatbot,
    label: "Spoken",
  },
  laravel: {
    background: "hover:bg-[#ed4733]/10 dark:hover:bg-[#ed4733]/10",
    border: "hover:border-[#ed4733]/30 dark:hover:border-[#ed4733]/30",
    color: "hover:text-[#ed4733] dark:hover:text-[#ed4733]",
    icon: SiLaravel,
    label: "Laravel",
  },
  libraries: {
    background: "hover:bg-[#61DAFB]/10 dark:hover:bg-[#61DAFB]/10",
    border: "hover:border-[#61DAFB]/30 dark:hover:border-[#61DAFB]/30",
    color: "hover:text-[#61DAFB] dark:hover:text-[#61DAFB]",
    icon: TbAppWindow,
    label: "Libraries",
  },
  linux: {
    background: "hover:bg-[#FCC624]/10 dark:hover:bg-[#FCC624]/10",
    border: "hover:border-[#FCC624]/30 dark:hover:border-[#FCC624]/30",
    color: "hover:text-[#FCC624] dark:hover:text-[#FCC624]",
    icon: SiLinux,
    label: "Linux",
  },
  macos: {
    background: "hover:bg-[#FFFFFF]/10 dark:hover:bg-[#FFFFFF]/10",
    border: "hover:border-[#FFFFFF]/30 dark:hover:border-[#FFFFFF]/30",
    color: "hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF]",
    icon: TbBrandApple,
    label: "macOS",
  },
  mariadb: {
    background: "hover:bg-[#28748b]/10 dark:hover:bg-[#28748b]/10",
    border: "hover:border-[#28748b]/30 dark:hover:border-[#28748b]/30",
    color: "hover:text-[#28748b] dark:hover:text-[#28748b]",
    icon: SiMariadb,
    label: "MariaDB",
  },
  markdown: {
    background: "hover:bg-[#000000]/10 dark:hover:bg-[#000000]/10",
    border: "hover:border-[#000000]/30 dark:hover:border-[#000000]/30",
    color: "hover:text-[#000000] dark:hover:text-[#000000]",
    icon: TbSourceCode,
    label: "Markdown",
  },
  mobile: {
    background: "hover:bg-[#4CAF50]/10 dark:hover:bg-[#4CAF50]/10",
    border: "hover:border-[#4CAF50]/30 dark:hover:border-[#4CAF50]/30",
    color: "hover:text-[#4CAF50] dark:hover:text-[#4CAF50]",
    icon: TbBrandApple,
    label: "Mobile",
  },
  mongodb: {
    background: "hover:bg-[#5de96c]/10 dark:hover:bg-[#5de96c]/10",
    border: "hover:border-[#5de96c]/30 dark:hover:border-[#5de96c]/30",
    color: "hover:text-[#5de96c] dark:hover:text-[#5de96c]",
    icon: SiMongodb,
    label: "MongoDB",
  },
  mysql: {
    background: "hover:bg-[#ea9529]/10 dark:hover:bg-[#ea9529]/10",
    border: "hover:border-[#ea9529]/30 dark:hover:border-[#ea9529]/30",
    color: "hover:text-[#ea9529] dark:hover:text-[#ea9529]",
    icon: SiMysql,
    label: "MySQL",
  },
  nextjs: {
    background:
      "hover:bg-[#000000]/0 dark:bg-[#ffffff]/0 hover:bg-[#000000]/dark:0 dark:bg-[#ffffff]/0",
    border:
      "hover:border-[#000000]/30 dark:border-[#ffffff]/30 hover:border-[#000000]/30 dark:dark:border-[#ffffff]/30",
    color:
      "hover:text-[#000000]/75 dark:text-[#ffffff]/75 hover:text-[#000000]/75 dark:dark:text-[#ffffff]/75",
    icon: SiNextdotjs,
    label: "Next.js",
  },
  nginx: {
    background: "hover:bg-[#38933f]/10 dark:hover:bg-[#38933f]/10",
    border: "hover:border-[#38933f]/30 dark:hover:border-[#38933f]/30",
    color: "hover:text-[#38933f] dark:hover:text-[#38933f]",
    icon: SiNginx,
    label: "Nginx",
  },
  nodejs: {
    background: "hover:bg-[#339933]/10 dark:hover:bg-[#339933]/10",
    border: "hover:border-[#339933]/30 dark:hover:border-[#339933]/30",
    color: "hover:text-[#339933] dark:hover:text-[#339933]",
    icon: SiNodedotjs,
    label: "Node.js",
  },
  nuxt: {
    background: "hover:bg-[#00DC82]/10 dark:hover:bg-[#00DC82]/10",
    border: "hover:border-[#00DC82]/30 dark:hover:border-[#00DC82]/30",
    color: "hover:text-[#00DC82] dark:hover:text-[#00DC82]",
    icon: SiNuxtdotjs,
    label: "Nuxt",
  },
  os: {
    background: "hover:bg-[#808080]/10 dark:hover:bg-[#808080]/10",
    border: "hover:border-[#808080]/30 dark:hover:border-[#808080]/30",
    color: "hover:text-[#808080] dark:hover:text-[#808080]",
    icon: TbDeviceDesktop,
    label: "Operating Systems",
  },
  other: {
    background: "hover:bg-[#808080]/10 dark:hover:bg-[#808080]/10",
    border: "hover:border-[#808080]/30 dark:hover:border-[#808080]/30",
    color: "hover:text-[#808080] dark:hover:text-[#808080]",
    icon: TbSourceCode,
    label: "Other",
  },
  photoshop: {
    background: "hover:bg-[#31A8FF]/10 dark:hover:bg-[#31A8FF]/10",
    border: "hover:border-[#31A8FF]/30 dark:hover:border-[#31A8FF]/30",
    color: "hover:text-[#31A8FF] dark:hover:text-[#31A8FF]",
    icon: SiAdobephotoshop,
    label: "Photoshop",
  },
  php: {
    background: "hover:bg-[#4f5b91]/10 dark:hover:bg-[#4f5b91]/10",
    border: "hover:border-[#4f5b91]/30 dark:hover:border-[#4f5b91]/30",
    color: "hover:text-[#4f5b91] dark:hover:text-[#4f5b91]",
    icon: SiPhp,
    label: "PHP",
  },
  postgresql: {
    background: "hover:bg-[#6f9dc8]/10 dark:hover:bg-[#6f9dc8]/10",
    border: "hover:border-[#6f9dc8]/30 dark:hover:border-[#6f9dc8]/30",
    color: "hover:text-[#6f9dc8] dark:hover:text-[#6f9dc8]",
    icon: SiPostgresql,
    label: "PostgreSQL",
  },
  premiere: {
    background: "hover:bg-[#EA77FF]/10 dark:hover:bg-[#EA77FF]/10",
    border: "hover:border-[#EA77FF]/30 dark:hover:border-[#EA77FF]/30",
    color: "hover:text-[#EA77FF] dark:hover:text-[#EA77FF]",
    icon: SiAdobepremierepro,
    label: "Premiere Pro",
  },
  programming: {
    background: "hover:bg-[#3178C6]/10 dark:hover:bg-[#3178C6]/10",
    border: "hover:border-[#3178C6]/30 dark:hover:border-[#3178C6]/30",
    color: "hover:text-[#3178C6] dark:hover:text-[#3178C6]",
    icon: TbSourceCode,
    label: "Programming",
  },
  prometheus: {
    background: "hover:bg-[#E6522C]/10 dark:hover:bg-[#E6522C]/10",
    border: "hover:border-[#E6522C]/30 dark:hover:border-[#E6522C]/30",
    color: "hover:text-[#E6522C] dark:hover:text-[#E6522C]",
    icon: TbSourceCode,
    label: "Prometheus",
  },
  puppeteer: {
    background: "hover:bg-[#40B5A4]/10 dark:hover:bg-[#40B5A4]/10",
    border: "hover:border-[#40B5A4]/30 dark:hover:border-[#40B5A4]/30",
    color: "hover:text-[#40B5A4] dark:hover:text-[#40B5A4]",
    icon: SiPuppeteer,
    label: "Puppeteer",
  },
  pwsh: {
    background: "hover:bg-[#1e77d1]/10 dark:hover:bg-[#1e77d1]/10",
    border: "hover:border-[#1e77d1]/30 dark:hover:border-[#1e77d1]/30",
    color: "hover:text-[#1e77d1] dark:hover:text-[#1e77d1]",
    icon: TbBrandPowershell,
    label: "PowerShell",
  },
  python: {
    background: "hover:bg-[#3c6d9b]/10 dark:hover:bg-[#3c6d9b]/10",
    border: "hover:border-[#3c6d9b]/30 dark:hover:border-[#3c6d9b]/30",
    color: "hover:text-[#3c6d9b] dark:hover:text-[#3c6d9b]",
    icon: SiPython,
    label: "Python",
  },
  reactjs: {
    background: "hover:bg-[#6bc2db]/10 dark:hover:bg-[#6bc2db]/10",
    border: "hover:border-[#6bc2db]/30 dark:hover:border-[#6bc2db]/30",
    color: "hover:text-[#6bc2db] dark:hover:text-[#6bc2db]",
    icon: SiReact,
    label: "React.js",
  },
  reactnative: {
    background: "hover:bg-[#6bc2db]/10 dark:hover:bg-[#6bc2db]/10",
    border: "hover:border-[#6bc2db]/30 dark:hover:border-[#6bc2db]/30",
    color: "hover:text-[#6bc2db] dark:hover:text-[#6bc2db]",
    icon: SiReact,
    label: "React Native",
  },
  sass: {
    background: "hover:bg-[#CC6699]/10 dark:hover:bg-[#CC6699]/10",
    border: "hover:border-[#CC6699]/30 dark:hover:border-[#CC6699]/30",
    color: "hover:text-[#CC6699] dark:hover:text-[#CC6699]",
    icon: SiSass,
    label: "Sass",
  },
  spanish: {
    background: "hover:bg-[#C60B1E]/10 dark:hover:bg-[#C60B1E]/10",
    border: "hover:border-[#C60B1E]/30 dark:hover:border-[#C60B1E]/30",
    color: "hover:text-[#C60B1E] dark:hover:text-[#C60B1E]",
    icon: ES,
    label: "Spanish",
  },
  sqlite: {
    background: "hover:bg-[#297fc9]/10 dark:hover:bg-[#297fc9]/10",
    border: "hover:border-[#297fc9]/30 dark:hover:border-[#297fc9]/30",
    color: "hover:text-[#297fc9] dark:hover:text-[#297fc9]",
    icon: SiSqlite,
    label: "SQLite",
  },
  tailwindcss: {
    background: "hover:bg-[#06B6D4]/10 dark:hover:bg-[#06B6D4]/10",
    border: "hover:border-[#06B6D4]/30 dark:hover:border-[#06B6D4]/30",
    color: "hover:text-[#06B6D4] dark:hover:text-[#06B6D4]",
    icon: SiTailwindcss,
    label: "Tailwind CSS",
  },
  testing: {
    background: "hover:bg-[#FF6B6B]/10 dark:hover:bg-[#FF6B6B]/10",
    border: "hover:border-[#FF6B6B]/30 dark:hover:border-[#FF6B6B]/30",
    color: "hover:text-[#FF6B6B] dark:hover:text-[#FF6B6B]",
    icon: TbTestPipe,
    label: "Testing",
  },
  typescript: {
    background: "hover:bg-[#3178C6]/10 dark:hover:bg-[#3178C6]/10",
    border: "hover:border-[#3178C6]/30 dark:hover:border-[#3178C6]/30",
    color: "hover:text-[#3178C6] dark:hover:text-[#3178C6]",
    icon: SiTypescript,
    label: "TypeScript",
  },
  vercel: {
    background: "hover:bg-[#000000]/10 dark:hover:bg-[#ffffff]/10",
    border: "hover:border-[#000000]/30 dark:hover:border-[#ffffff]/30",
    color: "hover:text-[#000000] dark:hover:text-[#ffffff]",
    icon: SiVercel,
    label: "Vercel",
  },
  vite: {
    background: "hover:bg-[#ad4bfa]/10 dark:hover:bg-[#ad4bfa]/10",
    border: "hover:border-[#ad4bfa]/30 dark:hover:border-[#ad4bfa]/30",
    color: "hover:text-[#ad4bfa] dark:hover:text-[#ad4bfa]",
    icon: SiVite,
    label: "Vite",
  },
  vitest: {
    background: "hover:bg-[#7a9a2a]/10 dark:hover:bg-[#7a9a2a]/10",
    border: "hover:border-[#7a9a2a]/30 dark:hover:border-[#7a9a2a]/30",
    color: "hover:text-[#7a9a2a] dark:hover:text-[#7a9a2a]",
    icon: SiVitest,
    label: "Vitest",
  },
  vuejs: {
    background: "hover:bg-[#42b883]/10 dark:hover:bg-[#42b883]/10",
    border: "hover:border-[#42b883]/30 dark:hover:border-[#42b883]/30",
    color: "hover:text-[#42b883] dark:hover:text-[#42b883]",
    icon: SiVuedotjs,
    label: "Vue.js",
  },
  webpack: {
    background: "hover:bg-[#5d99c6]/10 dark:hover:bg-[#5d99c6]/10",
    border: "hover:border-[#5d99c6]/30 dark:hover:border-[#5d99c6]/30",
    color: "hover:text-[#5d99c6] dark:hover:text-[#5d99c6]",
    icon: SiWebpack,
    label: "Webpack",
  },
  windows: {
    background: "hover:bg-[#1866b5]/10 dark:hover:bg-[#FF0000]/10",
    border: "hover:border-[#1866b5]/30 dark:hover:border-[#1866b5]/30",
    color: "hover:text-[#1866b5] dark:hover:text-[#1866b5]",
    icon: TbBrandWindows,
    label: "Windows",
  },
  csharp: {
    background: "hover:bg-[#239120]/10 dark:hover:bg-[#239120]/10",
    border: "hover:border-[#239120]/30 dark:hover:border-[#239120]/30",
    color: "hover:text-[#239120] dark:hover:text-[#239120]",
    icon: TbBrandCSharp,
    label: "C#",
  },
  aspnet: {
    background: "hover:bg-[#239120]/10 dark:hover:bg-[#239120]/10",
    border: "hover:border-[#239120]/30 dark:hover:border-[#239120]/30",
    color: "hover:text-[#239120] dark:hover:text-[#239120]",
    icon: SiDotnet,
    label: "ASP.NET",
  },
  azure: {
    background: "hover:bg-[#239120]/10 dark:hover:bg-[#239120]/10",
    border: "hover:border-[#239120]/30 dark:hover:border-[#239120]/30",
    color: "hover:text-[#239120] dark:hover:text-[#239120]",
    icon: TbBrandAzure,
    label: "Azure",
  },
  microsoftsqlserver: {
    background: "hover:bg-[#239120]/10 dark:hover:bg-[#239120]/10",
    border: "hover:border-[#239120]/30 dark:hover:border-[#239120]/30",
    color: "hover:text-[#239120] dark:hover:text-[#239120]",
    icon: TbSql,
    label: "Microsoft SQL Server",
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

  return (
    <div
      className={cn(
        `flex cursor-default items-center bg-neutral-200 dark:bg-neutral-900`,
        borderRadius,
      )}
      {...props}
    >
      <div
        className={cn(
          `flex items-center border-1 @max-sm:max-w-96 @max-sm:flex-col`,
          tech.children && "@max-sm:items-start @max-sm:p-1",
          "border-neutral-900 bg-neutral-200 dark:border-neutral-200/30 dark:bg-neutral-900",
          borderRadius,
          border,
          background,
          color,
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 px-2 py-1",
            "text-neutral-900 dark:text-neutral-200",
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
