import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import type { ContactLink, Section } from "./types";

// Define the base section data
export const SECTION_DATA = {
  ABOUT: {
    id: "about",
    title: "About",
    href: "#about",
  },
  KNOWLEDGE: {
    id: "knowledge",
    title: "Knowledge",
    href: "#knowledge",
  },
  CAREER: {
    id: "career",
    title: "Career",
    href: "#career",
  },
  CONTACT: {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
  EDUCATION: {
    id: "education",
    title: "Education",
    href: "#education",
  },
} as const;

// Create the section ID type from the constant
export type SectionId = (typeof SECTION_DATA)[keyof typeof SECTION_DATA]["id"];

// Create the full sections configuration with icons
export const sections: Record<SectionId, Section> = {
  [SECTION_DATA.ABOUT.id]: {
    ...SECTION_DATA.ABOUT,
    icon: TbBrandGithub,
  },
  [SECTION_DATA.KNOWLEDGE.id]: {
    ...SECTION_DATA.KNOWLEDGE,
    icon: TbBrandLinkedin,
  },
  [SECTION_DATA.CAREER.id]: {
    ...SECTION_DATA.CAREER,
    icon: TbMail,
  },
  [SECTION_DATA.CONTACT.id]: {
    ...SECTION_DATA.CONTACT,
    icon: TbMail,
  },
  [SECTION_DATA.EDUCATION.id]: {
    ...SECTION_DATA.EDUCATION,
    icon: TbBrandGithub,
  },
};

// Helper function to get array of sections
export const getSectionsArray = (): Section[] => Object.values(sections);

// If you need just the base data as a constant
export const SECTION = SECTION_DATA;

export const CONTACT_LINKS = {
  EMAIL: {
    href: "mailto:eduardohilariodev@pm.me",
    label: "Email",
    icon: "hn hn-envelope",
  },
  LINKEDIN: {
    href: "https://www.linkedin.com/in/eduardohilariodev",
    label: "LinkedIn",
    icon: "hn hn-linkedin",
  },
  GITHUB: {
    href: "https://www.github.com/eduardohilariodev",
    label: "GitHub",
    icon: "hn hn-github",
  },
} as const;

export type ContactLinkLabel =
  (typeof CONTACT_LINKS)[keyof typeof CONTACT_LINKS]["label"];

export const contactLinks: Record<ContactLinkLabel, ContactLink> = {
  [CONTACT_LINKS.EMAIL.label]: CONTACT_LINKS.EMAIL,
  [CONTACT_LINKS.LINKEDIN.label]: CONTACT_LINKS.LINKEDIN,
  [CONTACT_LINKS.GITHUB.label]: CONTACT_LINKS.GITHUB,
};

// Getter for contact links
export const getContactLinks = (): ContactLink[] => Object.values(contactLinks);
