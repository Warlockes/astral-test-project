import * as yup from "yup";

import { REQUIRED_FIELD_ERROR_MESSAGE } from "../constants";

export const loginFormSchema = yup.object({
  username: yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
  password: yup.string().required(REQUIRED_FIELD_ERROR_MESSAGE),
});

export type LoginFormData = yup.InferType<typeof loginFormSchema>;
