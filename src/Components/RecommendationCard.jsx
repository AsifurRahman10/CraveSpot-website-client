export const RecommendationCard = ({ food }) => {
  const { image, name } = food;
  return (
    <div className="card  p-0 rounded-none">
      <figure className="w-full">
        <img src={image} alt="Shoes" className="w-full bg-center" />
      </figure>
      <div className="card-body items-center text-center bg-[#F3F3F3]">
        <h2 className="card-title text-2xl font-semibold">{name}</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions">
          <button className="btn mt-12 uppercase block mx-auto btn-outline border-0 border-b-4 px-8 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506] text-lg font-medium">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
