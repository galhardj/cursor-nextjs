import { StaticImageData } from "next/image";

// Navigation types
export type NavItem = {
  label: string;
  href: string;
};

// Footer types
export type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

// Catering types
export type CateringPromo = {
  heading: string;
  lead: string;
  body: string;
  cta: { label: string; href: string };
  image: {
    src: string | StaticImageData;
    alt: string;
    aspectRatio: string;
  };
};
