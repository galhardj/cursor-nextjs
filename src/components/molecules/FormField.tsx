import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { Label } from "@/components/atoms/Label";
import styles from "./FormField.module.css";
import type { FormFieldProps } from "@/types/components";

export function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  id,
  name,
  rows,
  className = "",
}: FormFieldProps) {
  const fieldId =
    id || name || `field-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.container} ${className}`.trim()}>
      <Label htmlFor={fieldId} required={required}>
        {label}
      </Label>
      {type === "textarea" ? (
        <Textarea
          id={fieldId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
        />
      ) : (
        <Input
          type={type}
          id={fieldId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}

export default FormField;
