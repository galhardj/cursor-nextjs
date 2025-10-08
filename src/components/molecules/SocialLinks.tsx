import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/footer";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  return (
    <div className={styles.root}>
      {SOCIAL_LINKS.map((s) => (
        <Link
          key={s.label}
          aria-label={s.label}
          href={s.href}
          className={styles.item}
        >
          <span className={styles.icon}>{s.icon}</span>
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;


