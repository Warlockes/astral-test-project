import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";

import { Field } from "../";
import { UserData } from "../../types/types";
import { FORM_FIELDS } from "../../constants";
import { getCurrentAge } from "../../utils/getCurrentAge";
import { useFormComponents } from "../../hooks/useFormComponents";

import {
  EditUserFormData,
  editUserFormSchema,
} from "../../schemas/editUserFormSchema";

import styles from "./EditView.module.css";

type EditViewProps = {
  userData: UserData;
};

export const EditView = ({ userData }: EditViewProps) => {
  const methods = useForm<EditUserFormData>({
    resolver: yupResolver(editUserFormSchema),
    values: userData,
  });
  const { handleSubmit, control, setValue } = methods;
  const { TypedInput } = useFormComponents<EditUserFormData>();

  //INFO: Если снять чекбокс "Оповещения по email" поле "Email"
  //      очищается и скрывается с формы
  const isEmailChecked = useWatch({
    control,
    name: "enableEmailNotifications",
  });

  useEffect(() => {
    if (!isEmailChecked) {
      setValue("email", "");
    }
  }, [isEmailChecked]);

  //INFO: Поле "Возраст" disabled и зависит от значения в поле "Дата рождения"
  const birtDate = useWatch({
    control,
    name: "birthDate",
  });

  useEffect(() => {
    if (birtDate) {
      const currentAge = getCurrentAge(birtDate);
      setValue("age", currentAge);
    }
  }, [birtDate]);

  const onSubmit: SubmitHandler<EditUserFormData> = (data) => {
    console.log("formData", data);
    //INFO: в mock-сервисе нельзя обновить данные пользователя...
    //      здесь должен быть updateUser (метод PUT)
    alert("Данные обновлены!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Редактирование профиля</h1>
      <FormProvider {...methods}>
        <form className={styles.form}>
          {[FORM_FIELDS.map((field) => <Field key={field.name} {...field} />)]}
          {isEmailChecked && (
            <TypedInput label="Email" type="email" name="email" />
          )}
        </form>
      </FormProvider>

      <button onClick={handleSubmit(onSubmit)} className={styles.submitBtn}>
        Сохранить
      </button>
    </div>
  );
};
