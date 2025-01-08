import { useAuth } from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../Hooks/useAxiosSecure";
import { useCart } from "../Hooks/useCart";

export const RecommendationCard = ({ food }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const { user } = useAuth();
  const { _id, image, name, price } = food;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // sent the data to database
      const cartItem = { menuID: _id, email: user.email, image, name, price };
      axiosSecure.post("/users", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `${name} added`,
            icon: "success",
            draggable: true,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You can not add item to card without logged in",
        text: "login in first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sent to to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: pathname });
        }
      });
    }
  };
  return (
    <div className="card  p-0 rounded-none">
      <figure className="w-full">
        <img src={image} alt="Shoes" className="w-full bg-center" />
      </figure>
      <span className="p-2 px-6 right-4 top-4 absolute text-white bg-black">
        {price}
      </span>
      <div className="card-body items-center text-center bg-[#F3F3F3]">
        <h2 className="card-title text-2xl font-semibold">{name}</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(food)}
            className="btn mt-12 uppercase block mx-auto btn-outline border-0 border-b-4 px-8 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506] text-lg font-medium"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
