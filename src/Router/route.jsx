import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/design/Home/Home";

import BuyAService from "../components/pages/BuyAService/BuyAService";

import PropertyDetailsRoute from "../components/pages/PropertyDetailsRoute.jsx/PropertyDetailsRoute";
import AboutPage from "../components/pages/AboutPage/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutPage",
        element: <AboutPage />,
      },
      {
        path: "/propertyDetails",
        element: <PropertyDetailsRoute />,
      },
      {
        path: "/buyAService",
        element: <BuyAService />,
      },
    ],
  },
]);
