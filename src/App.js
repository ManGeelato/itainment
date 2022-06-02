/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/bootswatch.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";

function App() {
  const [favourites, setFavourites] = useState([]);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  const handleUnlike = (index) => {
    const favouritesArray = favourites.filter(
      (favourite) => favourite !== favourites[index]
    );
    setFavourites(favouritesArray);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar titleProp="I-TAINMENT" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home favourites={favourites} setFavourites={setFavourites} />
            }
          />
          <Route
            exact
            path="/myfavourites"
            element={
              <Favourites
                favourites={favourites}
                handleUnlikeFavourites={handleUnlike}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

// Firstly I created the application using the react create app command. After, I installed necessary dependencies I needed including
// axios, cors, react-bootstrap, react-dom and react icons.

// I then went to www.bootswatch.com and downloaded the theme for my application. I then included bootstrap links in my index.html file under public.
// I also changed the app title to I-TAINMENT.
// I then created a folder called css, inside with bootswatch.css file with all application css.
// The application is mainly styled with bootsrap from forms, buttons with a few custom styles I made via id elements.

// Inside the App component I created a function that changes the status of the media in case user unlikes the media. It then updates the setFavourites state
// with the updated favourites/(s).

// As well once the user clicks on the like button on any media, localStorage creates a storage called favourites that stores all the media 
// like by the user, by first converting data into a JSON string. 


/**REFERENCES**/
// I watched the below videos before attempting this task:
// https://www.youtube.com/watch?v=0wg0pP-jZhM&ab_channel=KadirMedia
// https://www.youtube.com/watch?v=vxUfx4aM5d8&ab_channel=RoadsideCoder
// https://www.youtube.com/watch?v=8vfQ6SWBZ-U
// Level 2, Task 15 Compulsory Task 1

// I used theme from bootstrap via: 
// https://bootswatch.com/

// Thank You