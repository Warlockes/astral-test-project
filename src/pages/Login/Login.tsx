import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { PAGES } from "../../constants";
import { useFormComponents } from "../../hooks/useFormComponents";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUser } from "../../redux/user/asyncThunks/fetchUser";
import { LoginFormData, loginFormSchema } from "../../schemas/loginFormSchema";
import {
  selectIsAuthenticated,
  selectLoginInProgress,
} from "../../redux/user/userSelectors";

import styles from "./Login.module.css";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authInProgress = useAppSelector(selectLoginInProgress);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PAGES.MAIN);
    }
  }, [isAuthenticated]);

  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });
  const { TypedInput } = useFormComponents<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(fetchUser(data));
  };

  return (
    <div className={styles.formWrapper}>
      <FormProvider {...methods}>
        <form
          className={styles.loginForm}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TypedInput
            name="username"
            label="Имя пользователя"
            disabled={authInProgress}
          />
          <TypedInput
            name="password"
            label="Пароль"
            type="password"
            disabled={authInProgress}
          />
          <button
            className={styles.submitBtn}
            type="submit"
            disabled={authInProgress}
          >
            {authInProgress ? "Вход..." : "Войти"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
