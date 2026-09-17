import * as yup from "yup";

import {
  EMPLOYEMENT_TYPE_VALUES,
  ENGLISH_LEVEL_VALUES,
  GENDER_VALUES,
  REQUIRED_FIELD_ERROR_MESSAGE,
} from "../constants";

export const editUserFormSchema = yup.object({
  firstName: yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  lastName: yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  middleName: yup.string(),
  bio: yup.string(),
  email: yup.string(),
  phone: yup.string(),
  age: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  experienceYears: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  birthDate: yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  englishLevel: yup
    .string()
    .oneOf(ENGLISH_LEVEL_VALUES)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  gender: yup
    .string()
    .oneOf(GENDER_VALUES)
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  isPublicProfile: yup.boolean(),
  telegram: yup.string(),
  website: yup.string(),
  address: yup.string(),
  enableEmailNotifications: yup.boolean(),
  twoFactorAuth: yup.boolean(),
  employmentType: yup.string().oneOf(EMPLOYEMENT_TYPE_VALUES),
  hardSkills: yup.string(),
  softSkills: yup.string(),
});

export type EditUserFormData = yup.InferType<typeof editUserFormSchema>;
