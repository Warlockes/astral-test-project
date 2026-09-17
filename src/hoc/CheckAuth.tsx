import { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { PAGES } from "../constants";
import { useAppSelector } from "../redux/hooks";
import { selectIsAuthenticated } from "../redux/user/userSelectors";

export const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (!isAuthenticated)
    return <Navigate to={PAGES.LOGIN} state={{ from: location }} replace />;

  return children;
};
