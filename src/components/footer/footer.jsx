import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="footer gray">
      <div className="container">
        <div className="top">
          <div className="logo">
            <img src="image/fotor_2023-1-19_17_34_42.png" alt="" />
          </div>
          <div className="links">
            <a href="https://web.facebook.com/profile.php?id=100011579193746"></a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/radwa-ehab-209555218"></a>
            <a href="https://www.behance.net/rodyro"></a>
          </div>
        </div>
        <div className="allright">
          all rights reserved ©<span id="year" className="year"></span>{" "}
          <a href="#">Ro_Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
