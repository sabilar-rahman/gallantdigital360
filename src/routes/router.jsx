import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AboutUs from "@/pages/aboutus/AboutUs";
import ContactUsPage from "@/pages/contactus/ContactUsPage";
import BlogPage from "@/pages/blogs/BlogPage";


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
      },
      {
        path: "/contact",
        element:<ContactUsPage/>
      },
      {
        path: "/blogs",
        element:<BlogPage/>
      },
      

    ],
  },
]);


export default router;