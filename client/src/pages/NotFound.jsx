import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center text-gray-500 absolute top-1/3 bottom-1/3 left-0 right-0">
      <h1 className=" font-semibold text-4xl mb-2">Page not found</h1>
      <p className="text-lg">
        This page may be private. You may be able to view it by
        <Link to="/login">
          <strong className="text-blue-600"> loggin in.</strong>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
