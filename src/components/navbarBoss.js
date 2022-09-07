import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/ErnestoBecerril.png";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

function NavbarBotstrap() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">AboutMe</Nav.Link>
            <Nav.Link href="#proyects">Proyects</Nav.Link>
            <Nav.Link href="#contactMe">ContactMe</Nav.Link>
          </Nav>
          <Nav>
            <Row>
              <Col className="d-flex justify-content-center">
                <Nav.Link href="#deets">
                  <FaGithub style={{ color: "white", fontSize: "20px" }} />
                </Nav.Link>
              </Col>
              <Col className="d-flex justify-content-center">
                <Nav.Link href="#memes">
                  <FaLinkedin style={{ color: "white", fontSize: "20px" }} />
                </Nav.Link>
              </Col>
              <Col className="d-flex justify-content-center">
                <Nav.Link href="#memes">
                  <FaFileDownload
                    style={{ color: "white", fontSize: "20px" }}
                  />
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBotstrap;
