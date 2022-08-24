import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Contact-container">
        <IconContext.Provider value={{ className: "icons-contact" }}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ernesto-becerril-dominguez-095079229/">
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ernesto-becerril-dominguez-095079229/">
                <FaLinkedin style={{ color: "white", fontSize: "20px" }} />
              </a>
            </li>
            <li>
              <a
                download="ErnestoBecerrilCV.pdf"
                href="https://drive.google.com/file/d/16Yhl9hq7dQflGRhd-tm7Kx2E6nMAD7Ei/view?usp=sharing"
              >
                <FaFileDownload style={{ color: "white", fontSize: "20px" }} />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Footer;
