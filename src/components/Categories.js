import React from "react";
import "../css/bootswatch.css";

// please read Comments.txt file first
const Categories = ({ handleCategory, selectCategory }) => {
  return (
    <main id="categories">
      <h4>Categories</h4>
      <div className="form-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="movie"
          onClick={() => {
            handleCategory("movie");
          }}
        >
          Movie
        </label>
      </div>
      <div className="form-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="podcast"
          onClick={() => {
            handleCategory("podcast");
          }}
        >
          Podcast
        </label>
      </div>

      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="music"
          onClick={() => {
            handleCategory("music");
          }}
        >
          Music
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="audio-book"
          onClick={() => {
            handleCategory("audioBook");
          }}
        >
          Audio-book
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="short-film"
          onClick={() => {
            handleCategory("shortFilm");
          }}
        >
          Short-film
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="tv-show"
          onClick={() => {
            handleCategory("tvShow");
          }}
        >
          TV-show
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="software"
          onClick={() => {
            handleCategory("software");
          }}
        >
          Software
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="e-book"
          onClick={() => {
            handleCategory("ebook");
          }}
        >
          E-book
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="all"
          onClick={() => {
            handleCategory("all");
          }}
        >
          All
        </label>
      </div>
    </main>
  );
};

export default Categories;
