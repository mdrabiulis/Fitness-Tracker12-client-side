import { Outlet } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import Home from "../HomePage/Home/Home/Home";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;