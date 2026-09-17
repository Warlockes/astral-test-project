import { EditView } from "../../components";

import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/user/userSelectors";

import styles from "./Profile.module.css";

export const Profile = () => {
  const userData = useAppSelector(selectUserData);

  if (!userData)
    return <div className={styles.empty}>Нет данных о пользователе</div>;

  return <EditView userData={userData} />;
};
