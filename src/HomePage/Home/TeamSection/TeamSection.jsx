import { useEffect } from "react";
import SectionHeading from "../../../ShareComponent/SectionHeading/SectionHeading";
import { useState } from "react";
import TeamSectionCard from "./TeamSectionCard";

const TeamSection = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
      fetch("team.json")
        .then((res) => res.json())
        .then((data) => setTeam(data));
    }, []);
  
    return (
        <div>
            <SectionHeading
            titel={'Team'}
            subtitel={'Section'}
            paragraph={'World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.'}
            ></SectionHeading>
                    <div className="flex flex-wrap mx-4 gap-6 justify-center my-6">
          {team.map((item) => (<TeamSectionCard key={item.id} item={item}></TeamSectionCard>
          ))}
        </div>

        </div>
    );
};

export default TeamSection;