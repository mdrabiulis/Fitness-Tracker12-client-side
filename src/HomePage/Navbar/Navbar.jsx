import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start z-50">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">            <li>
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
                login
              </NavLink>
            </li>
          </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-lg font-bold">
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
                login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end z-50">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar online"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
