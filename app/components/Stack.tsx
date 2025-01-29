import { BR, ES, GB } from "country-flag-icons/react/3x2";

import { IconType } from "react-icons";
import {
  SiAdobe,
  SiAmazon,
  SiApifox,
  SiBootstrap,
  SiCss3,
  SiDart,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";
import {
  TbAppWindow,
  TbBrandApple,
  TbBrandWindows,
  TbDatabase,
  TbDatabaseCog,
  TbMessageChatbot,
  TbSourceCode,
  TbTestPipe,
  TbTopologyStar3,
} from "react-icons/tb";

export interface StackPillProps {
  label: Tech;
  children?: StackPillProps[];
}
interface TechConfig {
  icon: IconType;
  color: string;
  background: string;
  border: string;
  label: string;
}

type TechStack = Record<Tech, TechConfig>;

export interface StackGroupProps {
  tech: Tech;
  children: React.ReactNode;
}

export type Tech =
  | "adobe"
  | "api"
  | "aws"
  | "bootstrap"
  | "brazilian"
  | "css"
  | "dart"
  | "databases"
  | "devops"
  | "docker"
  | "english"
  | "fastapi"
  | "figma"
  | "flutter"
  | "git"
  | "githubactions"
  | "graphql"
  | "javascript"
  | "jest"
  | "languages"
  | "laravel"
  | "linux"
  | "macos"
  | "mongodb"
  | "mysql"
  | "nextjs"
  | "nginx"
  | "nodejs"
  | "os"
  | "php"
  | "programming"
  | "python"
  | "reactjs"
  | "sass"
  | "spanish"
  | "tailwindcss"
  | "typescript"
  | "vercel"
  | "vite"
  | "vitest"
  | "vuejs"
  | "windows"
  | "testing"
  | "libraries"
  | "backend"
  | "fullstack";

const techStack: TechStack = {
  adobe: {
    background: "bg-[#FF0000]/10",
    border: "border-[#FF0000]/50",
    color: "text-[#FF0000]",
    icon: SiAdobe,
    label: "Adobe Creative Suite",
  },
  api: {
    background: "bg-[#6DB33F]/10",
    border: "border-[#6DB33F]/50",
    color: "text-[#6DB33F]",
    icon: SiApifox,
    label: "API",
  },
  aws: {
    background: "bg-[#FF9900]/10",
    border: "border-[#FF9900]/50",
    color: "text-[#FF9900]",
    icon: SiAmazon,
    label: "AWS",
  },
  bootstrap: {
    background: "bg-[#7952B3]/10",
    border: "border-[#7952B3]/50",
    color: "text-[#7952B3]",
    icon: SiBootstrap,
    label: "Bootstrap",
  },
  brazilian: {
    background: "bg-[#009739]/10",
    border: "border-[#FEDD00]/50",
    color: "text-[#FEDD00]",
    icon: BR,
    label: "Brazilian",
  },
  css: {
    background: "bg-[#1572B6]/10",
    border: "border-[#1572B6]/50",
    color: "text-[#1572B6]",
    icon: SiCss3,
    label: "CSS",
  },
  dart: {
    background: "bg-[#00B4AB]/10",
    border: "border-[#00B4AB]/50",
    color: "text-[#00B4AB]",
    icon: SiDart,
    label: "Dart",
  },
  databases: {
    background: "bg-[#00758F]/10",
    border: "border-[#00758F]/50",
    color: "text-[#00758F]",
    icon: TbDatabase,
    label: "Databases",
  },
  devops: {
    background: "bg-[#2396ED]/10",
    border: "border-[#2396ED]/50",
    color: "text-[#2396ED]",
    icon: SiDocker,
    label: "DevOps",
  },
  docker: {
    background: "bg-[#2496ED]/10",
    border: "border-[#2496ED]/50",
    color: "text-[#2496ED]",
    icon: SiDocker,
    label: "Docker",
  },
  english: {
    background: "bg-[#00247D]/10",
    border: "border-[#CF142B]/50",
    color: "text-[#CF142B]",
    icon: GB,
    label: "English",
  },
  fastapi: {
    background: "bg-[#009688]/10",
    border: "border-[#009688]/50",
    color: "text-[#009688]",
    icon: SiFastapi,
    label: "FastAPI",
  },
  figma: {
    background: "bg-[#F24E1E]/10",
    border: "border-[#F24E1E]/50",
    color: "text-[#F24E1E]",
    icon: SiFigma,
    label: "Figma",
  },
  flutter: {
    background: "bg-[#02569B]/10",
    border: "border-[#02569B]/50",
    color: "text-[#02569B]",
    icon: SiFlutter,
    label: "Flutter",
  },
  git: {
    background: "bg-[#F05032]/10",
    border: "border-[#F05032]/50",
    color: "text-[#F05032]",
    icon: SiGit,
    label: "Git",
  },
  githubactions: {
    background: "bg-[#2088FF]/10",
    border: "border-[#2088FF]/50",
    color: "text-[#2088FF]",
    icon: SiGithubactions,
    label: "GitHub Actions",
  },
  graphql: {
    background: "bg-[#E10098]/10",
    border: "border-[#E10098]/50",
    color: "text-[#E10098]",
    icon: SiGraphql,
    label: "GraphQL",
  },
  javascript: {
    background: "bg-[#F7DF1E]/10",
    border: "border-[#F7DF1E]/50",
    color: "text-[#F7DF1E]",
    icon: SiJavascript,
    label: "JavaScript",
  },
  jest: {
    background: "bg-[#C21325]/10",
    border: "border-[#C21325]/50",
    color: "text-[#C21325]",
    icon: SiJest,
    label: "Jest",
  },
  languages: {
    background: "bg-[#4CAF50]/10",
    border: "border-[#4CAF50]/50",
    color: "text-[#4CAF50]",
    icon: TbMessageChatbot,
    label: "Spoken",
  },
  laravel: {
    background: "bg-[#FF2D20]/10",
    border: "border-[#FF2D20]/50",
    color: "text-[#FF2D20]",
    icon: SiLaravel,
    label: "Laravel",
  },
  linux: {
    background: "bg-[#FCC624]/10",
    border: "border-[#FCC624]/50",
    color: "text-[#FCC624]",
    icon: SiLinux,
    label: "Linux",
  },
  macos: {
    background: "bg-[#FFFFFF]/10",
    border: "border-[#FFFFFF]/50",
    color: "text-[#FFFFFF]",
    icon: TbBrandApple,
    label: "macOS",
  },
  mongodb: {
    background: "bg-[#47A248]/10",
    border: "border-[#47A248]/50",
    color: "text-[#47A248]",
    icon: SiMongodb,
    label: "MongoDB",
  },
  mysql: {
    background: "bg-[#00758F]/10",
    border: "border-[#00758F]/50",
    color: "text-[#00758F]",
    icon: SiMysql,
    label: "MySQL",
  },
  nextjs: {
    background: "bg-[#ffffff]/10",
    border: "border-[#ffffff]/50",
    color: "text-[#ffffff]",
    icon: SiNextdotjs,
    label: "Next.js",
  },
  nginx: {
    background: "bg-[#009639]/10",
    border: "border-[#009639]/50",
    color: "text-[#009639]",
    icon: SiNginx,
    label: "Nginx",
  },
  nodejs: {
    background: "bg-[#339933]/10",
    border: "border-[#339933]/50",
    color: "text-[#339933]",
    icon: SiNodedotjs,
    label: "Node.js",
  },
  os: {
    background: "bg-[#808080]/10",
    border: "border-[#808080]/50",
    color: "text-[#808080]",
    icon: TbBrandWindows,
    label: "Operating Systems",
  },
  php: {
    background: "bg-[#777BB4]/10",
    border: "border-[#777BB4]/50",
    color: "text-[#777BB4]",
    icon: SiPhp,
    label: "PHP",
  },
  programming: {
    background: "bg-[#3178C6]/10",
    border: "border-[#3178C6]/50",
    color: "text-[#3178C6]",
    icon: TbSourceCode,
    label: "Programming",
  },
  python: {
    background: "bg-[#3776AB]/10",
    border: "border-[#3776AB]/50",
    color: "text-[#3776AB]",
    icon: SiPython,
    label: "Python",
  },
  reactjs: {
    background: "bg-[#61DAFB]/10",
    border: "border-[#61DAFB]/50",
    color: "text-[#61DAFB]",
    icon: SiReact,
    label: "React.js",
  },
  sass: {
    background: "bg-[#CC6699]/10",
    border: "border-[#CC6699]/50",
    color: "text-[#CC6699]",
    icon: SiSass,
    label: "Sass",
  },
  spanish: {
    background: "bg-[#C60B1E]/10",
    border: "border-[#C60B1E]/50",
    color: "text-[#C60B1E]",
    icon: ES,
    label: "Spanish",
  },
  tailwindcss: {
    background: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/50",
    color: "text-[#06B6D4]",
    icon: SiTailwindcss,
    label: "Tailwind CSS",
  },
  typescript: {
    background: "bg-[#3178C6]/10",
    border: "border-[#3178C6]/50",
    color: "text-[#3178C6]",
    icon: SiTypescript,
    label: "TypeScript",
  },
  vercel: {
    background: "bg-[#FFFFFF]/10",
    border: "border-[#FFFFFF]/50",
    color: "text-[#FFFFFF]",
    icon: SiVercel,
    label: "Vercel",
  },
  vite: {
    background: "bg-[#646CFF]/10",
    border: "border-[#646CFF]/50",
    color: "text-[#646CFF]",
    icon: SiVite,
    label: "Vite",
  },
  vitest: {
    background: "bg-[#6E4A7E]/10",
    border: "border-[#6E4A7E]/50",
    color: "text-[#6E4A7E]",
    icon: SiVitest,
    label: "Vitest",
  },
  vuejs: {
    background: "bg-[#42b883]/10",
    border: "border-[#42b883]/50",
    color: "text-[#42b883]",
    icon: SiVuedotjs,
    label: "Vue.js",
  },
  windows: {
    background: "bg-[#0078D4]/10",
    border: "border-[#0078D4]/50",
    color: "text-[#0078D4]",
    icon: TbBrandWindows,
    label: "Windows",
  },
  testing: {
    background: "bg-[#FF6B6B]/10",
    border: "border-[#FF6B6B]/50",
    color: "text-[#FF6B6B]",
    icon: TbTestPipe,
    label: "Testing",
  },
  libraries: {
    background: "bg-[#61DAFB]/10",
    border: "border-[#61DAFB]/50",
    color: "text-[#61DAFB]",
    icon: TbAppWindow,
    label: "Libraries",
  },
  backend: {
    background: "bg-[#68A063]/10",
    border: "border-[#68A063]/50",
    color: "text-[#68A063]",
    icon: TbDatabaseCog,
    label: "Backend",
  },
  fullstack: {
    background: "bg-[#6C5CE7]/10",
    border: "border-[#6C5CE7]/50",
    color: "text-[#6C5CE7]",
    icon: TbTopologyStar3,
    label: "Fullstack",
  },
};

export function StackPill({ tech }: { tech: StackPillProps }) {
  const config = techStack[tech.label];
  const Icon = config.icon;

  return (
    <div className="inset-0 cursor-default rounded-sm bg-gray-900 select-none before:absolute">
      <div
        className={`${config.background} flex w-fit flex-col gap-2 rounded-sm ${config.border} border-1`}
      >
        <div
          className={`inline-flex items-center gap-2 ${tech.children ? "px-4 pt-3 pb-1" : "px-1.5 py-1"} ${config.color}`}
        >
          <Icon className="size-3.5" />
          <span className="text-xs tracking-wide">{config.label}</span>
        </div>
        {tech.children && (
          <div className="flex max-w-[28cqw] flex-wrap gap-2 p-4 pt-0">
            {tech.children.map((tech) => (
              <StackPill key={tech.label} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const Stack = { StackPill };
export default Stack;
