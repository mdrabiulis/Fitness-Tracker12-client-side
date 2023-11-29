import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/404/login2.jpg";
import useFirebase from "../../Hooks/Firebase/useFirebase";
import Swal from "sweetalert2";

const Login = () => {
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login has been successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex flex-col  md:flex-row items-center ">
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

          <div className="form-control mt-6">
            <button className="btn  bg-[#FF5D28]  hover:bg-[#ff6c28] text-white text-xl">
              Login
            </button>
          </div>
          <h2 className="">
            Not a member?
            <Link
              to="/signup"
              className=" text-[#FF5D28] font-roboto hover:text-[#FF6224] ml-1"
            >
              Sign Up Now
            </Link>
          </h2>
        </form>
        {/* <GoogleLogin></GoogleLogin> */}
      </div>
    </div>
  );
};

export default Login;
