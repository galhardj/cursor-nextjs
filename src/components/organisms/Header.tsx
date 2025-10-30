import Logo from "@/components/atoms/Logo";
import NavBar from "@/components/molecules/NavBar";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.container}>
        <Logo />
        <NavBar />
      </div>
      <div className={styles.bar}></div>
    </header>
  );
}

export default Header;
