import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../ShareComponent/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const classDetails = useLoaderData();
  const { image, name, date, categories, author, description } = classDetails;

  return (
    <div className="pt-20">
      <Helmet>
        <title>GoLan/Details</title>
      </Helmet>
      <SectionHeading titel={"Class"} subtitel={"Details"}></SectionHeading>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="">
          <img src={image} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="uppercase text-3xl font-bold ">Trainer Info</h2>
          <div className="space-y-4">
            <h2 className="">Name: {name}</h2>
            <h2 className="">Date: {date}</h2>
            <h2 className="">Categories: {categories}</h2>
            <h2 className="">Author: {author}</h2>
          </div>
          <button className="uppercase bg-[#F9A31C] p-1 md:p-2 rounded-md mb-5 text-white">
            Book now
          </button>
        </div>
      </div>
      <div className="max-w-7xl xl:mx-auto my-10  ml-6 mr-6">
        <h2 className="text-lg font-semibold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
