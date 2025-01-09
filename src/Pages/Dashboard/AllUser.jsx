import React from "react";
import { Title } from "../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

export const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("user");
      return res.data;
    },
  });
  // delete a user
  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // make a user admin
  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/user/admin/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: "User has promoted to admin",
          icon: "success",
          draggable: true,
        });
      }
    });
  };
  return (
    <div>
      <Title title={"MANAGE ALL USERS"} para={"---How many??---"}></Title>
      <div className="w-11/12 lg:w-9/12 mx-auto bg-white py-14 px-10">
        {/* text part */}
        <div className="textTitle flex items-center justify-between">
          <h2 className="text-neutral md:text-lg lg:text-3xl font-bold">
            Total orders: {user.length}
          </h2>
          <button className="btn bg-[#D1A054] text-white font-bold">PAY</button>
        </div>

        {/* table part */}
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white h-16">
              <tr className="">
                <th>No</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, idx) => (
                <tr key={item._id} className="">
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <h2>{item.name}</h2>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{item.email}</td>
                  <td>
                    {item.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(item._id)}
                        className="btn bg-[#D1A054]"
                      >
                        <FaUsers className="text-lg text-white" />
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(item._id)}
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
