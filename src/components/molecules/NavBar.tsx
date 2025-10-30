import { NAV_ITEMS } from "@/constants/navigation";
import NavLink from "@/components/atoms/NavLink";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.label} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}

export default NavBar;
