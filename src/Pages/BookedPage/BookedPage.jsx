import { Helmet } from "react-helmet-async";
import SectionHeading from "../../ShareComponent/SectionHeading/SectionHeading";
import biceps from "../../assets/TIMETABLE/biceps.webp";
import body from "../../assets/TIMETABLE/body.webp";
import box from "../../assets/TIMETABLE/box.webp";
import boxing from "../../assets/TIMETABLE/boxing-gloves.webp";
import rope from "../../assets/TIMETABLE/rope.webp";
import run from "../../assets/TIMETABLE/run.webp";
import size from "../../assets/TIMETABLE/size.webp";
import yoga from "../../assets/TIMETABLE/yoga.webp";
const BookedPage = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>GoLan/BookedPage</title>
      </Helmet>
      <div className="">
        <SectionHeading
          titel={"Silver"}
          subtitel={"Plans"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus, repellendus voluptas voluptate consectetur sit, repellat reprehenderit, in expedita a ea officiis at eaque inventore ratione nisi exercitationem corporis enim?"
          }
        ></SectionHeading>
        <div className="">
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#F9A31C] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                <img
                  src={body}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  01PM-02PM
                </h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto" />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  04PM-06PM
                </h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#F9A31C] font-medium">KEAF SHEN</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#F9A31C] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={biceps}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  08PM-09PM
                </h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <p>
              Consistent Practice: Regular and consistent practice is crucial
              for improvement in karate. Set aside dedicated time for training
              each week.
            </p>
            <p>
              Focus on Basics: Mastering the fundamentals is key to becoming
              proficient in karate. Pay close attention to stances, punches,
              kicks, and blocks.
            </p>
            <p>
              Correct Technique: Ensure that your techniques are executed with
              proper form and technique. Quality is more important than
              quantity.
            </p>
            <p>
              Physical Conditioning: Karate requires strength, flexibility, and
              endurance. Incorporate cardiovascular exercises, strength
              training, and flexibility exercises into your routine.
            </p>
            <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md text-white text-center">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <SectionHeading
          titel={"Gold"}
          subtitel={"Plans"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus, repellendus voluptas voluptate consectetur sit, repellat reprehenderit, in expedita a ea officiis at eaque inventore ratione nisi exercitationem corporis enim?"
          }
        ></SectionHeading>
        <div className="">
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={size}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  06AM-08AM
                </h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#F9A31C] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                {/* <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#F9A31C] font-medium">KEAF SHEN</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={boxing}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  06PM-07PM
                </h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={rope}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  07PM-08PM
                </h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#F9A31C] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={biceps}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  08PM-09PM
                </h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <p>
              Consistent Practice: Regular and consistent practice is crucial
              for improvement in karate. Set aside dedicated time for training
              each week.
            </p>
            <p>
              Focus on Basics: Mastering the fundamentals is key to becoming
              proficient in karate. Pay close attention to stances, punches,
              kicks, and blocks.
            </p>
            <p>
              Correct Technique: Ensure that your techniques are executed with
              proper form and technique. Quality is more important than
              quantity.
            </p>
            <p>
              Physical Conditioning: Karate requires strength, flexibility, and
              endurance. Incorporate cardiovascular exercises, strength
              training, and flexibility exercises into your routine.
            </p>
            <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md text-white text-center">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <SectionHeading
          titel={"Diamond"}
          subtitel={"Plans"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus, repellendus voluptas voluptate consectetur sit, repellat reprehenderit, in expedita a ea officiis at eaque inventore ratione nisi exercitationem corporis enim?"
          }
        ></SectionHeading>
        <div className="">
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={size}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  06AM-08AM
                </h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto" />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  08AM-10AM
                </h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={yoga}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  10AM-01PM
                </h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#F9A31C] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                <img
                  src={body}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  01PM-02PM
                </h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto" />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  04PM-06PM
                </h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#F9A31C] font-medium">KEAF SHEN</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={boxing}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  06PM-07PM
                </h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={rope}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  07PM-08PM
                </h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#F9A31C] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img
                  src={biceps}
                  alt=""
                  className="w-20 h-20 max-w-fit mx-auto"
                />
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">
                  08PM-09PM
                </h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#F9A31C] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            <div className="max-w-7xl mx-auto">
              <p>
                Consistent Practice: Regular and consistent practice is crucial
                for improvement in karate. Set aside dedicated time for training
                each week.
              </p>
              <p>
                Focus on Basics: Mastering the fundamentals is key to becoming
                proficient in karate. Pay close attention to stances, punches,
                kicks, and blocks.
              </p>
              <p>
                Correct Technique: Ensure that your techniques are executed with
                proper form and technique. Quality is more important than
                quantity.
              </p>
              <p>
                Physical Conditioning: Karate requires strength, flexibility,
                and endurance. Incorporate cardiovascular exercises, strength
                training, and flexibility exercises into your routine.
              </p>
              <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md text-white text-center">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedPage;
