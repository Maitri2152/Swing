import { React, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = signInWithEmailAndPassword();

  const movieID = doc(db, "users", `${user?.email}`);

  const likeShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        likedShow: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2 overflow">
      <img
        className="w-full h-auto block overflow-y-none"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />

      <div className="absolute top-1 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white flex flex-col">
        <p className="white-space-normal text-xl md:text-sm font-bold flex justify-center items-center h-full text-center ">
          {item?.title} {item?.name}
        </p>
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          <MdNewReleases size={20} color="yellow" className="mr-1" />
          {item.release_date} {item.first_air_date}
        </p>
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          <FaStar size={20} className="mr-1" color="yellow" />{" "}
          {Math.trunc(item.vote_average * 10)}%
        </p>
        <p onClick={likeShow}>
          {user?.like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
