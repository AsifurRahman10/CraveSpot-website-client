import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

export const useCart = () => {
  const axiosSecured = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecured.get(`carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};
