import styles from "./Button.module.css";
import type { ButtonProps } from "@/types/components";

export function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  const variantClass = variant === "primary" ? styles.primary : styles.outline;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.base} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
