import React from "react";
import "../css/bootswatch.css";
import { Link } from "react-router-dom";
import { FaHeart, FaHome } from "react-icons/fa";

// please read Comments.txt file first
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
