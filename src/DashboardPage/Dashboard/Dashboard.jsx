import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Helmet>
        <title>GoLan/Dashboard</title>
      </Helmet>
      <div className="w-64 min-h-screen bg-orange-400 ml-10">
        <ul className="menu p-4">
          <li>
            <NavLink to={"/dashboard/admin"}>Admin</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/trainer"}>Trainer</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/member"}>Member</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#538CDF] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#538CDF] underline"
                  : ""
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainer"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#538CDF] underline"
                  : ""
              }
            >
              Trainer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#538CDF] underline"
                  : ""
              }
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#538CDF] underline"
                  : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#538CDF] underline"
                  : ""
              }
            >
              Community
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
