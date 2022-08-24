// import { Link } from "react-router-dom";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import React, { useState } from "react";
import Logo from "../images/ErnestoBecerril.png";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  return (
    <>
      <div className="Navbar">
        <div className="icon-container">
          <img src={Logo} alt="" />
        </div>
        <div id="menu" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaBars
            style={{
              color: "white",
              height: "25px",
              width: "25px",
              float: "right",
              margin: "15px",
            }}
          />
        </div>

        <div
          className="mobileMenu"
          style={{ display: showMobileMenu ? "none" : "block" }}
        >
          <div className="Navbar-container">
            <ul>
              <li>
                <Link
                  to="Container-Front"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aboutMe-container"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  AboutMe
                </Link>
              </li>
              <li>
                <Link
                  to="Container-Front"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  Proyects
                </Link>
              </li>
              <li>
                <Link
                  to="Container-Front"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="close"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <FaTimes style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
