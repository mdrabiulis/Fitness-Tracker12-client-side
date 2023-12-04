import PropTypes from "prop-types";
const SectionHeading = ({ titel, subtitel, paragraph }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h2 className="text-4xl font-bold mb-3">
        {titel} <samp className="text-[#F9A31C]">{subtitel}</samp>
      </h2>
      <p className="mb-8 mx-3 md:mx-0">{paragraph}</p>
    </div>
  );
};

SectionHeading.propTypes = {
  titel: PropTypes.string,
  subtitel: PropTypes.string,
  paragraph: PropTypes.string,
};
export default SectionHeading;
