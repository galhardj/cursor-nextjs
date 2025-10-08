import { CATERING_PROMO } from "@/constants/catering";
import ButtonLink from "@/components/atoms/ButtonLink";
import styles from "./CateringPromoCopy.module.css";

export function CateringPromoCopy() {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>
        {CATERING_PROMO.heading}
      </h2>
      <p className={styles.lead}>{CATERING_PROMO.lead}</p>
      <p className={styles.body}>{CATERING_PROMO.body}</p>
      <ButtonLink href={CATERING_PROMO.cta.href}>{CATERING_PROMO.cta.label}</ButtonLink>
    </div>
  );
}

export default CateringPromoCopy;
