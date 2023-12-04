import { Link } from "react-router-dom";
import SocialIcon from "../../ShareComponent/SocialIcon/SocialIcon";
import PropTypes from "prop-types";

const TrainerCard = ({ item }) => {
  const { _id, name, img, Special, experience, timeslot } = item;

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img src={img} alt={name} />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="text-[#F9A31C] font-medium ">{Special}</p>
        <div className="flex justify-around py-2">
          <p className=" font-medium ">Available time: {timeslot}h</p>
          <p className=" font-medium ">{experience}</p>
        </div>
      </div>
      <SocialIcon></SocialIcon>
      <Link to={`/trainer/${_id}`}>
        {" "}
        <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md text-white ml-36 mb-10 mt-5">
          {" "}
          Know more
        </button>
      </Link>
    </div>
  );
};

TrainerCard.propTypes = {
  item: PropTypes.object,
};
export default TrainerCard;
