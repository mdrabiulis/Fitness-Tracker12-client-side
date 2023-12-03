import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import biceps from "../../assets/TIMETABLE/biceps.webp";
import body from "../../assets/TIMETABLE/body.webp";
import box from "../../assets/TIMETABLE/box.webp";
import boxing from "../../assets/TIMETABLE/boxing-gloves.webp";
import rope from "../../assets/TIMETABLE/rope.webp";
import run from "../../assets/TIMETABLE/run.webp";
import size from "../../assets/TIMETABLE/size.webp";
import yoga from "../../assets/TIMETABLE/yoga.webp";

const Classes = () => {
  return (
    <div className="pt-20">
        <h2 className="w-96 mx-auto mb-10 text-center text-6xl font-bold border-b-4  border-yellow-400">Our Schedule</h2>
      <Tabs>
        <TabList className="text-center  ">
          <Tab >MONDAY</Tab>
          <Tab>TUESDAY</Tab>
          <Tab>WEDNESDAY</Tab>
          <Tab>THURSDAY</Tab>
          <Tab>FRIDAY</Tab>
          <Tab>SATURDAY</Tab>
          <Tab>SUNDAY</Tab>
        </TabList>
        <div className="">
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                {/* <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                {/* <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                {/* <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={size} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06AM-08AM</h3>
                <h2 className="font-bold">WEIGHT LOOSE</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={run} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08AM-10AM</h3>
                <h2 className="font-bold">CARDIO</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={yoga} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">10AM-01PM</h3>
                <h2 className="font-bold">YOGA</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px]  border-yellow-400 space-y-2">
                <img src={body} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">01PM-02PM</h3>
                <h2 className="font-bold">FITNESS</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={box} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">04PM-06PM</h3>
                <h2 className="font-bold">KARATE</h2>
                <h3 className="text-[#FF5D28] font-medium">KEAF SHEN</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                {/* <img src={boxing} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">06PM-07PM</h3>
                <h2 className="font-bold">BOXING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3> */}
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={rope} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">07PM-08PM</h3>
                <h2 className="font-bold">AEROBICS & SKIPPING</h2>
                <h3 className="text-[#FF5D28] font-medium">LEFEW D. LOEE</h3>
              </div>
              <div className=" items-center text-center p-5 border-[1px] border-yellow-400 space-y-2">
                <img src={biceps} alt="" className="w-20 h-20 max-w-fit mx-auto"/>
                <h3 className="bg-zinc-800 text-white mx-14 p-1 rounded-lg">08PM-09PM</h3>
                <h2 className="font-bold">BODY BUILDING</h2>
                <h3 className="text-[#FF5D28] font-medium">RACHEL ADAM</h3>
              </div>
            </div>
            </div>
          </TabPanel>
          
        </div>
      </Tabs>
    </div>
  );
};

export default Classes;
