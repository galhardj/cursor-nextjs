import FooterLinks from '@/components/molecules/FooterLinks';
import SocialLinks from '@/components/molecules/SocialLinks';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <FooterLinks />
          <div className={styles.controls}>
            <SocialLinks />
            <label className={styles.label}>Switch Country</label>
            <select className={styles.select}>
              <option>United States</option>
            </select>
          </div>
        </div>
        <p className={styles.copyright}>
          © Pret A Manger 2025. Addresses and registrations are placeholders for demo purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
