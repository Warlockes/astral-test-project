import { useState } from "react";
import { CardData } from "../../types/types";

import styles from "./Card.module.css";

export const Card = ({ title, word, usageExample, translation }: CardData) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.openContainer} ${isOpen ? styles.isOpen : ""}`}>
        <div className={styles.frontView}>
          <span className={styles.title}>{title}</span>
          <h3 className={styles.word}>{word}</h3>
          <p className={styles.usageExample}>{usageExample}</p>
          <button className={styles.button} onClick={handleClick}>
            Перевести
          </button>
        </div>
        <div className={styles.backView}>
          <span className={styles.translationLabel}>Перевод</span>
          <h3 className={styles.translationValue}>{translation}</h3>
          <button className={styles.button} onClick={handleClick}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};
