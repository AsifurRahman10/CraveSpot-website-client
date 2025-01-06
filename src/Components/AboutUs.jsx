import image from "../assets/home/featured.jpg";
import { Button } from "./Button";
export const AboutUs = () => {
  return (
    <div className="bg-parallaxBg2 bg-cover bg-center bg-no-repeat w-11/12 md:w-9/12 mx-auto relative py-10 md:py-20 mb-10 bg-fixed">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20">
        <div className="text-center mb-12">
          <p className="text-[#D99904] italic text-lg">---Check it out---</p>
          <h2 className="text-4xl border-t-4 border-b-4 w-9/12 md:w-1/2 lg:w-1/4 mx-auto py-4 mt-4 text-white">
            FROM OUR MENU
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-11/12 md:w-9/12 mx-auto items-center">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="text-white">
            <p className="text-2xl">March 20, 2023</p>
            <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
            <p className="text-lg">
              At CraveSpot Restaurant, we serve delicious, high-quality food in
              a warm and welcoming atmosphere. Whether it's a casual meal or a
              special occasion, we’re here to make your dining experience
              unforgettable. Thank you for choosing us!
            </p>
            <div className="mt-6">
              <Button text={"Read More"} color={"white"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
