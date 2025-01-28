import { IconType } from "react-icons";
import {
  TbBrandAdobe,
  TbBrandAws,
  TbBrandDocker,
  TbBrandFigma,
  TbBrandFlutter,
  TbBrandGit,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandVue,
} from "react-icons/tb";

export type TechCategory =
  | "frontend"
  | "backend"
  | "devops"
  | "tooling"
  | "mobile"
  | "creative";

interface TechConfig {
  icon: IconType;
  color: string;
  label: string;
  category: TechCategory;
  children?: StackPillProps["tech"][];
}

export interface StackPillProps {
  tech:
    | "javascript"
    | "react"
    | "typescript"
    | "nextjs"
    | "vue"
    | "python"
    | "laravel"
    | "figma"
    | "git"
    | "docker"
    | "aws"
    | "flutter"
    | "adobe";
  className?: string;
  isChild?: boolean;
}

const techConfig: Record<StackPillProps["tech"], TechConfig> = {
  javascript: {
    icon: TbBrandJavascript,
    color: "text-[#F7DF1E] bg-[#F7DF1E]/10",
    label: "JavaScript",
    category: "frontend",
    children: ["typescript", "react", "nextjs", "vue"],
  },
  adobe: {
    icon: TbBrandAdobe,
    color: "text-[#FF0000] bg-[#FF0000]/10",
    label: "Adobe Creative Suite",
    category: "creative",
  },
  react: {
    icon: TbBrandReact,
    color: "text-[#61DAFB] bg-[#61DAFB]/10",
    label: "React",
    category: "frontend",
  },
  typescript: {
    icon: TbBrandTypescript,
    color: "text-[#3178C6] bg-[#3178C6]/10",
    label: "TypeScript",
    category: "frontend",
  },
  nextjs: {
    icon: TbBrandNextjs,
    color: "text-[#ffffff] bg-[#ffffff]/10",
    label: "Next.js",
    category: "frontend",
  },
  vue: {
    icon: TbBrandVue,
    color: "text-[#42b883] bg-[#42b883]/10",
    label: "Vue.js",
    category: "frontend",
  },
  python: {
    icon: TbBrandPython,
    color: "text-[#3776AB] bg-[#3776AB]/10",
    label: "Python",
    category: "backend",
  },
  laravel: {
    icon: TbBrandLaravel,
    color: "text-[#FF2D20] bg-[#FF2D20]/10",
    label: "Laravel",
    category: "backend",
  },
  figma: {
    icon: TbBrandFigma,
    color: "text-[#F24E1E] bg-[#F24E1E]/10",
    label: "Figma",
    category: "tooling",
  },
  git: {
    icon: TbBrandGit,
    color: "text-[#F05032] bg-[#F05032]/10",
    label: "Git",
    category: "tooling",
  },
  docker: {
    icon: TbBrandDocker,
    color: "text-[#2496ED] bg-[#2496ED]/10",
    label: "Docker",
    category: "devops",
  },
  aws: {
    icon: TbBrandAws,
    color: "text-[#FF9900] bg-[#FF9900]/10",
    label: "AWS",
    category: "devops",
  },
  flutter: {
    icon: TbBrandFlutter,
    color: "text-[#02569B] bg-[#02569B]/10",
    label: "Flutter",
    category: "mobile",
  },
};

export default function StackPill({
  tech,
  className = "",
  isChild = false,
}: StackPillProps) {
  const config = techConfig[tech];
  const Icon = config.icon;

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 ${config.color} ${className}`}
      >
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{config.label}</span>
      </div>
      {!isChild && config.children && (
        <div className="flex flex-wrap gap-2 pl-4">
          {config.children.map((childTech) => (
            <StackPill key={childTech} tech={childTech} isChild={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export function getTechsByCategory(techs: StackPillProps["tech"][]) {
  const categories = new Map<TechCategory, StackPillProps["tech"][]>();

  techs.forEach((tech) => {
    const category = techConfig[tech].category;
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category)!.push(tech);
  });

  return categories;
}
