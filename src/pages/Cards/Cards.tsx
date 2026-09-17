import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/hooks";
import { CardList, Loader } from "../../components";
import { selectCardsState } from "../../redux/cards/cardsSelectors";
import { fetchCards } from "../../redux/cards/asyncThunks/fetchCards";

export const Cards = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useSelector(selectCardsState);

  useEffect(() => {
    if (!data?.length) {
      dispatch(fetchCards());
    }
  }, []);

  if (isLoading) return <Loader message="Список карточек загружается..." />;

  return <CardList list={data} />;
};
