import Image from "next/image";
import styles from "./PromoImage.module.css";
import type { PromoImageProps } from "@/types/components";

export function PromoImage({
  src,
  alt,
  aspectRatio = "16/13",
  className = "",
}: PromoImageProps) {
  return (
    <div className={`${styles.root} ${className}`.trim()}>
      <div className={styles.frame} style={{ aspectRatio }}>
        <Image src={src} alt={alt} fill className={styles.image} priority />
      </div>
    </div>
  );
}

export default PromoImage;
