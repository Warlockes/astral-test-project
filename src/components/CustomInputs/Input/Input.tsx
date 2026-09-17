import { InputHTMLAttributes } from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";

import styles from "./Input.module.css";

export type InputProps<InputValues extends FieldValues = FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name"
> & {
  name: FieldPath<InputValues>;
  label?: string;
};

export const Input = <InputValues extends FieldValues = FieldValues>({
  name,
  label,
  ...rest
}: InputProps<InputValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InputValues>();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...register(name)} {...rest} />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};
