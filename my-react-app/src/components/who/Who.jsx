import React, { useState } from "react";
import "./who.css";

const Who = () => {
  const [checkboxes, setCheckboxes] = useState({
    deployment: true,
    folderStructure: false,
    styling: false,
    Resposive: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <div className="who__section">
      <div className="who__container">
        <div className="who__left">
          <div className="who__left__list">
            <h2>React Project</h2>
            <ul>
              <li>
                <span>1</span>Resposive
              </li>
              <li>
                <span>2</span>Folder Structure
              </li>
              <li>
                <span>3</span>Styling
              </li>
              <li>
                <span>4</span>Deployment
              </li>
            </ul>
          </div>
        </div>
        <div className="who__right">
          <h1 className="who__title">Think outside the square space</h1>
          <div className="who__WWD">
            <img src="line.png" className="who__right__line" alt="Line" />
            <h2 className="who__subtitle">Who we Are</h2>
          </div>
          <p className="who__desc">
            a creative group of designers and developers with a passion for art.
          </p>
          <button className="who__btn">See our works</button>
        </div>
      </div>
    </div>
  );
};

export default Who;
