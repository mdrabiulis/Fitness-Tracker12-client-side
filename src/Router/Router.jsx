import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Home from "../HomePage/Home/Home/Home";
import SignUp from "../Pages/Sign Up/SignUp";
import ErrorPages from "../Pages/Error/ErrorPages";
import Gallery from "../Pages/Gallery/Gallery";
import Trainer from "../Pages/Trainer/Trainer";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPages></ErrorPages>,
    children: [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/gallery",
          element:<Gallery></Gallery>
        },
        {
          path:"/trainer",
          element:<Trainer></Trainer>
        },
    ],
  },
]);
export default Router;
