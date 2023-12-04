import { useEffect } from "react";
import SectionHeading from "../../../ShareComponent/SectionHeading/SectionHeading";
import { useState } from "react";
import TeamSectionCard from "./TeamSectionCard";
import useUser from "../../../Hooks/User500/useUser";

const TeamSection = () => {
  const [team, setTeam] = useState([]);
  const userData = useUser();

  useEffect(() => {
    userData.get("/trainer").then((res) => {
      setTeam(res.data);
    });
  }, [userData]);

  const teamdata = team.slice(0, 4);

  return (
    <div>
      <SectionHeading
        titel={"Team"}
        subtitel={"Section"}
        paragraph={
          "World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience."
        }
      ></SectionHeading>
      <div className="flex flex-wrap mx-4 gap-6 justify-center my-6">
        {teamdata.map((item) => (
          <TeamSectionCard key={item._id} item={item}></TeamSectionCard>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
