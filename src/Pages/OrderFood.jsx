import { useState } from "react";
import { SectionBanner } from "../Components/SectionBanner";
import bannerImg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../Hooks/useMenu";

import { OrderTab } from "../Components/OrderTab";
import { useParams } from "react-router-dom";

export const OrderFood = () => {
  const { category } = useParams();
  const categoryList = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialTab = categoryList.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTab);
  const [menu] = useMenu();
  const drinksData = menu.filter((item) => item.category === "drinks");
  const dessertData = menu.filter((item) => item.category === "dessert");
  const pizzaData = menu.filter((item) => item.category === "pizza");
  const saladData = menu.filter((item) => item.category === "salad");
  const soupData = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <SectionBanner
        image={bannerImg}
        title={"Order Food"}
        para={"Would you like to try a dish?"}
        height={"h-[400px] md:h-[600px] lg:h-[800px]"}
      ></SectionBanner>

      {/* tabs */}
      <div className="mt-10 md:mt-20 w-11/12 md:w-9/12 mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center md:space-x-6">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab data={saladData}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab data={pizzaData}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab data={soupData}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab data={dessertData}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab data={drinksData}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
