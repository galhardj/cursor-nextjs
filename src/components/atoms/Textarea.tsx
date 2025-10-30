import styles from "./Textarea.module.css";
import type { TextareaProps } from "@/types/components";

export function Textarea({
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className={`${styles.base} ${className}`.trim()}
      {...props}
    />
  );
}

export default Textarea;
