import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAxiosPublic } from "./useAxiosPublic";

export const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   axios.get("https://crave-spot-website-server.vercel.app/menu").then((res) => {
  //     setMenu(res.data);
  //     setLoading(false);
  //   });
  // }, []);
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return [menu, loading, refetch];
};
