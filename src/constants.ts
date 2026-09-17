import { getValuesFromOptions } from "./utils/getValuesFromOptions";

export const REQUIRED_FIELD_ERROR_MESSAGE = "Поле обязательно для заполнения";

export const PAGES = {
  MAIN: "/",
  LOGIN: "/login",
  CARDS: "/cards",
  PROFILE: "/profile",
} as const;

export const API_METHODS = {
  GET_USER: "/getUser",
  GET_CARDS: "/getCards",
};

export const GENDER_OPTIONS = [
  {
    value: "male",
    label: "Мужской",
  },
  {
    value: "female",
    label: "Женский",
  },
  {
    value: "other",
    label: "Другой O_o",
  },
] as const;
export const GENDER_VALUES = getValuesFromOptions([...GENDER_OPTIONS]);

export const ENGLISH_LEVEL_OPTIONS = [
  {
    value: "A1",
    label: "A1 - Elementary",
  },
  {
    value: "A2",
    label: "A2 - Pre-Intermediate",
  },
  {
    value: "B1",
    label: "B1 - Intermediate",
  },
  {
    value: "B2",
    label: "B2 - Upper-Intermediate",
  },
  {
    value: "C1",
    label: "C1 - Advanced",
  },
  {
    value: "C2",
    label: "C2 - Proficiency",
  },
] as const;
export const ENGLISH_LEVEL_VALUES = getValuesFromOptions([
  ...ENGLISH_LEVEL_OPTIONS,
]);

export const EMPLOYEMENT_TYPE_OPTIONS = [
  {
    value: "fullTime",
    label: "Полная занятость",
  },
  {
    value: "remote",
    label: "На удаленке",
  },
] as const;
export const EMPLOYEMENT_TYPE_VALUES = getValuesFromOptions([
  ...EMPLOYEMENT_TYPE_OPTIONS,
]);
