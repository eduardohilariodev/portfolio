export interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

export interface ExperienceItem {
  company: CompanyInfo;
  startDate: Date;
  endDate: Date;
  stack?: StackPillProps[];
  positions: {
    title: string;
    description?: string;
  }[];
}

export interface Position {
  title: string;
  description: string;
  stack: StackPillProps[];
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
  description?: string;
  stack?: StackPillProps[];
}
