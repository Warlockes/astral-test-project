import { FieldConfig } from "./types/types";
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

export const FORM_FIELDS: FieldConfig[] = [
  {
    name: "firstName",
    label: "Имя",
    fieldType: "input",
  },
  {
    name: "lastName",
    label: "Фамилия",
    fieldType: "input",
  },
  {
    name: "middleName",
    label: "Отчество",
    fieldType: "input",
  },
  {
    name: "bio",
    label: "Биография",
    fieldType: "input",
  },
  {
    name: "phone",
    label: "Мобильный телефон",
    fieldType: "input",
    type: "tel",
  },
  {
    name: "age",
    label: "Возраст",
    fieldType: "input",
    type: "number",
    disabled: true,
  },
  {
    name: "experienceYears",
    label: "Опыт работы (в годах)",
    fieldType: "input",
    type: "number",
  },
  {
    name: "birthDate",
    label: "Дата рождения",
    fieldType: "input",
    type: "date",
    max: "2026-09-18",
  },
  {
    name: "englishLevel",
    label: "Уровень английского языка",
    fieldType: "select",
    options: [...ENGLISH_LEVEL_OPTIONS],
  },
  {
    name: "gender",
    label: "Пол",
    fieldType: "select",
    options: [...GENDER_OPTIONS],
  },
  {
    name: "telegram",
    label: "Telegram",
    fieldType: "input",
  },
  {
    name: "website",
    label: "Веб-сайт",
    fieldType: "input",
  },
  {
    name: "address",
    label: "Адрес",
    fieldType: "input",
  },
  {
    name: "employmentType",
    label: "Режим работы",
    fieldType: "select",
    options: [...EMPLOYEMENT_TYPE_OPTIONS],
  },
  {
    name: "hardSkills",
    label: "HardSkills",
    fieldType: "textarea",
  },
  {
    name: "softSkills",
    label: "SoftSkills",
    fieldType: "textarea",
  },
  {
    name: "isPublicProfile",
    label: "Открытый профиль",
    fieldType: "checkbox",
  },
  {
    name: "enableEmailNotifications",
    label: "Оповещения по email",
    fieldType: "checkbox",
  },
  {
    name: "twoFactorAuth",
    label: "Двухфакторная аутентификация",
    fieldType: "checkbox",
  },
];
