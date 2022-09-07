import React from "react";
import { Link } from "react-scroll";
// import "../styles/presentation.css";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Presentation = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-dark text-white alto-100">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <IconContext.Provider value={{ className: "icon-Name" }}>
            <FaCode />
          </IconContext.Provider>
        </div>
        <div className="col-12  d-flex justify-content-center">
          <h1>
            Ernesto Becerril <br />
            Web Full-Stack
          </h1>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <span>ReactJs </span>
          <h4> & </h4>
          <span> NodeJs</span>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center">
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
      </div>
    </div>
  );
};

export default Presentation;
