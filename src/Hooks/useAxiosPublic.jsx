import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://crave-spot-website-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export { useAxiosPublic };
