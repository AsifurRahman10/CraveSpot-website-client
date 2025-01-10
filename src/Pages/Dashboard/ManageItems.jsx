import Swal from "sweetalert2";
import { Title } from "../../Components/Title";
import { useMenu } from "../../Hooks/useMenu";
import { FaTrash } from "react-icons/fa";
import { LuSquarePen } from "react-icons/lu";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

export const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const [menu, , refetch] = useMenu();

  // delete a item
  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(res);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Item has been deleted",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto  py-14 px-10">
      <Title title={"---Hurry Up!---"} para={"MANAGE ALL ITEMS"}></Title>
      <div>
        {/* text part */}
        <div className="textTitle flex items-center justify-between">
          <h2 className="text-neutral md:text-lg lg:text-3xl font-bold">
            {/* Total orders: {cart.length} */}
          </h2>
          <h3 className="text-neutral md:text-lg lg:text-3xl font-bold">
            {/* total price: ${totalPrice} */}
          </h3>
        </div>
      </div>
      {/* table part */}
      <div className="overflow-x-auto mt-6 bg-white">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white h-16">
            <tr className="">
              <th>No</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={idx} className="">
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
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-ghost bg-[#D1A054] btn-md">
                      <LuSquarePen className="text-white" />
                    </button>
                  </Link>
                </th>
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
  );
};
