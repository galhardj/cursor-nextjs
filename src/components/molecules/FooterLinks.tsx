import Link from "next/link";
import { FOOTER_SECTIONS } from "@/constants/footer";
import styles from "./FooterLinks.module.css";

export function FooterLinks() {
  return (
    <div className={styles.grid}>
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <ul className={styles.list}>
            {section.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
