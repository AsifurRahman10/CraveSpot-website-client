import { useEffect, useState } from "react";
import { Title } from "./Title";
import { FoodCard } from "./FoodCard";
import { Button } from "./Button";
import { useMenu } from "../Hooks/useMenu";

export const OurMenu = () => {
  const [menu] = useMenu();
  const popularFood = menu.filter((item) => item.category === "popular");
  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10 md:my-20">
      <Title title={"---Check it out---"} para={"FROM OUR MENU"}></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {popularFood.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <Button text={"View Full Menu"}></Button>
      </div>
    </div>
  );
};
