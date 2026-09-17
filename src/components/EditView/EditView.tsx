import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";

import { UserData } from "../../types/types";
import { getCurrentAge } from "../../utils/getCurrentAge";
import { useFormComponents } from "../../hooks/useFormComponents";
import {
  EMPLOYEMENT_TYPE_OPTIONS,
  ENGLISH_LEVEL_OPTIONS,
  GENDER_OPTIONS,
} from "../../constants";
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
  const { TypedInput, TypedSelect, TypedTextarea, TypedCheckbox } =
    useFormComponents<EditUserFormData>();

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
          <TypedInput label="Имя" name="firstName" />
          <TypedInput label="Фамилия" name="lastName" />
          <TypedInput label="Отчество" name="middleName" />
          <TypedInput label="Биография" name="bio" />

          {isEmailChecked ? (
            <TypedInput label="Email" type="email" name="email" />
          ) : (
            <div />
          )}

          <TypedInput label="Мобильный телефон" type="tel" name="phone" />
          <TypedInput label="Возраст" type="number" name="age" disabled />
          <TypedInput
            label="Опыт работы (в годах)"
            type="number"
            name="experienceYears"
          />
          <TypedInput
            label="Дата рождения"
            type="date"
            name="birthDate"
            max="2026-09-17"
          />
          <TypedSelect
            label="Уровень английского языка"
            options={[...ENGLISH_LEVEL_OPTIONS]}
            name="englishLevel"
          />
          <TypedSelect
            label="Пол"
            options={[...GENDER_OPTIONS]}
            name="gender"
          />
          <div>
            <TypedCheckbox label="Открытый профиль" name="isPublicProfile" />
            <TypedCheckbox
              label="Оповещения по email"
              name="enableEmailNotifications"
            />
            <TypedCheckbox
              label="Двухфакторная аутентификация"
              name="twoFactorAuth"
            />
          </div>
          <TypedInput label="Telegram" name="telegram" />
          <TypedInput label="Веб-сайт" name="website" />
          <TypedInput label="Адрес" name="address" />
          <TypedSelect
            label="Режим работы"
            options={[...EMPLOYEMENT_TYPE_OPTIONS]}
            name="employmentType"
          />
          <TypedTextarea label="HardSkills" name="hardSkills" />
          <TypedTextarea label="SoftSkills" name="softSkills" />
        </form>
      </FormProvider>

      <button onClick={handleSubmit(onSubmit)} className={styles.submitBtn}>
        Сохранить
      </button>
    </div>
  );
};
