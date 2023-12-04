import SectionHeading from "../../../ShareComponent/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, Pagination, Navigation ,} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTestimonials from "../../../Hooks/Testimonials/useTestimonials";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews] = useTestimonials();
  return (
    <div>
      <SectionHeading
        titel={"Testimonials"}
        subtitel={" or Success Stories"}
        paragraph={
          "World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience."
        }
      ></SectionHeading>
      <Swiper
        spaceBetween={30}
        // slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-slate-100  "
      >
        {reviews.map((item) => (
          <SwiperSlide key={item._id} className="py-10 ">
            <div className="flex flex-col justify-center text-center max-w-full mx-auto ">
              <div className="max-w-full mx-auto">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
              </div>
              <div className=" max-w-full md:max-w-5xl mx-auto">
                <h2 className="mx-4 lg:mx-0">{item.details}</h2>
              </div>
              <h2 className="text-xl font-bold my-4">{item.name}</h2>
              <div className="avatar max-w-full mx-auto ">
                <div className="w-44 md:w-72 rounded-full">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
