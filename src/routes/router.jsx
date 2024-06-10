import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/moneyHistory/",
        element: (
          <>
            <Header />
            <MainPage />
          </>
        ),
      },
      {
        path: "/moneyHistory/details/:detailId",
        element: (
          <>
            <Header />
            <DetailPage />
          </>
        ),
      },
    ],
  },
]);

export default router;
