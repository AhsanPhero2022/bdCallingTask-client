import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/design/Home/Home";
import PropertyDetails from "../components/pages/PropertyDetails";
import BuyAService from "../components/pages/BuyAService/BuyAService";

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
