import { NavLink } from "react-router-dom";

import { PAGES } from "../../constants";
import { HeaderLink } from "../../types/types";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/user/userSelectors";
import { getUserInitials } from "../../utils/getUserInitials";

import styles from "./Header.module.css";

const LINKS: HeaderLink[] = [
  { href: PAGES.MAIN, label: "Главная" },
  { href: PAGES.CARDS, label: "Карточки" },
  { href: PAGES.PROFILE, label: "Профиль" },
];

export const Header = () => {
  const userData = useAppSelector(selectUserData);

  return (
    <div className={styles.header}>
      <NavLink to={PAGES.MAIN} className={styles.logo}>
        AstralTestProject
      </NavLink>
      <div className={styles.navigation}>
        {LINKS.map(({ href, label }, index) => (
          <NavLink
            key={index}
            to={href}
            className={styles.navLink}
            style={({ isActive }) =>
              isActive ? { color: "#0070f3" } : undefined
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      {userData && (
        <div className={styles.profile}>
          <span className={styles.userName}>{userData.fullName}</span>
          <div className={styles.avatar}>
            {getUserInitials(userData.fullName)}
          </div>
        </div>
      )}
    </div>
  );
};
