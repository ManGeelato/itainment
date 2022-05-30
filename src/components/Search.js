import React from "react";
import "../css/bootswatch.css";

// please read Comments.txt file first
const Search = ({ search, handleInputChange, handleSearch }) => {
  return (
    <>
      <form className="form-inline my-2 my-lg-0" id="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search music, films, ebooks, audiobook, movies and many more..."
          aria-label="Search"
          value={search.userInput}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          id="btnSearch"
          onClick={(e) => handleSearch(e.preventDefault())}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
