import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./TextField.module.css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
      <div className={styles.fieldWrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} ref={ref} {...rest} />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
    );
  }
);
