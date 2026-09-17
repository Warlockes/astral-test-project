import { TextareaHTMLAttributes } from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";

import styles from "./Textarea.module.css";

export type TextareaProps<InputValues extends FieldValues = FieldValues> = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "name"
> & {
  name: FieldPath<InputValues>;
  label?: string;
};

export const Textarea = <InputValues extends FieldValues = FieldValues>({
  name,
  label,
  ...rest
}: TextareaProps<InputValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InputValues>();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles.textarea} {...register(name)} {...rest} />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};
