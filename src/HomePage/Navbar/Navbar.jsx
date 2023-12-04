import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import Swal from "sweetalert2";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const { user, usersignOut } = useFirebase();

  const hendleusersignOut = () => {
    usersignOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };
  return (
    <div>
      <div className="navbar fixed z-50 bg-white bg-opacity-60">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              {" "}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#F9A31C] underline"
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
                      ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                      ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                      ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                      ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                      ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                      ? "text-white bg-[#F9A31C] p-2 rounded-md"
                      : ""
                  }
                >
                  login
                </NavLink>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" />
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
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
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
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
                    : ""
                }
              >
                Community
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
                    : ""
                }
              >
                login
              </NavLink> */}
            </li>
          </ul>
        </div>
        <div className="navbar-end z-50">
          <div className="dropdown dropdown-end">
            {user ? (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-[#F9A31C] p-2 rounded-md"
                    : ""
                }
              >
                login
              </NavLink>
            )}
            {!user ? (
              ""
            ) : (
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={hendleusersignOut}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
