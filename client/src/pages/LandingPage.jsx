import React from "react";
import { Link, Navigate } from "react-router-dom";
import { ReactComponent as BoardImg } from "../assets/boardplanner.svg";
import { Route, Routes } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-main w-full h-full -z-10 fixed top-0"></div>
      <div className="flex justify-between items-center lg:pb-16 md:pt-6 pt-4 px-8 lg:px-24">
        <a href="/" className="font-bold text-4xl text-fav">
          Genext Collab
        </a>
        <div>
          <Link
            to="/login"
            className="bg-gray-100 border border-blue-900 text-fav py-2 px-4 shadow font-medium
            rounded-md hover:bg-white hover:text-fav transition-colors duration-150 mr-6 "
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-cyan-400  text-white py-2 px-4 shadow font-medium
              rounded-md hover:bg-radial-gradient transition-colors duration-150"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-0 mx-auto w-11/12 px-2 lg:flex-row">
        <div className="md:w-11/12 pt-16 pb-8 md:px-16">
          <h1 className="text-5xl pb-2 lg:text-6xl md:mb-2 text-fav font-bold h-full text-center lg:text-left">
            Easily build your{" "}
            <strong className="text-gray-900 text-radial-gradient">
              Kanban{" "}
            </strong>
            board within minutes.
          </h1>
          <p className="text-2xl pb-4 leading-8 text-center text-gray-500 lg:text-left">
            Plan, track and organize your dream projects or everyday tasks.
          </p>
          <div className="mt-8 mb-2 flex items-center text-center text-xl">
            <button
              aria-label="Continue as a guest user button"
              className="bg-cyan-400 text-white py-3 px-8 shadow-xl font-medium rounded-md
              hover:bg-radial-gradient hover:shadow-xl transition-all duration-150 w-full h-14 lg:w-1/2 whitespace-nowrap"
            >
              <span>Try It Out</span>
            </button>
          </div>
          {<p className="text-red-600"></p>}
        </div>

        <div className="w-screen h-full md:max-w-xl lg:max-w-full lg:ml-4">
          <BoardImg alt="People plan on board" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;