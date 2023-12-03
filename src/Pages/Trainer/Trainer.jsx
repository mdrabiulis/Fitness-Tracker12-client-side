import { useEffect, useState } from "react";
import useUser from "../../Hooks/User500/useUser";
import SectionHeading from "../../ShareComponent/SectionHeading/SectionHeading";
import TrainerCard from "./TrainerCard";

const Trainer = () => {
  const userData = useUser();
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    userData.get("/trainer").then((res) => {
      setTrainer(res.data);
    });
  }, [userData]);

  return (
    <div className="pt-20">
      <SectionHeading
        titel={"Trainer"}
        subtitel={"Section"}
        paragraph={
          "World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience."
        }
      ></SectionHeading>
      <div className="flex flex-wrap mx-4 gap-6 justify-center my-6">
        {trainer.map((item) => (
          <TrainerCard key={item._id} item={item}></TrainerCard>
        ))}


      </div>

    </div>
  );
};


export default Trainer;
