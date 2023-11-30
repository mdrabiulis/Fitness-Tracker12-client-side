import { useForm } from "react-hook-form";
import SectionHeading from "../../../ShareComponent/SectionHeading/SectionHeading";
import img from "../../../assets/New folder/banner.jpg";
import "./subscribe.css";

const Subscribe = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset;
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
      <div className="flex subscribe py-12 justify-around items-center">
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
              className="bg-[#FF5D28] rounded-lg w-20 h-[50px]  text-white "
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="">
          <img src={img} alt="" className="w-96"/>
          {/* <h2 className="text-4xl font-bold mt-4">Subscribe To  Emails</h2> */}
          
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
