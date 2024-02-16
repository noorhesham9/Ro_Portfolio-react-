import React, { useEffect, useState, useRef } from "react";
import logo from "./../../assets/roPortfoliowhite.png";
import "./header.css";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Header() {
  // states
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(null);
  const [ismopile, setismopile] = useState(false);
  const [isTop, setisTop] = useState(true);
  const [Clickcount, setClickCount] = useState(0);
  const sizes2 = [1, 3, 2, 2, 3];

  // const div = document.createElement("div");
  function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function sky() {
    for (let i = 0; i < 300; i++) {
      const top = randomPosition(1, 100);
      const div = document.createElement("div");
      const left = randomPosition(1, 100);
      const random = Math.floor(Math.random() * sizes2.length);
      const randomSize = sizes2[random];
      div.style.position = "absolute";
      div.style.top = top + "%";
      div.style.left = left + "%";
      div.style.height = randomSize + "px";
      div.style.width = randomSize + "px";

      div.style.borderRadius = "50%";
      if (i <= 50) {
        div.classList.add("star1");
      }
      if (i <= 100 && i > 50) {
        div.classList.add("star2");
      }
      if (i <= 150 && i > 100) {
        div.classList.add("star3");
      }
      if (i <= 200 && i > 150) {
        div.classList.add("star4");
      }
      if (i <= 250 && i > 200) {
        div.classList.add("star5");
      }
      if (i <= 300 && i > 250) {
        div.classList.add("star6");
      }
      if (containerRef.current === undefined) {
        console.log("first");
      } else {
        containerRef.current.appendChild(div);
      }
    }
  }
  function handleClick() {
    if (Clickcount < 1) {
      sky();
    }
  }

  // width for my window
  let width;
  function setwindowsize() {
    width = window.innerWidth;
    if (width < "990") {
      setismopile(true);
    } else {
      setismopile(false);
    }
  }
  window.addEventListener("resize", setwindowsize);
  window.addEventListener("load", setwindowsize);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 140) {
      setisTop(false);
    } else {
      setisTop(true);
    }
  });
  // my header
  return (
    <div>
      <header
        className={`${isTop ? "Headertoop" : "Headerdown"}  `}
        id="header"
      >
        {/* <div className="loadGRip">
          <div id="loadddd" className="loadingPage">
            <div className="cont">
              <img src={logo} alt="" />
              <span className="loader"></span>
              <span className="loader2"></span>
              <span className="loader3"></span>
              <div className="try"></div>
              <div className="try2"></div>
              <div className="try3"></div>
              <div className="try4"></div>
              <div className="try5"></div>
              <div className="try6"></div>
            </div>
          </div>
        </div> */}
        <div id="headcontain" className="container headcontain">
          <a className="image" href="#">
            <img src={logo} alt="" />
          </a>
          <div className="navfordesk links">
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#services">
                <li>Services</li>
              </a>
              <a href="#resume">
                <li>Resume</li>
              </a>
              <a href="#portfolio">
                <li>Portfolio</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div
            id="burger"
            onClick={() => {
              setIsOpen(true);
              setClickCount(Clickcount + 1);
              handleClick();
            }}
            className="burger"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div
          ref={containerRef}
          id="light"
          className={`navForMob light ${isOpen === false && "hide"} ${
            isOpen === true && "visible"
          } `}
        >
          {/* {div} */}
          <div className="top">
            <a className="logo" href="#">
              <img src={logo} alt="" />
            </a>
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              id="closenavForMob"
              className="x closenavForMob"
            >
              <CloseIcon
                sx={{
                  color: " #fff700",
                  fontSize: "40px",
                }}
              />
            </div>
          </div>
          <div className="middle">
            <ul>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                id="closenavForMobHome"
                href="#"
              >
                <li>Home</li>
              </a>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                id="closenavForMobabout"
                href="#about"
              >
                <li>About</li>
              </a>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                id="closenavForMobServices"
                href="#services"
              >
                <li>Services</li>
              </a>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                id="closenavForMobresume"
                className="bblastch"
                href="#resume"
              >
                <li>Resume</li>
              </a>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                id="closenavForMobportfolio"
                className="blastch"
                href="#portfolio"
              >
                <li>Portfolio</li>
              </a>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                id="closenavForMobcontant"
                className="lastch"
                href="#contact"
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className="bottom">
            <a
              target="blank"
              onClick={() => {
                setIsOpen(false);
              }}
              className="i"
              href="https://web.facebook.com/profile.php?id=100011579193746"
            >
              {/* <i className="fa-brands fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              target="blank"
              onClick={() => {
                setIsOpen(false);
              }}
              className="i"
              href="https://www.linkedin.com/in/radwa-ehab-209555218"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              target="blank"
              onClick={() => {
                setIsOpen(false);
              }}
              className="i"
              href="https://www.behance.net/rodyro"
            >
              <FontAwesomeIcon icon={faBehance} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
