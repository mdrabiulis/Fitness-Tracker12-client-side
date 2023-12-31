import SectionHeading from "../../../ShareComponent/SectionHeading/SectionHeading";
import img from "../../../assets/New folder/banner.jpg";
import useAdmin from "../../../Hooks/Admin/useAdmin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./subscribe.css";

const Subscribe = () => {
  const adminData = useAdmin();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    adminData.post("/newsletter", data).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your subscribe has been successful",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  return (
    <div>
      {" "}
      <SectionHeading
        titel={"Newsletter"}
        subtitel={"Section"}
        paragraph={
          "Be the first to know about new collections and exclusive offers."
        }
      ></SectionHeading>
      <div className="flex flex-col md:flex-row subscribe py-12 justify-around items-center">
        <div className="text-center w-3/5 ">
          <form className="flex flex-col xl:flex-row items-center justify-center gap-3">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              required
              className="input input-bordered w-full max-w-xs "
            />
            <input
              type="email"
              //   defaultValue={user?.email}
              {...register("email", { required: true })}
              placeholder="Email Address"
              required
              className="input input-bordered w-full max-w-xs "
            />

            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-[#F9A31C] rounded-lg w-20 h-[50px]  text-white "
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-4 md:mt-0">
          <img src={img} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
