import Link from "next/link";
import styles from "./NavLink.module.css";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={styles.link}
    >
      {label}
    </Link>
  );
}

export default NavLink;


