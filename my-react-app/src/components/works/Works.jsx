import React from "react";
import "./works.css";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];
const Works = () => {
  return (
    <div className="works__section">
      <div className="works__container">
        <div className="works__left">
          <ul className="works__list">
            {data.map((item) => (
              <li key={item} text={item} className="works__list__item">
                <span> {item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="works__right">
          <div className="works__gallery">
            <div className="works__gallery__imgbox">
              <h3>Earth</h3>
            </div>
            <div className="works__gallery__imgbox">
              <h3>Mercury</h3>
            </div>
            <div className="works__gallery__imgbox">
              <h3>Saturn</h3>
            </div>
            <div className="works__gallery__imgbox">
              <h3>Neptune</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
