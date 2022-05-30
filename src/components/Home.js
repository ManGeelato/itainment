import React, { useState } from "react";
import Search from "./Search";
import Feed from "../components/Feed";
import Categories from "../components/Categories";

// please read Comments.txt file first
const Home = ({ favourites, setFavourites }) => {
  const baseURL = "http://localhost:8081";
  const [apiResults, setApiResults] = useState([]);
  const [search, setSearch] = useState({ userInput: "", category: "" });
  const selectCategory = "btn btn-primary";

  const handleWordSpaces = () => {
    const arrayInput = [];
    search.userInput.split("").map((item) => {
      if (item === "") {
        item = "+";
      }
      arrayInput.push(item);
      return item;
    });
    return arrayInput.join("");
  };

  const handleSearch = async (isFilterButtonClick = false) => {
    let searchResult;
    let dataFromAPI;
    let totalData = [];

    if (search.userInput) {
      try {
        if (isFilterButtonClick === false) {
          searchResult = await fetch(
            `${baseURL}/results/?term=` + handleWordSpaces() + search.category
          );
        } else {
          searchResult = await fetch(
            `${baseURL}/results/?term=` +
              handleWordSpaces() +
              "&media=" +
              isFilterButtonClick
          );
        }
        dataFromAPI = await searchResult.json();
        totalData = dataFromAPI.results;
        console.log(totalData);
      } catch (error) {
        console.log("Failed to retrieve data: " + error);
      } finally {
        setApiResults(totalData);
      }
    }
  };

  const handleInputChange = (event) => {
    setSearch((previosState) => {
      return { ...previosState, userInput: event.target.value };
    });
  };

  const handleCategoryClick = (isFilterButtonClick) => {
    setSearch((previosState) => {
      return {
        ...previosState,
        category: `&media=${isFilterButtonClick}`,
      };
    });
    handleSearch(isFilterButtonClick);
  };

  const handleFavourites = (index) => {
    if (favourites.length > 0) {
      if (!favourites.includes(apiResults[index])) {
        setFavourites((previosState) => {
          return [...previosState, apiResults[index]];
        });
        apiResults[index].status = true;
      } else {
        const favouritesArray = favourites.category(
          (favourite) => favourite !== apiResults[index]
        );
        setFavourites(favouritesArray);
        apiResults[index].status = false;
      }
    } else {
      setFavourites((previosState) => {
        return [...previosState, apiResults[index]];
      });
      apiResults[index].status = true;
    }
  };

  return (
    <>
      <Categories
        handleCategory={handleCategoryClick}
        selectCategory={selectCategory}
      />

      <Search
        search={search}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />

      <Feed
        apiResults={apiResults}
        setApiResults={setApiResults}
        handleFavourites={handleFavourites}
      />
    </>
  );
};

export default Home;
