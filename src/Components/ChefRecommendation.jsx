import { Title } from "./Title";
import { RecommendationCard } from "./RecommendationCard";
import { useMenu } from "../Hooks/useMenu";

export const ChefRecommendation = () => {
  const [menu] = useMenu();
  const shuffleData = [...menu].sort(() => Math.random() - 0.5);
  const data = shuffleData.slice(0, 3);
  return (
    <div className="my-10 md:my-20">
      <Title title={"CHEF RECOMMENDS"} para={"---Should Try---"}></Title>
      <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
        {data.map((food) => (
          <RecommendationCard key={food._id} food={food}></RecommendationCard>
        ))}
      </div>
    </div>
  );
};
