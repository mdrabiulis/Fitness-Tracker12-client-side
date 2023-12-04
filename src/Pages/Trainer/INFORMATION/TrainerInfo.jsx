import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const TrainerInfo = () => {
  const detailsData = useLoaderData();

  const {
    name,
    img,
    experience,
    age,
    email,
    introduction,
    phone,
    skills,
    special,
  } = detailsData;
  const { fitness, meditation, yoga } = skills;

  return (
    <div className="mb-16">
      <Helmet>
        <title>GoLan/TrainerInfo</title>
      </Helmet>
      <div className="pt-20">
        <h2 className="text-6xl font-bold text-center mb-10">Trainer</h2>
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-0 max-w-7xl mx-auto mb-10">
          <div className="md:w-2/6 lg:w-2/4 mx-4 md:ml-3 ">
            <img src={img} alt="" className="" />
          </div>
          <div className=" md:w-2/3 lg:w-2/4 ml-10 mt-6 md:mt-0 md:ml-0 text-lg font-semibold ">
            <h2 className="text-3xl font-bold uppercase">Information</h2>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-start md:gap-6 ">
              <h2 className="font-bold">
                Name : <span className="text-slate-600">{name}</span>
              </h2>
              <h2 className="font-bold">
                Special :<span className="text-slate-600"> {special}</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-start md:gap-[45px]">
              <h2 className="font-bold">
                Experience :
                <span className="text-slate-600"> {experience}</span>
              </h2>
              <h2 className="font-bold">
                Phone : <span className="text-slate-600">{phone}</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-start md:gap-[105px]">
              <h2 className="font-bold">
                Age : <span className="text-slate-600">{age}</span>
              </h2>
              <h2 className="font-bold ">
                Email :<span className="text-slate-600 "> {email}</span>
              </h2>
            </div>
            <h3 className="">Introduction</h3>
            <p className="text-sm">
              <span className="text-slate-600">{introduction}</span>
            </p>
            <h3 className="my-4 text-2xl font-bold">Skills</h3>
            <div className="flex flex-col gap-2 mr-4 md:mr-0">
              <h2 className="">Yoga</h2>
              <div className="flex items-center gap-2">
                <progress
                  className="progress progress-error w-96"
                  value={yoga}
                  max="100"
                ></progress>
                <h2 className="">{yoga}%</h2>
              </div>
              <h2 className="">Fitness</h2>
              <div className="flex items-center gap-2">
                <progress
                  className="progress progress-error w-96"
                  value={fitness}
                  max="100"
                ></progress>
                <h2 className="">{fitness}%</h2>
              </div>
              <h2 className="">Meditation</h2>
              <div className="flex items-center gap-2">
                <progress
                  className="progress progress-error w-96 "
                  value={meditation}
                  max="100"
                ></progress>
                <h2 className="">{meditation}%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xs mx-auto ">
        <Link to={"/cat"}>
          <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md text-white ">
            {" "}
            CTA button
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainerInfo;
