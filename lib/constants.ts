import { SiWhatsapp } from "react-icons/si";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

import type { ContactLink, Section } from "./types";

// Define the base section data
export const SECTION_DATA = {
  ABOUT: {
    id: "about",
    title: "About me",
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
  // CONTACT: {
  //   id: "contact",
  //   title: "Find me",
  //   href: "#contact",
  // },
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
  WHATSAPP: {
    href: "https://wa.me/5548996322397",
    title: "WhatsApp",
    icon: SiWhatsapp,
  },
  EMAIL: {
    href: "mailto:eduardohilariodev@pm.me",
    title: "Email",
    icon: "hn hn-envelope",
  },
  LINKEDIN: {
    href: "https://www.linkedin.com/in/eduardohilariodev",
    title: "LinkedIn",
    icon: "hn hn-linkedin",
  },
  GITHUB: {
    href: "https://www.github.com/eduardohilariodev",
    title: "GitHub",
    icon: "hn hn-github",
  },
} as const;

export type ContactLinkLabel =
  (typeof CONTACT_LINKS)[keyof typeof CONTACT_LINKS]["title"];

export const contactLinks: Record<ContactLinkLabel, ContactLink> = {
  [CONTACT_LINKS.GITHUB.title]: CONTACT_LINKS.GITHUB,
  [CONTACT_LINKS.LINKEDIN.title]: CONTACT_LINKS.LINKEDIN,
  [CONTACT_LINKS.WHATSAPP.title]: CONTACT_LINKS.WHATSAPP,
  [CONTACT_LINKS.EMAIL.title]: CONTACT_LINKS.EMAIL,
};

// Getter for contact links
export const getContactLinks = (): ContactLink[] => Object.values(contactLinks);
