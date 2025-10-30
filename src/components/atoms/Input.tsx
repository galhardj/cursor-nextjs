import styles from "./Input.module.css";
import type { InputProps } from "@/types/components";

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${styles.base} ${className}`.trim()}
      {...props}
    />
  );
}

export default Input;
