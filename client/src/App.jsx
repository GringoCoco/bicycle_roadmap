import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ProtectedRouter from './components/hocs/ProtectedRouter';
import UserPages from './components/pages/UserPages';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';
import OneRoute from './components/pages/OneRoute';
import useUser from "./hooks/useUser";



function App() {
  const { user, logoutHandler, signUpHandler, loginHandler } = useUser();


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: "/",
          element: <MainPage  user={user}/>,
        },
        {
          path: "/oneroute/:id",
          element: <OneRoute />,
        },
        {
          path: "/user",
          element: (
            <ProtectedRouter
              isAllowed={user.status === "logged"}
              redirecTo={"/"}
            >
              <UserPages user={user} />
            </ProtectedRouter>
          ),
        },
        {
          element: (
            <ProtectedRouter
              isAllowed={user.status !== "logged"}
              redirecTo={"/"}
            />
          ),
          children: [
            {
              path: "/auth/signup",
              element: <SignUpPage signUpHandler={signUpHandler} />,
            },
            {
              path: "/auth/login",
              element: <LoginPage loginHandler={loginHandler} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
