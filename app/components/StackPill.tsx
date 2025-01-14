import { IconType } from "react-icons";
import {
  TbBrandAws,
  TbBrandDocker,
  TbBrandFigma,
  TbBrandFlutter,
  TbBrandGit,
  TbBrandLaravel,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandVue,
} from "react-icons/tb";

interface StackPillProps {
  tech:
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
    | "flutter";
  className?: string;
}

const techConfig: Record<
  StackPillProps["tech"],
  { icon: IconType; color: string; label: string }
> = {
  react: {
    icon: TbBrandReact,
    color: "text-[#61DAFB] bg-[#61DAFB]/10",
    label: "React",
  },
  typescript: {
    icon: TbBrandTypescript,
    color: "text-[#3178C6] bg-[#3178C6]/10",
    label: "TypeScript",
  },
  nextjs: {
    icon: TbBrandNextjs,
    color: "text-[#ffffff] bg-[#ffffff]/10",
    label: "Next.js",
  },
  vue: {
    icon: TbBrandVue,
    color: "text-[#42b883] bg-[#42b883]/10",
    label: "Vue.js",
  },
  python: {
    icon: TbBrandPython,
    color: "text-[#3776AB] bg-[#3776AB]/10",
    label: "Python",
  },
  laravel: {
    icon: TbBrandLaravel,
    color: "text-[#FF2D20] bg-[#FF2D20]/10",
    label: "Laravel",
  },
  figma: {
    icon: TbBrandFigma,
    color: "text-[#F24E1E] bg-[#F24E1E]/10",
    label: "Figma",
  },
  git: {
    icon: TbBrandGit,
    color: "text-[#F05032] bg-[#F05032]/10",
    label: "Git",
  },
  docker: {
    icon: TbBrandDocker,
    color: "text-[#2496ED] bg-[#2496ED]/10",
    label: "Docker",
  },
  aws: {
    icon: TbBrandAws,
    color: "text-[#FF9900] bg-[#FF9900]/10",
    label: "AWS",
  },
  flutter: {
    icon: TbBrandFlutter,
    color: "text-[#02569B] bg-[#02569B]/10",
    label: "Flutter",
  },
};

export default function StackPill({ tech, className = "" }: StackPillProps) {
  const { icon: Icon, color, label } = techConfig[tech];

  return (
    <span
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${color} ${className}`}
    >
      <Icon className="text-lg" />
      {label}
    </span>
  );
}
