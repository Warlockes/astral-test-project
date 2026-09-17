import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { PAGES } from "./constants";
import { store } from "./redux/store";
import { CheckAuth } from "./hoc/CheckAuth";
import { ProtectedPage } from "./layout/ProtectedPage/ProtectedPage";
import {
  Login as LoginPage,
  Cards as CardsPage,
  Main as MainPage,
} from "./pages";

const Profile = () => <h2>Мой профиль (Защищена 2)</h2>;

const router = createBrowserRouter([
  { path: PAGES.LOGIN, element: <LoginPage /> },
  {
    path: PAGES.MAIN,
    element: (
      <CheckAuth>
        <ProtectedPage />
      </CheckAuth>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: PAGES.CARDS, element: <CardsPage /> },
      { path: PAGES.PROFILE, element: <Profile /> },
      { path: "*", element: <Navigate to={PAGES.MAIN} replace /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
