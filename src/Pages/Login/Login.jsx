import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/404/login2.jpg";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import Swal from "sweetalert2";
import "./login.css";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import useUser from "../../Hooks/User500/useUser";
import { useState } from "react";

const Login = () => {
  const [userErr, setUserErr] = useState("");
  const userData = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const { usersignInWithEmailAndPassword } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    usersignInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const role = "member";
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          role,
        };
        console.log(userInfo);
         userData.post('/user', userInfo)
        .then(res =>{res.data
          console.log(res.data);
        })
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login has been successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/")
      })
      .catch((error) => {
        console.log(error.message);
        setUserErr(error.message)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
      setUserErr("")
  };
  return (
    <div>
      <Helmet>
        <title>GoLan/Login</title>
      </Helmet>
      <div className="flex flex-col login-item md:flex-row items-center ">
        <img src={img} className=" rounded-lg md:w-2/4" />

        <div className="w-full lg:w-[35%]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label"></label>
            </div>
            {errors.password && (
              <span className="text-red-700">This field is required</span>
            )}
{userErr && (
              <span className="text-red-700">invalid-credential</span>
            )}
            <div className="form-control mt-6">
              <button className="btn  bg-[#F9A31C]  hover:bg-[#ff6c28] text-white text-xl">
                Login
              </button>
            </div>
            <h2 className="">
              Not a member?
              <Link
                to="/signup"
                className=" text-[#F9A31C] font-roboto hover:text-[#FF6224] ml-1"
              >
                Sign Up Now
              </Link>
            </h2>
          </form>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
