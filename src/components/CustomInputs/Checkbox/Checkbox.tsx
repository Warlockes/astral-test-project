import { InputHTMLAttributes } from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";

import styles from "./Checkbox.module.css";

export type CheckboxProps<InputValues extends FieldValues = FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name"
> & {
  name: FieldPath<InputValues>;
  label?: string;
};

export const Checkbox = <InputValues extends FieldValues = FieldValues>({
  name,
  label,
  ...rest
}: CheckboxProps<InputValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InputValues>();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          {...register(name)}
          {...rest}
        />
        {label && <span className={styles.checkboxText}>{label}</span>}
      </label>
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};
