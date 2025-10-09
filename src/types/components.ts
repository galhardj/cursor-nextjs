import { StaticImageData } from "next/image";
import React from "react";

// Atom component types
export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export type PromoImageProps = {
  src: string | StaticImageData;
  alt: string;
  aspectRatio?: string; // e.g. "16/13"
  className?: string;
};

export type NavLinkProps = {
  href: string;
  label: string;
};

export type LogoProps = {
  href?: string;
};

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};
