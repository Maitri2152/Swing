import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "/Swing/SWING/src/request";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const movie3 = movies[Math.floor(Math.random() * movies.length)];
  const movie4 = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestallPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <div className="flex flex-row ">
        <h1 className="text-2xl font-sans font-bold text-white mt-7 ml-5">
          Trending All Day
        </h1>
      </div>
      <div className="flex flex-row space-x-4">
        <div
          className="flex flex-col items-center justify-center mt-6 hover:opacity-90 cursor-pointer"
          id="slider"
        >
          <div className="w-[500px] h-[300px] text-white text-balance">
            <div className="w-full h-full ">
              <div className="absolute w-full h-[600px] "></div>
              <img
                className="w-full h-full object-cover rounded-full opacity-55"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.name}
              />
              <div className="absolute w-full top-[27%] p-4 md:p-8">
                <h1 className="text-3xl md:text-3xl font-bold">
                  {movie?.original_title}
                </h1>
                <h1 className="text-3xl md:text-3xl font-bold">
                  {movie?.original_name}
                </h1>
                <div className="my-4"></div>
                <p className="text-white font-semibold text-sm ">
                  Released: {movie?.release_date}
                  {movie?.first_air_date}
                </p>

                <p className="text-white font-semibold text-sm ">
                  Media: {movie?.media_type}
                </p>
                <p className="w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] text-gray-200 font-thin text-sm object-cover">
                  {truncateString(movie?.overview, 150)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-6 hover:opacity-90 cursor-pointer"
          id="slider"
        >
          <div className="w-[500px] h-[300px] text-white text-balance">
            <div className="w-full h-full ">
              <div className="absolute w-full h-[600px] "></div>
              <img
                className="w-full h-full object-cover rounded-full opacity-55"
                src={`https://image.tmdb.org/t/p/original/${movie3?.backdrop_path}`}
                alt={movie3?.name}
              />
              <div className="absolute w-full top-[27%] p-4 md:p-8">
                <h1 className="text-3xl md:text-3xl font-bold">
                  {movie3?.original_title}
                </h1>
                <h1 className="text-3xl md:text-3xl font-bold">
                  {movie3?.original_name}
                </h1>
                <div className="my-4"></div>
                <p className="text-white font-semibold text-sm ">
                  Released: {movie3?.release_date}
                  {movie3?.first_air_date}
                </p>

                <p className="text-white font-semibold text-sm ">
                  Media: {movie3?.media_type}
                </p>
                <p className="w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] text-gray-200 font-thin text-sm object-cover">
                  {truncateString(movie3?.overview, 150)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-6 hover:opacity-90 cursor-pointer"
          id="slider"
        >
          <div className="w-[500px] h-[300px] text-white text-balance">
            <div className="w-full h-full ">
              <div className="absolute w-full h-[600px] "></div>
              <img
                className="w-full h-full object-cover rounded-full opacity-55"
                src={`https://image.tmdb.org/t/p/original/${movie4?.backdrop_path}`}
                alt={movie4?.name}
              />
              <div className="absolute w-full top-[27%] p-4 md:p-8">
                <h1 className="text-3xl md:text-3xl font-bold">
                  {movie4?.original_title}
                </h1>
                <h1 className="text-3xl md:text-3xl font-bold">
                  {movie4?.original_name}
                </h1>
                <div className="my-4"></div>
                <p className="text-white font-semibold text-sm ">
                  Released: {movie4?.release_date}
                  {movie4?.first_air_date}
                </p>

                <p className="text-white font-semibold text-sm ">
                  Media: {movie4?.media_type}
                </p>
                <p className="w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] text-gray-200 font-thin text-sm object-cover">
                  {truncateString(movie4?.overview, 150)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
