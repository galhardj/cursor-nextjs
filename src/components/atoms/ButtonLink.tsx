import Link from "next/link";
import styles from "./ButtonLink.module.css";
import type { ButtonLinkProps } from "@/types/components";

export function ButtonLink({
  href,
  children,
  variant = "outline",
  className = "",
}: ButtonLinkProps) {
  const variantClass = variant === "primary" ? styles.primary : styles.outline;

  return (
    <Link
      href={href}
      className={`${styles.base} ${variantClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
