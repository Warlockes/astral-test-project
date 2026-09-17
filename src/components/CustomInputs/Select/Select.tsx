import { SelectHTMLAttributes } from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";

import { Option } from "../../../types/types";

import styles from "./Select.module.css";

export type SelectProps<InputValues extends FieldValues = FieldValues> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "name"
> & {
  name: FieldPath<InputValues>;
  options: Option[];
  label?: string;
};

export const Select = <InputValues extends FieldValues = FieldValues>({
  name,
  options,
  label,
  ...rest
}: SelectProps<InputValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InputValues>();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} {...register(name)} {...rest}>
        <option value="" disabled hidden>
          Выберите из списка...
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};
