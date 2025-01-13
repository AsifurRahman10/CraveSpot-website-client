import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://crave-spot-website-server.vercel.app",
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  // request
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "Access-token"
      )}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      console.log(err);
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await signOutUser();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export { useAxiosSecure };
