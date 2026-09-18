import { InputHTMLAttributes } from "react";

import { EditUserFormData } from "../schemas/editUserFormSchema";
import {
  EMPLOYEMENT_TYPE_VALUES,
  ENGLISH_LEVEL_VALUES,
  GENDER_VALUES,
  PAGES,
} from "../constants";

export type OrNull<T> = T | null;

export type HeaderLink = {
  label: string;
  href: (typeof PAGES)[keyof typeof PAGES];
};

export type Option = {
  value: string;
  label: string;
};

export type Gender = (typeof GENDER_VALUES)[number];
export type EnglishLevel = (typeof ENGLISH_LEVEL_VALUES)[number];
export type EmploymentType = (typeof EMPLOYEMENT_TYPE_VALUES)[number];

export type UserData = {
  fullName: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  bio?: string;
  email?: string;
  phone?: string;
  age: number;
  experienceYears: number;
  birthDate: string;
  englishLevel: EnglishLevel;
  gender: Gender;
  isPublicProfile: boolean;
  telegram?: string;
  website?: string;
  address?: string;
  enableEmailNotifications: boolean;
  twoFactorAuth: boolean;
  employmentType: EmploymentType;
  hardSkills?: string;
  softSkills?: string;
};

export type CardData = {
  id: string;
  title: string;
  word: string;
  usageExample: string;
  translation: string;
};

export type FieldConfig = InputHTMLAttributes<HTMLInputElement> & {
  name: keyof EditUserFormData;
  label: string;
  fieldType: "input" | "select" | "checkbox" | "textarea";
  options?: Option[];
};
