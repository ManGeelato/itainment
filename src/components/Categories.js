import React from "react";
import "../css/bootswatch.css";

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
          htmlFor="audiobook"
          onClick={() => {
            handleCategory("audiobook");
          }}
        >
          Audio-book
        </label>
      </div>
      <div className="htmlForm-check form-check-inline">
        <label
          className={selectCategory}
          htmlFor="shortFilm"
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
          htmlFor="tvShow"
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
          htmlFor="ebook"
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
// I then created the Categories component that is responsible for rendering those buttons written movie, podcast
// etc. It works by receiving a prop via handleCategory method and prop selectCategory which is basically a bootstrap variable
// responsible for picking if user clicked movie, shortFilm or any of those
