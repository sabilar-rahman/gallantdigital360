import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AboutUs from "@/pages/aboutus/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element:<AboutUs/>
      }
    ],
  },
]);


export default router;