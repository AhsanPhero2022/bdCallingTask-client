import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/design/Home/Home";

import BuyAService from "../components/pages/BuyAService/BuyAService";
import PropertyDetails from "../components/design/PropertyDetails/PropertyDetails";

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
        path: "/propertyDetails",
        element: <PropertyDetails />,
      },
      {
        path: "/buyAService",
        element: <BuyAService />,
      },
    ],
  },
]);
