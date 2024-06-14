import { useQuery } from "@tanstack/react-query";
import { Navigate, createBrowserRouter } from "react-router-dom";
import api from "../api/api";
import AuthLayout from "../components/Layout/AuthLayout";
import BaseLayout from "../components/Layout/BaseLayout";
import Loading from "../components/Loading/Loading";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = JSON.parse(localStorage.getItem("user-token"))?.state
    .accessToken;
  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => await api.auth.checkUser(token),
  });
  if (isPending) return <Loading />;
  if (isError) return <Navigate to="/auth/login" />;
  return user ? <Element {...rest} /> : <Navigate to="/auth/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={BaseLayout} />,
    children: [
      {
        path: "",
        element: <PrivateRoute element={MainPage} />,
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
