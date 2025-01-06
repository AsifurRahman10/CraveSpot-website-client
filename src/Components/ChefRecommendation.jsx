import { useEffect, useState } from "react";
import { Title } from "./Title";
import { RecommendationCard } from "./RecommendationCard";

export const ChefRecommendation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffleData = [...data].sort(() => Math.random() - 0.5);
        setData(shuffleData.slice(0, 3));
      });
  }, []);
  return (
    <div className="my-10">
      <Title title={"CHEF RECOMMENDS"} para={"---Should Try---"}></Title>
      <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
        {data.map((food) => (
          <RecommendationCard food={food}></RecommendationCard>
        ))}
      </div>
    </div>
  );
};
