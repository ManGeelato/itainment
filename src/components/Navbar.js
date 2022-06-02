import React from "react";
import "../css/bootswatch.css";
import { Link } from "react-router-dom";
import { FaHeart, FaHome } from "react-icons/fa";

const Navbar = ({ titleProp }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <h3 id="title">{titleProp}</h3>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item" id="favourites">
            <Link to="/" id="links">
              <FaHome />
              Home
            </Link>
          </li>
          <li className="nav-item" id="favourites">
            <Link to="/myfavourites" id="links">
              <FaHeart />
              Favourites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
// After I created a component called Navbar. This component is for navigation. In this component, I imported my css, Link from react-router-dom and some react icons.
// I went to App.js, created a prop for application title. I then called the prop inside Navbar with the name titleProp, that I called with h3 attributes.
// I then added Links to Home and Favourites for user to have easy navigation. 
// From Home, I went to App.js, imported the component and linked the Home link from Navbar component using react-router-dom functionalities.
