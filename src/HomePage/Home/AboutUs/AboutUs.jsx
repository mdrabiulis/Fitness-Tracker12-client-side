import SectionHeading from "../../../ShareComponent/SectionHeading/SectionHeading";
import img from "../../../assets/New folder/ic1.png";
import img2 from "../../../assets/New folder/ic2.png";
import img3 from "../../../assets/New folder/ic3.png";
import img4 from "../../../assets/New folder/about-img1.png";

const AboutUs = () => {
  return (
    <div>
      <SectionHeading
        titel={"About"}
        subtitel={"Us"}
        paragraph={"BEST IS SELF MOTIVATIONSTAY FOCUSSED STAY FIT & HEALTHY"}
      ></SectionHeading>
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto items-center">
        <div className="space-y-6">
          <div className="flex gap-6 items-center">
            <img src={img3} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Advance Pilates Training</h2>
              <p className="">
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet.. Quisque rutrum. Aenean imperdiet. Etiam
                ultricies nisi vel augue. Curabitur ullam.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src={img} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Power Weight Lifting</h2>
              <p className="">
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet..
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src={img2} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Tennis Training for Boys</h2>
              <p className="">
                Semper nisi. Aenean vulputate eleifend tellus consequat vitae,
                eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet..
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-3 ">
            <img src={img4} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
