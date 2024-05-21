import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <div className="navbar__section">
      <div className="navbar__container">
        <div className="navbar__links">
          <img className="navbar__logo" src="reactlogo.png"></img>
          <list className="navbar__list">
            <li>Home</li>
            <li>Studio</li>
            <li>Works</li>
            <li>Contact</li>
          </list>
        </div>
        <div className="navbar__icons">
          <img className="navbar__search" src="search.png"></img>
          <button className="navbar__button">hire now</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
