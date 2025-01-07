import { RecommendationCard } from "../Components/RecommendationCard";
export const OrderTab = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
      {data.map((food) => (
        <RecommendationCard key={food._id} food={food}></RecommendationCard>
      ))}
    </div>
  );
};
