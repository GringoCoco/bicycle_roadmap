import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ProtectedRouter from './components/hocs/ProtectedRouter';
import UserPages from './components/pages/UserPages';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';


function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/user",
          element: (<ProtectedRouter
            isAllowed={user.status === "logged"}
            redirecTo={"/"}
          >
            <UserPages  />
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
              element: <SignUpPage />,
            },
            {
              path: "/auth/login",
              element: <LoginPage/>,
            },

          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}/>;  
  
}

export default App
