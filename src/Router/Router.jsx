import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Home from "../HomePage/Home/Home/Home";
import SignUp from "../Pages/Sign Up/SignUp";
import ErrorPages from "../Pages/Error/ErrorPages";
import Gallery from "../Pages/Gallery/Gallery";
import Trainer from "../Pages/Trainer/Trainer";
import TrainerInfo from "../Pages/Trainer/INFORMATION/TrainerInfo";
import TrainerAddpage from "../Pages/Trainer/TrainerAddpage/TrainerAddpage";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import Classes from "../Pages/Classes Page/Classes";
import Details from "../Pages/Classes Page/Details";

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
        {
          path:"/cat",
          element:<PrivateRoute><TrainerAddpage></TrainerAddpage></PrivateRoute>,
        },
        {
          path:"/classes",
          element:<Classes></Classes>,
        },
        {
          path:"/details",
          element:<Details></Details>,
        },
        {
          path:"/trainer/:id",
          element:<TrainerInfo></TrainerInfo>,
          loader: ({params})=>fetch(`http://localhost:5000/trainer/${params.id}`)
          
        },
    ],
  },
]);
export default Router;
