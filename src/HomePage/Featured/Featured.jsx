import Marquee from "react-fast-marquee";

import SectionHeading from "../../ShareComponent/SectionHeading/SectionHeading";
import { useEffect } from "react";
import { useState } from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <div>
      <SectionHeading
        titel="Featured"
        subtitel="Category"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem
voluptatem obcaecati!"
      ></SectionHeading>
      <Marquee>
        <div className="flex gap-5 md:gap-5 lg:gap-20 my-6">
          {featured.map((item) => (
            <FeaturedCard key={item.id} item={item}></FeaturedCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Featured;
