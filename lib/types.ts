import { DateTime } from "luxon";
import { IconType } from "react-icons";

import { SectionId } from "./constants";

import type { FlagComponent } from "country-flag-icons/react/3x2";

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
    key: string;
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
  title: string;
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
  icon: string | IconType;
  title: string;
}

export interface LocaleConfig {
  code: string;
  label: string;
  icon: FlagComponent;
}
