import { Card } from "../";
import { CardData } from "../../types/types";

import styles from "./CardList.module.css";

type CardListProps = {
  list: CardData[];
};

export const CardList = ({ list }: CardListProps) => {
  if (!list.length) {
    return <div className={styles.empty}>Список карточек пуст</div>;
  }

  return (
    <div className={styles.grid}>
      {list.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};
