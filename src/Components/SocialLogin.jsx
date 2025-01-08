import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../Hooks/useAxiosPublic";

export const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  // google login
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      const userData = { name: res.user.displayName, email: res.user.email };
      axiosPublic.post("user", userData).then((res) => {
        console.log(res);
        navigate(location.state?.from || "/");
      });
    });
  };
  return (
    <>
      <p className="text-center text text-sm mt-4">Or sign in with</p>
      <button
        onClick={handleGoogleLogin}
        className="flex justify-center items-center mt-4 "
      >
        <FaGoogle className="text-2xl mb-4" />
      </button>
    </>
  );
};
