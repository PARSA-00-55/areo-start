import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("log in Successfull.", {
          style: {
            border: "1px solid black",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-extrabold">Log-in</h2>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: "Email address is required",
                    })}
                  />
                  {errors.email && (
                    <p role="alert" className="text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p role="alert" className="text-red-500">
                      {errors.password?.message}
                    </p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  {loginError && (
                    <p className="mt-2 text-red-600">
                      {"User email and password did't matched"}
                    </p>
                  )}
                </div>
              </form>
              <div className="divider"></div>
              <div>
                <button className="btn btn-outline hover:btn-primary w-full">
                  Login with Google
                </button>
              </div>
              <div className="text-center">
                <p>
                  New to AreoStart?{" "}
                  <Link to="/signup" className="btn btn-link">
                    Sign-up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
