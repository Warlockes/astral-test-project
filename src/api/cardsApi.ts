import { CardData } from "../types/types";
import { axiosInstance } from "./instance";
import { API_METHODS } from "../constants";

export const CardsApi = {
  async getCards() {
    const { data } = await axiosInstance.get<CardData[]>(API_METHODS.GET_CARDS);

    return data;
  },
};
