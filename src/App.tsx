import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { CheckAuth } from "./hoc/CheckAuth";
import { Login as LoginPage } from "./pages";
import { ProtectedPage } from "./layout/ProtectedPage/ProtectedPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PAGES } from "./constants";

const Dashboard = () => <h2>Панель управления (Защищена 1)</h2>;
const Profile = () => <h2>Мой профиль (Защищена 2)</h2>;
const Settings = () => <h2>Настройки системы (Защищена 3)</h2>;

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
      { index: true, element: <Dashboard /> },
      { path: PAGES.PROFILE, element: <Profile /> },
      { path: PAGES.CARDS, element: <Settings /> },
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
