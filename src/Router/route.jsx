import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import PropertyDetails from "../components/Home/pages/PropertyDetails";

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
    ],
  },
]);
