import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className="bg-main w-full h-full -z-10 fixed"></div>
      <div className="flex justify-center flex-col items-center pt-2">
        <Link to="/" className="font-bold text-5xl text-fav my-6 md:my-12">
          Genext Collab
        </Link>
        <div className="md:bg-white p-12 md:shadow-lg rounded-md">
          <form className="flex flex-col justify-center">
            <h2 className="text-lg text-center font-medium text-fav mb-10 w-96">
              Log in to your account
            </h2>
            <input
              type="email"
              name="email"
              title="Enter email"
              placeholder="Enter email"
              minLength="1"
              aria-required="true"
              required
              className="border rounded-md shadow-sm p-2 bg-white mb-4 focus:border-cyan-500"
            />
            <input
              type="password"
              name="password"
              title="Enter password"
              placeholder="Enter password"
              minLength="8"
              aria-required="true"
              required
              className="border rounded-md shadow-sm p-2 bg-white mb-4"
            />
            <div className="mb-4 text-red-600 rounded-md w-0 min-w-full">
              <span>{null}</span>
            </div>

            <button
              type="submit"
              className="bg-cyan-400 border text-white  font-medium text-md py-2 shadow mb-5
              hover:bg-radial-gradient rounded-md transition-colors duration-150"
            >
              {"Log In"}
            </button>
          </form>
          <div className="text-center mt-4">
            <span className=" text-gray-600">Don&apos;t have an account? </span>
            <Link to="/signup" className="font-medium text-fav ">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
