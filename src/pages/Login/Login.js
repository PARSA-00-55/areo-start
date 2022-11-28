import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-extrabold">Log-in</h2>
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
