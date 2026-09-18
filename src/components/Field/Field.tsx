import { FieldConfig } from "../../types/types";
import { useFormComponents } from "../../hooks/useFormComponents";
import { EditUserFormData } from "../../schemas/editUserFormSchema";

export const Field = ({ label, name, fieldType, ...rest }: FieldConfig) => {
  const commonProps = {
    label,
    name,
  };

  const { TypedInput, TypedSelect, TypedTextarea, TypedCheckbox } =
    useFormComponents<EditUserFormData>();

  switch (fieldType) {
    case "select":
      return <TypedSelect options={rest.options || []} {...commonProps} />;
    case "checkbox":
      return <TypedCheckbox {...commonProps} />;
    case "textarea":
      return <TypedTextarea {...commonProps} />;
    default:
      return <TypedInput {...commonProps} {...rest} />;
  }
};
