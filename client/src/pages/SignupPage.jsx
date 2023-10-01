import React from "react";import { Link } from "react-router-dom";


const SignupPage = () => {
  return (
    <div>
      <div className="bg-main w-full h-full -z-10 fixed"></div>
      <div className="flex justify-center flex-col items-center pt-2">
        <Link to="/" className="font-bold text-5xl text-fav my-6 md:my-12">
          Genext Collab
        </Link>
        <div className="md:bg-white p-12 md:shadow-lg rounded-md">
          <form
            className="flex flex-col justify-center"
          >
            <h2 className="text-lg text-center font-medium text-fav mb-10 w-96">
              Sign up for your account
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              className="border rounded-md shadow-sm p-2 bg-white mb-4"
            />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              maxLength="64"
              required
              className="border rounded-md shadow-sm p-2 bg-white mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              minLength="8"
              required
              className="border rounded-md shadow-sm p-2 bg-white mb-4"
            />

            <div className="mb-4 text-red-600 rounded-md w-0 min-w-full">
            </div>

            <button
              type="submit"
              className="bg-cyan-400 border text-white  font-medium text-md py-2 shadow mb-5
            hover:bg-radial-gradient rounded-md transition-colors duration-150"
            >
                Signup
            </button>
          </form>
          <div className="text-center mt-4">
            <span className=" text-gray-600">Already have an account? </span>
            <Link to="/login" className="font-medium text-fav">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
