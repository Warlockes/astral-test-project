import styles from "./Loader.module.css";

type LoaderProps = {
  message?: string;
};

export const Loader = ({ message = "Загрузка..." }: LoaderProps) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <span className={styles.text}>{message}</span>
    </div>
  );
};
