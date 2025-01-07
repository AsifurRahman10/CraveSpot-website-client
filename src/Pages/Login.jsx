import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // handle Captcha
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      navigate("/");
    });
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password).then((res) => {
      Swal.fire({
        title: "Congrats",
        text: "Login success",
        icon: "success",
      });
      navigate("/");
    });
  };

  return (
    <div className="bg-authBg min-h-screen bg-cover bg-center flex items-center justify-center">
      <div className="w-9/12 h-3/4 pt-16 m-auto shadow-2xl py-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left flex-1">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-lg flex-1">
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="font-bold text-4xl text-center">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  type="text"
                  onBlur={handleCaptcha}
                  ref={captchaRef}
                  placeholder="Enter the captcha"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  input="submit"
                  className="btn bg-[#D1A054] text-white"
                  disabled={disable}
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-[#D1A054] text-center">
              New here?{" "}
              <Link to={"/register"}>
                <span className=" font-semibold">Create a New Account</span>
              </Link>
            </p>
            <p className="text-center text text-sm mt-4">Or sign in with</p>
            <button
              onClick={handleGoogleLogin}
              className="flex justify-center items-center mt-4 "
            >
              <FaGoogle className="text-2xl mb-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
