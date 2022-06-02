import React from "react";
import "../css/bootswatch.css";
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";

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
                    style={{ width: "7rem" }}
                    src={apiResult.artworkUrl100}
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
// I then created the Feed component. In this component, I called the apiResults state so when user searches something, the result is fed onto the
// page automatically. In this component, I utilized the react-bootstrap Card styling so my feed looks nice.I also added custom styles. Now the Feed works as follows:
// The apiResults prop is called, and it calls apiResults state sitting in Home that has been fed by setApiResults state from that handleSearch functionality.
// Once called, we map through the data individually using a key set to index. We then use variable apiResult to call the exact
// variables used by apple for example apiResult.artworkUrl60. This returns a picture of the media we have searched. I used Card.Img to display the picture nicely.
// We then call the rest of the variables like trackName and artistName etc. All this will be displayed on the page. I then added some functionality for liking and dislikin
// media using react-icon Fa-Heart.
