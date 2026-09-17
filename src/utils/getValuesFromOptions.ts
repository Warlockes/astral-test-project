import { Option } from "../types/types";

export const getValuesFromOptions = (options: Option[]): string[] =>
  options.map(({ value }) => value);
