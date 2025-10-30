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

export type InputProps = {
  type?: "text" | "email" | "tel" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  id?: string;
  name?: string;
};

export type TextareaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  rows?: number;
  id?: string;
  name?: string;
};

export type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export type FormFieldProps = {
  label: string;
  type?: "text" | "email" | "tel" | "password" | "textarea";
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  id?: string;
  name?: string;
  rows?: number;
  className?: string;
};

export type InquiryOption = {
  value: string;
  label: string;
};

export type InquirySelectorProps = {
  options: InquiryOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  required?: boolean;
  className?: string;
};

export type ContactFormData = {
  inquiryType: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  message: string;
};
