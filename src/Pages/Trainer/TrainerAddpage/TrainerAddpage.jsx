import Swal from "sweetalert2";
import useFirebase from "../../../Hooks/Firebase/useFirebase";
import useUser from "../../../Hooks/User500/useUser";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const imageKey = import.meta.env.VITE_IMAGE_KEY;
const imageApi = `https://api.imgbb.com/1/upload?key=${imageKey}`;

const TrainerAddpage = () => {
  const { user } = useFirebase();
  const userData = useUser();
const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const img = { image: data.image[0] };
    const res = await userData.post(imageApi, img, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const trainer = {
        name: data.name,
        email: data.email,
        age: data.age,
        img: res.data.data.display_url,
        introduction: data.introduction,
        timeslotday: data.timeslot,
        timeslotweek: data.timeslotweek,
        phone: data.phone,
        yoga: data.yoga,
        fitness: data.fitness,
        meditation: data.meditation,
      };

      const trainerRes = await userData.post("/applied", trainer);
      if (trainerRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your apply  has been successful",
          showConfirmButton: false,
          timer: 1500,
        });
         reset();
         navigate('/')
      }
    }
  };

  return (
    <div className="  max-w-7xl mx-auto mt-7 pt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md  bg-[#eeeff8] px-10">
          <div className="grid md:grid-cols-4 gap-6  ">
            <div className="grid col-span-2  w-full mx-auto">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Age */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  {...register("age", { required: true })}
                  placeholder="Your Age"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Profile Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                />
              </div>
            </div>
            {/* ============================ */}
            <div className="col-span-2  w-full mx-auto">
              {/* Available time in a day */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available time in a day</span>
                </label>
                <input
                  type="number"
                  {...register("timeslot", { required: true })}
                  placeholder="Available Time 1h<=6h"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Available Time in a week */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Time in a week</span>
                </label>
                <input
                  type="number"
                  {...register("timeslotweek", { required: true })}
                  placeholder="Available Time "
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="+123 4567 8910"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* checkbox */}
              <div className="">
                <div className="flex justify-around my-5">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Yoga</span>
                      <input
                        type="checkbox"
                        value={"yoga"}
                        onChange={(e) => e.target.value}
                        {...register("yoga")}
                        className="checkbox checkbox-warning ml-2"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Fitness</span>
                      <input
                        type="checkbox"
                        value={"fitness"}
                        onChange={(e) => e.target.value}
                        {...register("fitness")}
                        className="checkbox checkbox-warning ml-2"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Meditation</span>
                      <input
                        type="checkbox"
                        value={"meditation"}
                        onChange={(e) => e.target.value}
                        {...register("meditation")}
                        className="checkbox checkbox-warning ml-2"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Introduction */}
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Introduction</span>
            </label>
            <textarea
              placeholder="Introduction"
              {...register("introduction", { required: true })}
              className="textarea textarea-bordered textarea-md w-full h-32"
            ></textarea>
          </div>
          <div className=" my-10 pb-10 ">
            <button className="w-full bg-[#FF5D28] h-12 text-white rounded-md">
              Applied Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrainerAddpage;
