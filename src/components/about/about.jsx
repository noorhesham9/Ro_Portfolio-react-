import React from "react";
import "./about.css";
import img from "../../assets/roPortfoliowhite.png";
function About() {
  return (
    <section id="about" className="about gray">
      <div className="mainhead">
        <h2>About</h2>
      </div>
      <div className="container content">
        <div className="image">
          <div className="gerd">
            <img src={img} alt="" />
          </div>
        </div>
        <div id="aboutTText" className="text">
          <div className="sentence">
            <span>I'm Radwa</span>
            <span>
              I'm <span>graphic designer</span> and <span>Instructor</span>{" "}
            </span>
            <span>
              I worked as a Graphic designer for 3 years ago, I started this
              field in a student activity as a member, and when I completed the
              season I started my way to be an instructor, to share my knowledge
              as possible I can, like our slogan in the student activity " Share
              Knowledge.. Life Better". at the beginning I learned a lot from
              our Instructors and Now I did the same things, in my course I
              teach you how to make a design from creating a simple one to a
              Great advanced one. Now I'm instructor for 3 academy; offline and
              online courses. + my own private courses 🤍
              <p>and I love my job so much.</p>
            </span>
          </div>
          <div className="infor">
            <div className="topLine">
              <span></span>
              <span></span>
            </div>
            <div className="rightLine"></div>
            <div className="leftLine"></div>
            <div className="bottomLine">
              <span></span>
              <span></span>
            </div>
            <div className="left">
              <div className="name cat">
                <div className="main">Full Name:</div>
                <div className="notmain">Radwa Ehab</div>
              </div>
              <div className="adress cat">
                <div className="main">Address:</div>
                <div className="notmain">Giza, Egypt</div>
              </div>
              <div className="phone cat">
                <div className="main">Phone:</div>
                <div className="notmain">01122414413</div>
              </div>
            </div>
            <div className="right">
              <div className="birth cat">
                <div className="main">Birthday:</div>
                <div className="notmain">14/8/1999</div>
              </div>
              <div className="email cat">
                <div className="main">Email:</div>
                <div className="notmain">radwa.ehab99@gmail.com</div>
              </div>
              <div className="nation cat">
                <div className="main">Nationality:</div>
                <div className="notmain">Egyption</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
