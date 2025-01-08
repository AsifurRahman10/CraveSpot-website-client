import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useAxiosPublic } from "../Hooks/useAxiosPublic";
import { SocialLogin } from "../Components/SocialLogin";

export const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserdata } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        return updateUserdata(data.name, data.image);
      })
      .then(() => {
        const userData = { name: data.name, email: data.email };
        axiosPublic.post("/user", userData).then((res) => {
          if (res.data.insertedId) {
            navigate("/");
            Swal.fire({
              title: "User successfully registered",
              icon: "success",
              draggable: true,
            });
          }
        });
      });
  };
  return (
    <div className="bg-authBg min-h-screen bg-cover bg-center flex items-center justify-center">
      <div className="w-9/12 h-3/4 pt-16 m-auto shadow-2xl py-16">
        <div className="hero-content flex-col lg:flex-row-reverse ml-20">
          <div className="text-center lg:text-left flex-1 ml-20">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-lg flex-1">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="font-bold text-4xl text-center">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  {...register("name")}
                  type="text"
                  placeholder="Enter you name"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Photo Url
                  </span>
                </label>
                <input
                  name="image"
                  {...register("image")}
                  type="text"
                  placeholder="Enter photo URL"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  {...register("email")}
                  type="email"
                  placeholder="Enter you name"
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
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                      message:
                        "Your password must contain one uppercase, one lowercase letter, and a number.",
                    },
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded-lg"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-4">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <button input="submit" className="btn bg-[#D1A054] text-white">
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-[#D1A054] text-center ">
              Already have an account?
              <Link to={"/login"}>
                <span className="font-semibold"> Sign in now</span>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};
