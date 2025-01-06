export const ParallaxBannerOne = () => {
  return (
    <div className="bg-parallaxBg1 bg-cover w-11/12 md:w-9/12 mx-auto relative py-10 md:py-20 mb-10 bg-fixed">
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
      <div className="bg-[#FFFFFF] text-center w-10/12 mx-auto relative z-20 py-12 md:py-24">
        <h2 className="textTitle text-4xl mb-4">CraveSpot Restaurant</h2>
        <p className="w-9/12 mx-auto text-sm">
          CraveSpot Restaurant offers a warm and inviting atmosphere where
          customers can enjoy a delightful dining experience. We are committed
          to serving high-quality, fresh ingredients in every dish, ensuring a
          memorable meal for every guest. Our menu is thoughtfully crafted to
          cater to a variety of tastes, making it the perfect spot for food
          lovers looking for delicious, expertly prepared meals.
        </p>
      </div>
    </div>
  );
};
