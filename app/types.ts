export interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

export interface ExperienceItem {
  company: CompanyInfo;
  startDate: Date;
  endDate: Date | null;
  positions: Position[];
}

export interface Position {
  title: string;
  projects: Project[];
}

export interface StackPillProps {
  label: string;
  isChild?: boolean;
  children?: StackPillProps[];
}

export interface Project {
  description: string;
  stack: StackPillProps[];
}

export interface Education {
  img: string;
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}
