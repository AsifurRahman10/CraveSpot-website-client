import { Title } from "../Title";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "./OnlineSection.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export const OnlineSection = () => {
  return (
    <div className="my-16 w-11/12 md:w-9/12 mx-auto">
      <Title
        para={"---From 11:00am to 10:00pm---"}
        title={"ORDER ONLINE"}
      ></Title>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper relative flex"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-20">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-20">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-20">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-20">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-20">
              Mixed Food
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
