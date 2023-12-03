
import useClasses from "../../Hooks/Classes/useClasses";
import SectionHeading from "../../ShareComponent/SectionHeading/SectionHeading";
import ClassCard from "./ClassCard";

const ClassesSection = () => {
  const [classes] = useClasses();

  return (
    <div>
      <SectionHeading titel="Our" subtitel={"Classes"}></SectionHeading>
      <div className="flex  flex-wrap gap-5 justify-center">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;
