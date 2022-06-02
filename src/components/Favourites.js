/* eslint-disable no-unused-vars */
import React from "react";
import "../css/bootswatch.css";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";

const Favourites = ({ favourites, handleUnlikeFavourites }) => {

  return (
    <>
      <Card id="feed">
        {favourites.length > 0
          ? favourites.map((favourite, index) => {
              return (
                <div key={index} id="index">
                  <Card.Img
                    variant="top"
                    style={{ width: "7rem" }}
                    src={favourite.artworkUrl100}
                    alt="Media Image"
                    id="mediaImage"
                  />
                  <Card.Body>
                    <header>
                      <Card.Title>
                        <h2>{favourite.trackName}</h2>
                        <h3>{favourite.artistName}</h3>
                      </Card.Title>
                    </header>
                    <Card.Text>
                      Media Genre: {favourite.primaryGenreName}
                    </Card.Text>
                    <p>Media Cost: ${favourite.trackPrice}</p>
                    <p>Media Date: {favourite.releaseDate}</p>
                    <p>
                      <span
                        className="text-muted small-like-tag"
                        onClick={() => handleUnlikeFavourites(index)}
                      >
                        {favourite.status ? "Unlike" : "Like"}
                        <FaHeart id="likeButton" />
                      </span>
                    </p>
                  </Card.Body>
                </div>
              );
            })
          : "Your favourites will appear here..."}
      </Card>
    </>
  );
};
export default Favourites;
/*I then created a component called Favourites since user wants to add favorites. After creating this component, I went to App.js and imported the component and linked it again
using react-router-dom functionality. I created state favorites and setFavourites via useState hook.
Now, in Favourites component works like this: When user searches something and its displayed on the page via the Feed component, when they click the heart button, 
this will change the status alerting handleFavourite functionality to add new media into our favorites array
.Now handleFavourite function works by first checking if the index media clicked is actually in the setApiResults array state. 
It will then set Favourites with the index media
liked otherwise we create a new array so if user got a bunch of media they like, we we'll store them in this array. Again we setFavourites with the
new array created.Now in the Feed component I created a prop so we can add functionality to the feed page when information is displayed. Now when user clicks the heart icon from Feed component
, it sends that information to Favourites component via favourites state fed by setFavourites via handleFavourites functionality
sitting in Home component. Now in Favourites component, we again map individually each media favoured and use the Card display functionality from
react-bootstrap to display the media nicely. */