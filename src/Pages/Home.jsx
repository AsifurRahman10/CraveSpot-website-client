import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { OnlineSection } from "../Components/OnlineSection";
import { ParallaxBannerOne } from "../Components/ParallaxBannerOne";
import { OurMenu } from "../Components/OurMenu";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineSection></OnlineSection>
      <ParallaxBannerOne></ParallaxBannerOne>
      <OurMenu></OurMenu>
    </div>
  );
};
