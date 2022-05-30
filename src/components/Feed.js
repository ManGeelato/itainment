import React from "react";
import "../css/bootswatch.css";
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";

// please read Comments.txt file first
const Feed = ({ apiResults, handleFavourites }) => {
  return (
    <>
      <Card id="feed">
        {apiResults.length > 0
          ? apiResults.map((apiResult, index) => {
              return (
                <div key={index} id="index">
                  <Card.Img
                    variant="top"
                    style={{ width: "10rem" }}
                    src={apiResult.artworkUrl60}
                    alt="Media Image"
                    id="mediaImage"
                  />
                  <Card.Body>
                    <header>
                      <Card.Title>
                        <h3>{apiResult.trackName}</h3>
                        <h4>{apiResult.artistName}</h4>
                      </Card.Title>
                    </header>
                    <Card.Text>
                      Media Genre: {apiResult.primaryGenreName}
                    </Card.Text>
                    <p>Media Cost: ${apiResult.trackPrice}</p>
                    <p>Media Date: {apiResult.releaseDate}</p>
                    <p>
                      <span
                        className="text-muted small-like-tag"
                        onClick={() => handleFavourites(index)}
                      >
                        {apiResult.status ? "Unlike" : "Like"}
                        <FaHeart id="likeButton" />
                      </span>
                    </p>
                  </Card.Body>
                </div>
              );
            })
          : "Your search category will appear here..."}
      </Card>
    </>
  );
};

export default Feed;
