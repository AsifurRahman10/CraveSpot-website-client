import { useEffect, useState } from "react";
import { Title } from "./Title";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

export const Testimonial = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10">
      <Title title={"TESTIMONIALS"} para={"---What Our Clients Say---"}></Title>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data.map((rating) => (
            <SwiperSlide key={rating._id} className="">
              <div className="flex flex-col items-center justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={rating.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-7xl mt-6" />
                <p className="text-gray-600 w-3/4 mx-auto mt-6 text-center">
                  {rating.details}
                </p>
                <h3 className="mt-4 text-[#CD9003] font-medium text-3xl">
                  {rating.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
