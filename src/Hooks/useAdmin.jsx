import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

export const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isAdmin, isPending } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin, isPending];
};
