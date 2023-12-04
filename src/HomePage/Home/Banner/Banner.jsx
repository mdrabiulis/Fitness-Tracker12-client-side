import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../../assets/Banner/1.png";
import img2 from "../../../assets/Banner/2.png";
import img3 from "../../../assets/Banner/3.png";
import img4 from "../../../assets/Banner/4.png";
import img5 from "../../../assets/Banner/banner.webp";
import img6 from "../../../assets/Banner/banner2.webp";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative" src={img1} alt="" />
          <div className="text-white absolute bottom-0 xl:bottom-20 right-2 xl:right-20  md:my-2 lg:my-6 py-8 md:p-10  bg-black bg-opacity-70">
            <h3 className="border border-yellow-500 rounded-md md:mt-3 md:mb-5 w-52 md:p-2">
              WELCOME TO FITCLASS
            </h3>
            <h2 className="text-sm md:text-xl lg:text-5xl font-bold ">
              Energize Your Life<br></br> with Our Fitness Center
            </h2>
            <p className="text-xs md:text-base lg:text-2xl my-2 md:my-4">
              Fitclass is more than a place where high <br></br>performers come
              to be their best.
            </p>
            <div className="space-x-5">
              <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md">
                Read More
              </button>
              <button className="bg-[#26335A] p-1 md:p-2 rounded-md">
                Appointment Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={img2} alt="" />
          <div className="text-white absolute bottom-0 xl:bottom-20 right-0 xl:right-20  md:my-2 lg:my-6  py-8 md:p-10  bg-black bg-opacity-40">
            <h3 className="border border-yellow-500 rounded-md md:mt-3 md:mb-5 w-52 md:p-2">
              WELCOME TO FITCLASS
            </h3>
            <h2 className="text-sm md:text-xl lg:text-5xl font-bold ">
              Energize Your Life<br></br> with Our Fitness Center
            </h2>
            <p className="text-xs md:text-base lg:text-2xl my-2 md:my-4">
              Fitclass is more than a place where high <br></br>performers come
              to be their best.
            </p>
            <div className="space-x-5">
              <button className="bg-[#F9A31C] p-1 md:p-2 rounded-md">
                Read More
              </button>
              <button className="bg-[#26335A] p-1 md:p-2 rounded-md">
                Appointment Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
