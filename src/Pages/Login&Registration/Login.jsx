import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (data, event) => {
    event.preventDefault();
    console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="mt-10 w-2/6 m-auto border shadow-xl rounded-lg p-6 mb-10">
      <form
        onSubmit={handleSubmit(handleLogin)}
        
      >
        <div className="">
          <label htmlFor="email" className="text-lg font-normal">
            Email
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
            type="email"
            placeholder="Your Email"
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-400 mt-3">
              Email is required
            </p>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="password" className="text-lg font-normal">
            Password
          </label>
          <div className="relative">
            <input
              {...register("password", { required: true })}
              id="password"
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type={showPass ? "text" : "password"}
              placeholder="Your Password"
            />
            <label className="text-2xl absolute top-1/2 -translate-y-1/2  right-4 cursor-pointer">
              {showPass ? <h3>Not Hello</h3> : <h3>Hello</h3>}
            </label>
          </div>
          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-400 mt-3">
              Password is required
            </p>
          )}
          <div className="mt-1">
            <button
              onClick={() => setLoginPage("forgotPassword")}
              className="hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </div>
        <p className="mt-4 text-red-500">{errorMessage}</p>
        <div className="mt-10 ">
          <button className="btn btn-primary w-full">Login</button>
        </div>
      </form>
      <div className="divider"> or</div>
      <Link to={"/register"}>
        <p className="text-center btn w-full">Create a New Account</p>
      </Link>
    </div>
  );
};

export default Login;
