import { DateTime } from "luxon";
import { IconType } from "react-icons";
import { SectionId } from "./constants";

export interface Period {
  start: DateTime;
  end?: DateTime;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

export interface ExperienceItem {
  company: CompanyInfo;
  period: Period;
  stack?: StackPillProps[];
  positions: {
    title: string;
    description?: string;
    period?: Period;
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
  hasColor?: boolean;
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
  period: Period;
  description?: string;
  stack?: StackPillProps[];
}

export interface BaseSectionData {
  id: string;
  title: string;
  href: string;
}

export interface Section extends BaseSectionData {
  id: SectionId;
  icon: IconType;
}

export interface ContactLink {
  href: string;
  icon: string;
  title: string;
}
