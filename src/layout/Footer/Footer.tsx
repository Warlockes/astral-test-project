import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <span className={styles.brand}>AstralTestProject</span>
          <span className={styles.copyright}>
            © {currentYear} ООО «Астрал-Тех». Все права защищены.
          </span>
        </div>

        <div className={styles.contacts}>
          <span className={styles.title}>Контакты</span>

          <a href="tel:+78005553535" className={styles.contactLink}>
            8 (800) 555-35-35
          </a>

          <a href="mailto:support@astralapp.ru" className={styles.contactLink}>
            support@astralapp.ru
          </a>

          <span className={styles.address}>
            г. Калуга, ул. Пушкина, д. Колотушкина
          </span>
        </div>
      </div>
    </div>
  );
};
