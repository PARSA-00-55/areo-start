import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-extrabold">Sign-up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
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
