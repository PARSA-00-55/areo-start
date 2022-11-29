import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const [signUpError, setsignUpError] = useState("");

  const handleSignUp = (data) => {
    console.log(data);
    setsignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.", {
          style: {
            border: "1px solid black",
          },
        });
      })
      .catch((error) => {
        console.error(error);
        setsignUpError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-extrabold">Sign-up</h2>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                    {...register("name", {
                      required: "User name is required",
                    })}
                  />
                  {errors.name && (
                    <p role="alert" className="text-red-500">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: "User email is required",
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
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters long.",
                      },
                    })}
                  />
                  {errors.password && (
                    <p role="alert" className="text-red-500">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  {signUpError && <p className="text-red-600">{signUpError}</p>}
                </div>
              </form>
              <div className="divider"></div>
              <div>
                <button className="btn btn-outline hover:btn-primary w-full">
                  SignUp with Google
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="btn btn-link">
                    log-in
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

export default SignUp;
