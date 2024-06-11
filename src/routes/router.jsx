import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout";
import BaseLayout from "../components/Layout/BaseLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "details/:detailId",
        element: <DetailPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
