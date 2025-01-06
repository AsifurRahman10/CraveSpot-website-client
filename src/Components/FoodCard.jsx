export const FoodCard = ({ food }) => {
  const { image, name, recipe, price } = food;
  return (
    <div className="flex gap-2 md:gap-8">
      <div className="w-full md:w-1/4">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="md:w-[120px]"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full">
        <h2 className="text-lg textTitle">{name} ------------------</h2>
        <p className="text-sm text-[#737373]">{recipe}</p>
      </div>
      <div className="">
        <p className="text-[#BB8506] text-lg whitespace-nowrap">$ {price}</p>
      </div>
    </div>
  );
};
