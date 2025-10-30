import { Button } from "@/components/atoms/Button";
import styles from "./InquirySelector.module.css";
import type { InquirySelectorProps } from "@/types/components";

export function InquirySelector({
  options,
  selectedValue,
  onSelect,
  required = false,
  className = "",
}: InquirySelectorProps) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      <label className={styles.label}>
        How can we help you?
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.options}>
        {options.map((option) => (
          <Button
            key={option.value}
            type="button"
            variant={selectedValue === option.value ? "primary" : "outline"}
            onClick={() => onSelect(option.value)}
            className={styles.option}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default InquirySelector;
