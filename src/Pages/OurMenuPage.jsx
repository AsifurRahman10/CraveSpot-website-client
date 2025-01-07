import { Button } from "../Components/Button";
import { FoodCard } from "../Components/FoodCard";
import { SectionBanner } from "../Components/SectionBanner";
import { Title } from "../Components/Title";
import { useMenu } from "../Hooks/useMenu";
import bannerImg from "../assets/menu/banner3.jpg";
import bannerImg2 from "../assets/menu/dessert-bg.jpeg";
import bannerImg3 from "../assets/menu/salad-bg.jpg";
import bannerImg4 from "../assets/menu/soup-bg.jpg";
import bannerImg5 from "../assets/menu/pizza-bg.jpg";
import { Link } from "react-router-dom";

export const OurMenuPage = () => {
  const [menu] = useMenu();
  const offerData = menu.filter((item) => item.category === "offered");
  const dessertData = menu.filter((item) => item.category === "dessert");
  const pizzaData = menu.filter((item) => item.category === "pizza");
  const saladData = menu.filter((item) => item.category === "salad");
  const soupData = menu.filter((item) => item.category === "soup");
  return (
    <div>
      {/* offer section */}
      <SectionBanner
        image={bannerImg}
        title={"OUR MENU"}
        para={"Would you like to try a dish?"}
        height={"h-[400px] md:h-[600px] lg:h-[800px]"}
      ></SectionBanner>
      <div className="my-10">
        <Title para={"---Don't miss---"} title={"TODAY'S OFFER"}></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 mx-auto gap-4 mb-10">
        {offerData.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
      </div>

      {/* Soup data */}

      <SectionBanner
        image={bannerImg2}
        title={"DESSERTS"}
        para={
          "A delightful array of sweet treats to satisfy your cravings, from creamy indulgences to rich baked delights."
        }
        height={"h-[300px] md:h-[500px] lg:h-[700px]"}
      ></SectionBanner>
      <div className="my-10">
        <Title para={"---Don't miss---"} title={"TODAY'S OFFER"}></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 mx-auto gap-4 mb-10">
        {dessertData.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <Link to={"/orderFood/dessert"}>
          <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>

      {/* pizza data */}

      <SectionBanner
        image={bannerImg5}
        title={"PIZZA"}
        para={
          "A savory masterpiece with a crispy crust, zesty sauce, gooey cheese, and endless topping possibilities to satisfy every craving."
        }
        height={"h-[300px] md:h-[500px] lg:h-[700px]"}
      ></SectionBanner>
      <div className="my-10">
        <Title para={"---Don't miss---"} title={"TODAY'S OFFER"}></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 mx-auto gap-4 mb-10">
        {pizzaData.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <Link to={"/orderFood/pizza"}>
          <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>

      {/* salad data */}

      <SectionBanner
        image={bannerImg3}
        title={"SALADS"}
        para={
          "A refreshing medley of crisp greens, vibrant veggies, and flavorful dressings, perfect for a light and healthy delight."
        }
        height={"h-[300px] md:h-[500px] lg:h-[700px]"}
      ></SectionBanner>
      <div className="my-10">
        <Title para={"---Don't miss---"} title={"TODAY'S OFFER"}></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 mx-auto gap-4 mb-10">
        {saladData.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <Link to={"/orderFood/salad"}>
          <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
      {/* SOUPS data */}

      <SectionBanner
        image={bannerImg4}
        title={"SOUPS"}
        para={
          "Warm and comforting bowls of flavorful broths, hearty ingredients, and rich aromas to nourish your soul."
        }
        height={"h-[300px] md:h-[500px] lg:h-[700px]"}
      ></SectionBanner>
      <div className="my-10">
        <Title para={"---Don't miss---"} title={"TODAY'S OFFER"}></Title>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 mx-auto gap-4 mb-10">
        {soupData.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <Link to={"/orderFood/soup"}>
          <Button text={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
    </div>
  );
};
