import React, { useState } from "react";
import request from "../request"; // Assuming your API requests are defined in a file named api.js

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${request.requestPopular}&query=${query}${request.requestUpcoming}&query=${query}${request.requestAirOn}&query=${query}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r focus:outline-none"
      >
        Search
      </button>
      {/* <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2 overflow">
        <img
          className="w-full h-auto block overflow-y-none"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        /> */}
      <ul className="mt-4">
        {searchResults.map((result) => (
          <li key={result.id}>{result.name || result.title}</li>
        ))}
      </ul>
    </div>
    // </div>
  );
};

export default SearchBar;
