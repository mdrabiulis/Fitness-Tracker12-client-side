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
import ClassAdd from "../Pages/Classes Page/ClassAdd";
import BookedPage from "../Pages/BookedPage/BookedPage";
import Admin from "../DashboardPage/Admin/Admin";
import Dashboard from "../DashboardPage/Dashboard/Dashboard";
import Member from "../DashboardPage/Member/Member";
import Trainers from "../DashboardPage/Trainer/Trainers";
import AllUser from "../DashboardPage/Admin/All user/AllUser";

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
          path:"/bookedpage",
          element:<PrivateRoute><BookedPage></BookedPage></PrivateRoute>,
        },
        {
          path:"/classes",
          element:<Classes></Classes>,
        },
        {
          path:"/classesadd",
          element:<ClassAdd></ClassAdd>,
        },
        {
          path:"/details/:id",
          element:<Details></Details>,
          loader: ({params})=>fetch(`http://localhost:5000/classes/${params.id}`)
        },
        {
          path:"/trainer/:id",
          element:<TrainerInfo></TrainerInfo>,
          loader: ({params})=>fetch(`http://localhost:5000/trainer/${params.id}`)
          
        },
    ],
  },
  {
    path: "dashboard",
    element:<Dashboard></Dashboard>,
    children:[

      {
        path:"trainer",
        element:<Trainers></Trainers>
      },



// ========== Admin===============

      {
        path:"alluser",
        element:<AllUser></AllUser>
      },
    ]
  }
]);
export default Router;
