import Link from "next/link";
import styles from "./ButtonLink.module.css";

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function ButtonLink({ href, children, variant = "outline", className = "" }: ButtonLinkProps) {
  const variantClass = variant === "primary" ? styles.primary : styles.outline;

  return (
    <Link href={href} className={`${styles.base} ${variantClass} ${className}`.trim()}>
      {children}
    </Link>
  );
}

export default ButtonLink;
