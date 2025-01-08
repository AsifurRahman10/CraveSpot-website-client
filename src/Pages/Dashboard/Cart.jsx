import { FaTrash } from "react-icons/fa";
import { Title } from "../../Components/Title";
import { useCart } from "../../Hooks/useCart";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

export const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Title para={"---My Cart---"} title={"WANNA ADD MORE?"}></Title>

      <div className="w-11/12 lg:w-9/12 mx-auto bg-white py-14 px-10">
        {/* text part */}
        <div className="textTitle flex items-center justify-between">
          <h2 className="text-neutral md:text-lg lg:text-3xl font-bold">
            Total orders: {cart.length}
          </h2>
          <h3 className="text-neutral md:text-lg lg:text-3xl font-bold">
            total price: ${totalPrice}
          </h3>
          <button className="btn bg-[#D1A054] text-white font-bold">PAY</button>
        </div>

        {/* table part */}
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white h-16">
              <tr className="">
                <th>No</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id} className="">
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-20">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{item.name}</td>
                  <td>$ {item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteFood(item._id)}
                      className="btn btn-ghost bg-[#B91C1C] btn-md"
                    >
                      <FaTrash className="text-white" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
