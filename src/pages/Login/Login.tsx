import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PAGES } from "../../constants";
import { TextField } from "../../components/TextField/TextField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchLogin } from "../../redux/user/asyncThunks/fetchLogin";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginFormSchema) });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(fetchLogin(data));
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Имя пользователя"
          errorMessage={errors.username?.message}
          disabled={authInProgress}
          {...register("username")}
        />
        <TextField
          label="Пароль"
          type="password"
          errorMessage={errors.password?.message}
          disabled={authInProgress}
          {...register("password")}
        />
        <button
          className={styles.submitBtn}
          type="submit"
          disabled={authInProgress}
        >
          {authInProgress ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
};
