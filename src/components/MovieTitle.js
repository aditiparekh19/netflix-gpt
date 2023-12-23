import React from "react";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="sm:text-2xl md:text-4xl lg:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg sm:w-1/2 md:w-1/4 lg-w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl font-bold rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white p-4 mx-4 px-12 text-xl font-bold bg-opacity-40 rounded-md hover:bg-opacity-20">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
