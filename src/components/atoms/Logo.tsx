import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = { href?: string };

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link href={href} className={styles.root}>
      <span className={styles.text}>★ PRET ★</span>
    </Link>
  );
}

export default Logo;


