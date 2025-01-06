import { FoodCard } from "../Components/FoodCard";
import { SectionBanner } from "../Components/SectionBanner";
import { Title } from "../Components/Title";
import { useMenu } from "../Hooks/useMenu";
import bannerImg from "../assets/menu/banner3.jpg";
export const OurMenuPage = () => {
  const [menu] = useMenu();
  const offerData = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <SectionBanner
        image={bannerImg}
        title={"OUR MENU"}
        para={"Would you like to try a dish?"}
        height={"800px"}
      ></SectionBanner>
      <div className="my-10">
        <Title para={"---Don't miss---"} title={"TODAY'S OFFER"}></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 mx-auto gap-4 mb-10">
        {offerData.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};
