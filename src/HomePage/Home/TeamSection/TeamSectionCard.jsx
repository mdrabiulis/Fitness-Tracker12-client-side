import PropTypes from "prop-types";
import SocialIcon from "../../../ShareComponent/SocialIcon/SocialIcon";
import { Link } from "react-router-dom";

const TeamSectionCard = ({ item }) => {
  const { name, img, Special } = item;

  return (
    <Link to={"/trainer"}>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
          <img src={img} alt={name} />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p className="text-[#F9A31C] font-medium ">{Special}</p>
        </div>
        <SocialIcon></SocialIcon>
      </div>
    </Link>
  );
};

TeamSectionCard.propTypes = {
  item: PropTypes.object,
};
export default TeamSectionCard;
