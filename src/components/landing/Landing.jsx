import React from "react";
import "./landing.css";
const Landing = () => {
  return (
    <section id="lannnding" className="landing light">
      <div className="container content">
        <div className="text">
          <span> Hi I'm </span>
          <span>
            {" "}
            Radwa <span className="ehap">Ehab</span>{" "}
          </span>
          <span>
            I'm a<p className="graphic">Graphic Designer</p>
          </span>
          <a href="#contact">
            {" "}
            <p>hire me</p>{" "}
          </a>
        </div>
        <div className="image">
          <div className="meteor-1"></div>
          <div className="meteor-2"></div>
          <div className="meteor-3"></div>
          <div className="meteor-4"></div>
          <div className="meteor-5"></div>
          <div className="meteor-6"></div>
          <div className="meteor-7"></div>
          <img src="image/radwa-cutted.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
