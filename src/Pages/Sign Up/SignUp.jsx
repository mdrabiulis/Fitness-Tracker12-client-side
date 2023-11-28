import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/404/signup.jpg";

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },reset,
      } = useForm();
    
      const onSubmit =data =>{
        
        console.log(data);
        reset()
      }
  return (
    <div className="flex flex-col  md:flex-row items-center ">
      <img src={img} className=" rounded-lg md:w-2/4" />

      <div className="w-full lg:w-[35%]">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          {errors.name && (
            <span className="text-red-700">This field is required</span>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Photo URL</span>
            </label>
            <input
              type="url"
              {...register("photo", { required: true })}
              placeholder="Photo"
              className="input input-bordered"
            />
          </div>
          {errors.photo && (
            <span className="text-red-700">This field is required</span>
          )}
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
              {...register("password",{ required: true, pattern:/^(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%*#?&]).{7,16}$/i })}
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label"></label>
          </div>
          {errors.password && (
            <span className="text-red-700">Password must contain one digit from 1 to 9 , one uppercase letter, a special character and it must be 7-16 characters long.!  Example: Aa123@#$ </span>
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

export default SignUp;
