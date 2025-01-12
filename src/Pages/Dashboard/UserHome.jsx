import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import noImg from "../../assets/dashboard/noimg.png";

export const UserHome = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["completedOrder"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/completedOrder/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="ml-4 md:ml-10 mr-4">
      <h2 className="text-xl md:text-3xl font-bold">
        Welcome, back {user?.displayName}
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="w-full mt-10">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Total Order Completed</div>
              <div className="stat-value">{data.length}</div>
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="mt-10 w-1/2 flex flex-col justify-center items-center">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <img src={user?.photoURL ? user?.photoURL : noImg} />
            </div>
          </div>
          <p className="text-lg md:text-2xl font-bold mt-4 text-nowrap">
            {user?.displayName}
          </p>
        </div>
      </div>
    </div>
  );
};
