import { ComponentType } from "react";
import { FieldValues } from "react-hook-form";

import {
  Checkbox,
  CheckboxProps,
  Input,
  InputProps,
  Select,
  SelectProps,
  Textarea,
  TextareaProps,
} from "../components";

export const useFormComponents = <InputValues extends FieldValues>() => {
  return {
    TypedInput: Input as ComponentType<InputProps<InputValues>>,
    TypedSelect: Select as ComponentType<SelectProps<InputValues>>,
    TypedCheckbox: Checkbox as ComponentType<CheckboxProps<InputValues>>,
    TypedTextarea: Textarea as ComponentType<TextareaProps<InputValues>>,
  };
};
