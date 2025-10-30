import styles from "./Label.module.css";
import type { LabelProps } from "@/types/components";

export function Label({
  children,
  htmlFor,
  required = false,
  className = "",
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`${styles.base} ${className}`.trim()}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  );
}

export default Label;
