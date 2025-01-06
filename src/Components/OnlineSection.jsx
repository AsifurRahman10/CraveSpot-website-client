import { Title } from "./Title";
import slider1 from "../assets/home/slide1.jpg";
import slider2 from "../assets/home/slide2.jpg";
import slider3 from "../assets/home/slide3.jpg";
import slider4 from "../assets/home/slide4.jpg";
import slider5 from "../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const OnlineSection = () => {
  return (
    <div className="my-10 md:my-20 w-11/12 md:w-9/12 mx-auto">
      <Title para={"---From 11:00am to 10:00pm---"} title={"ORDER ONLINE"} />
      <div>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 4, // For desktops
            },
            768: {
              slidesPerView: 2, // For tablets
            },
            480: {
              slidesPerView: 1, // For mobile phones
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="flex items-center justify-center relative">
            <img
              src={slider1}
              alt="Salads"
              className="object-cover w-full h-full"
            />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-40 md:left-24 lg:left-32">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center relative">
            <img
              src={slider2}
              alt="Soups"
              className="object-cover w-full h-full"
            />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-40 md:left-24 lg:left-32">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center relative">
            <img
              src={slider3}
              alt="Pizzas"
              className="object-cover w-full h-full"
            />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-40 md:left-24 lg:left-32">
              Pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center relative">
            <img
              src={slider4}
              alt="Desserts"
              className="object-cover w-full h-full"
            />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-40 md:left-24 lg:left-32">
              Desserts
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center relative">
            <img
              src={slider5}
              alt="Mixed Food"
              className="object-cover w-full h-full"
            />
            <p className="uppercase textTitle text-white text-2xl absolute z-20 bottom-4 left-40 md:left-24 lg:left-32">
              Mixed Food
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
