import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClassCard = ({ item }) => {
  const {_id, image, name, date } = item;
  return (
    <div className="flex">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <div className="space-y-3">
            <h2 className="card-title ">{name}</h2>
            <h3 className="">
              <samp className="font-semibold">Date:</samp> {date}
            </h3>
          </div>
        </div>
        <div className="max-w-full mx-auto ">
          <Link to={`/details/${_id}`}>
            <button className="uppercase bg-[#FF5D28] p-1 md:p-2 rounded-md mb-5 text-white">show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ClassCard.propTypes = {
  item: PropTypes.object,
};
export default ClassCard;
