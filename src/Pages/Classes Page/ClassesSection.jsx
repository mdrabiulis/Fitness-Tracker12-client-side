import { Link } from "react-router-dom";
import useClasses from "../../Hooks/Classes/useClasses";
import SectionHeading from "../../ShareComponent/SectionHeading/SectionHeading";
import ClassCard from "./ClassCard";

const ClassesSection = () => {
  const [classes] = useClasses();

  return (
    <div>
      <SectionHeading titel="Our" subtitel={"Classes"}></SectionHeading>
      <div className="flex  flex-wrap gap-5 justify-center mb-20">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
      <div className="my-20 text-center ">
        <Link to={"/classesadd"}>
          <button className="uppercase bg-[#F9A31C] p-1 md:p-2 rounded-md mb-5 text-white">
            Add New Class
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassesSection;
