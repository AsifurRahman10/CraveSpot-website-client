import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { OnlineSection } from "../Components/OnlineSection";
import { ParallaxBannerOne } from "../Components/ParallaxBannerOne";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineSection></OnlineSection>
      <ParallaxBannerOne></ParallaxBannerOne>
    </div>
  );
};
