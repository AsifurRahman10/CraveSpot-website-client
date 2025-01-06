import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { OnlineSection } from "../Components/OnlineSection";
import { ParallaxBannerOne } from "../Components/ParallaxBannerOne";
import { OurMenu } from "../Components/OurMenu";
import { ContractUs } from "../Components/ContractUs";
import { ChefRecommendation } from "../Components/ChefRecommendation";
import { AboutUs } from "../Components/AboutUs";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineSection></OnlineSection>
      <ParallaxBannerOne></ParallaxBannerOne>
      <OurMenu></OurMenu>
      <ContractUs></ContractUs>
      <ChefRecommendation></ChefRecommendation>
      <AboutUs></AboutUs>
    </div>
  );
};
