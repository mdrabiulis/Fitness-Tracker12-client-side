import PropTypes from "prop-types";

const FeaturedCard = ({ item }) => {
  const { title, subtitle, img } = item;
  return (
    <div className="flex">
      <div className="card w-96 bg-base-100 shadow-xl ml-7">
        <figure className="px-10 pt-10">
          <img src={img} alt={title} className="rounded-xl bg-[#F9A31C]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title ">{title}</h2>
          <p className="flex-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
FeaturedCard.propTypes = {
  item: PropTypes.object,
};
export default FeaturedCard;
