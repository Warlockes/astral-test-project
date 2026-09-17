import { Outlet } from "react-router-dom";

import { Header, Footer } from "../";

import styles from "./ProtectedPage.module.css";

export const ProtectedPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <div className={styles.body}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
