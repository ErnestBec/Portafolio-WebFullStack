import React from "react";
import { Link } from "react-scroll";
import "../styles/presentation.css";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Presentation = () => {
  return (
    <div className="Container-Front" id="Container-Front">
      <div className="Container-Name">
        <div className="FaCode">
          <FaCode
            style={{
              color: "#988345",
              width: "40px",
              height: "40px",
              marginTop: "40%",
            }}
          />
        </div>
        <h1>
          Ernesto Becerril <br />
          Web Full-Stack
        </h1>
        <span>ReactJs </span>
        <h4> & </h4>
        <span> NodeJs</span>
      </div>
      <Link
        to="aboutMe-container"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        delay={400}
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaChevronCircleDown />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default Presentation;
