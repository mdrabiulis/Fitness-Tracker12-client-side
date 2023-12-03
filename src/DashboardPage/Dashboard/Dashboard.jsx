import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ml-10">
                <ul className="menu p-4">
                    <li><NavLink to={"/dashboard/admin"}>Admin</NavLink></li>
                    <li><NavLink to={"/dashboard/trainer"}>Trainer</NavLink></li>
                    <li><NavLink to={"/dashboard/member"}>Member</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;