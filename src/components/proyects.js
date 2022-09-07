import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  /*{FaNode,}*/ FaReact,
} from "react-icons/fa";
import { TbBrandJavascript, TbWorld } from "react-icons/tb";
// import { GrNode } from "react-icons/gi";
import RikandMorty from "../images/RickAndMorty.PNG";
import FrasesAleatorias from "../images/FasesAleatorias.PNG";
import MedicionDeTiempo from "../images/MedicionDeTiempo.PNG";
import { IconContext } from "react-icons/lib";

function Proyects() {
  const proyects = [
    {
      id: 1,
      name: "Rick And Morty",
      image: RikandMorty,
      tecnologies: [
        { id: 1, tec: <FaHtml5 /> },
        { id: 2, tec: <FaReact /> },
        { id: 3, tec: <TbBrandJavascript /> },
        { id: 4, tec: <FaCss3Alt /> },
      ],
      urlWeb: "https://rickymorty-app.netlify.app/",
      urlGitHub: "https://github.com/ErnestBec/RickandMorty",
    },
    {
      id: 2,
      name: "Frases Aleatorias",
      image: FrasesAleatorias,
      tecnologies: [
        { id: 1, tec: <FaHtml5 /> },
        { id: 2, tec: <FaReact /> },
        { id: 3, tec: <TbBrandJavascript /> },
        { id: 4, tec: <FaCss3Alt /> },
      ],
      urlWeb: "https://quotesbox-random.netlify.app/",
      urlGitHub: "https://github.com/ErnestBec/RickandMorty",
    },
    {
      id: 3,
      name: "Medicion de Tiempo",
      image: MedicionDeTiempo,
      tecnologies: [
        { id: 1, tec: <FaHtml5 /> },
        { id: 2, tec: <FaReact /> },
        { id: 3, tec: <TbBrandJavascript /> },
        { id: 4, tec: <FaCss3Alt /> },
      ],
      urlWeb: "https://weather-entregable2.netlify.app/",
      urlGitHub: "https://github.com/ErnestBec/RickandMorty",
    },
  ];

  return (
    <IconContext.Provider value={{ size: "  30px" }}>
      <div className="container-fluid  d-grid gap-3  " bg="dark">
        <div className="row" bg="dark">
          {proyects.map((proyect) => {
            return (
              <div
                key={proyect.id}
                className="col-12 col-md-6 col-xl-4 p-3 bg-light d-flex align-items-center justify-content-center "
                bg="dark"
              >
                <div className="card  " style={{ width: "18rem" }}>
                  <img src={proyect.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{proyect.name}</h5>
                    <div className="card-text">
                      <div className="row ">
                        {proyect.tecnologies.map((tecnology) => {
                          return (
                            <div
                              className="col-3 p-3 bg-light"
                              key={tecnology.id}
                            >
                              {tecnology.tec}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 d-flex align-items-center justify-content-center">
                        <a href={proyect.urlGitHub} className="btn btn-dark">
                          <FaGithub />
                        </a>
                      </div>
                      <div className="col-6 d-flex align-items-center justify-content-center">
                        <a href={proyect.urlWeb} className="btn btn-dark">
                          <TbWorld />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Proyects;
