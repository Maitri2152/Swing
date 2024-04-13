import React from "react";
// import Main from "./Main";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center lg:px:32 px:5 bg-cover bg-no-repeat w-full ">
      <div className="w-full lg:w-2/3 space-y-5 top-56 absolute">
        <h1 className=" text-4xl font-extrabold text-white dark:text-white md:text-2xl lg:text-4xl pl-7">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Explore trending
          </span>{" "}
          Movies , Series and Musics.
        </h1>

        <p className="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-300 pl-7 text-balance">
          Here at Swing we make sure to make your work easy and would not let
          your time waste in searching trending movies , series and musics.
        </p>

        <div className="relative py-6 px-28 ">
          <button
            to="/Main"
            className="px-6 py-2 text-xl font-sans text-center hover:bg-blue-300 text-white bg-blue-400 rounded-full"
            onClick={() => navigate("/Main")}
            onAnimationStart={12}
          >
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
