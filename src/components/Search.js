import React from "react";
import "../css/bootswatch.css";

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

// I then fixed the Search button, setting it with search, handleInputChange and handleSearch properties. Now in this component
// when user searches something, the value is changed by calling the search function determing that this is userInput set as a string.
// It the calls handleInputChange which returns the value sitting in the search bar via event.target.value. Now when user clicks Search button,
// It calls the handleSearch function via handleSearch property prompting the function to return what has been searched via the api.
// The search function works like this: If filter button is false, then automatically we know the input is not category type, 
// we then set the result from api into a variable called searchResult. We then convert that data to json format using 
// variable called dataFromAPI. Since this data should be stored in array format for our apiResults state, we then set the data
// into a variable called totalData which in array format. If there's an error receiving data, we catch it by try catch functionality then 
// finally we set totalData into setApiResults state.
// handleSearch function is using fetch functionality to fetch data from api
// I also added functionality to prevent default behavior of page loading when search button is clicked.
