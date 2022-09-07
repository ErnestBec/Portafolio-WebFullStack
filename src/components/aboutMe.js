import React from "react";

// import "../styles/aboutMe.css";
import Presentation from "../images/estudio.jpeg";

const AboutMe = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-dark text-white alto-100">
      <div className="row">
        <div className=" col-sm-6 d-flex align-items-center justify-content-center bg-dark ">
          <div>
            <img
              src={Presentation}
              alt=""
              className="rounded-circle border border-3 border-secondary img-thumbnail"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-dark ">
          <div className="row">
            <div className="col-12 col-md-9">
              <p>
                Hola Mi nombre es Ernesto Becerril Tengo 21 años, soy egresado
                del bootcamp Academlo como desarrollador Web Full-Stack,
                actualmente me encuentro estudiando 7 semestre de la carrera de
                Ingenieria en Tecnologias de la Informacion y Comunicación en el
                Instituto Tecnólogico de Toluca. Soy un apasionado por la
                tecnologia aunque mi gusto es mas por la parte del desarrollo de
                Back-End.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
