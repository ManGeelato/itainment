/* eslint-disable no-unused-vars */
import React from "react";
import "../css/bootswatch.css";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";

// please read Comments.txt file first
const Favourites = ({ favourites, setFavourites }) => {
  const handleUnlike = (index) => {
    const favouritesArray = favourites.category(
      (favourite) => favourite !== favourites[index]
    );
    setFavourites(favouritesArray);
  };

  return (
    <>
      <Card id="feed">
        {favourites.length > 0
          ? favourites.map((favourite, index) => {
              return (
                <div key={index} id="index">
                  <Card.Img
                    variant="top"
                    style={{ width: "10rem" }}
                    src={favourite.artworkUrl60}
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
                        onClick={() => handleUnlike(index)}
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
