import { CATERING_PROMO } from "@/constants/catering";
import CateringPromoCopy from "@/components/molecules/CateringPromoCopy";
import PromoImage from "@/components/atoms/PromoImage";
import styles from "./CateringPromo.module.css";

export function CateringPromo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <PromoImage
          src={CATERING_PROMO.image.src}
          alt={CATERING_PROMO.image.alt}
          aspectRatio={CATERING_PROMO.image.aspectRatio}
        />
        <CateringPromoCopy />
      </div>
    </section>
  );
}

export default CateringPromo;
