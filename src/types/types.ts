import { PAGES } from "../constants";

export type OrNull<T> = T | null;

export type HeaderLink = {
  label: string;
  href: (typeof PAGES)[keyof typeof PAGES];
};

export type UserData = {
  fullName: string;
};

export type CardData = {
  id: string;
  title: string;
  word: string;
  usageExample: string;
  translation: string;
};
