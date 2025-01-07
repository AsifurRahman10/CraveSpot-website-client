import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
export const Login = () => {
  const captchaRef = useRef(null);
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

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
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
            <p className="text-[#D1A054] text-center font-semibold">
              New here? Create a New Account
            </p>
            <p className="text-center text text-sm mt-4">Or sign in with</p>
            <button className="flex justify-center items-center mt-4 ">
              <FaGoogle className="text-2xl mb-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
