import React from "react";
import "./hero.css";
import Nav from "../navbar/Nav";

const Hero = () => {
  return (
    <div className="hero__section">
      <Nav />
      <div className="hero__container">
        <div className="hero__container__left">
          <h1 className="hero__left__title">Think. Make. Solve.</h1>
          <div className="hero__container__WWD">
            <img src="line.png" className="hero__left__line"></img>
            <h2 className="hero_WWDP">What We Do</h2>
          </div>
          <p className="hero_desc">
            we enjoy creating delightful, human-centered digital experiences.
          </p>
          <button className="hero__left__button">Learn More</button>
        </div>
        <div className="hero__container__right">
          <div className="hero__right__3dmodel"></div>
          <img className="hero__right__img" src="saturn.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
