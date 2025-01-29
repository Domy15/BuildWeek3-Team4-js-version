import { Container, Row, Col, Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-muted py-2 sticky-footer position-sticky end-0 lh-lg "style={{ height: "50vh" }}>
      <Container >
        <Row className="justify-content-end">
          <Col xs={12} md={3} className="d-flex flex-column align-items-center">
            <div className="text-center  ">
              <div className="d-flex justify-content-center gap-2 lh-lg">
                <a href="#" className="text-muted text-decoration-none ">
                  <small>Informazioni</small>
                </a>
                <a href="#" className="text-muted text-decoration-none">
                  <small> Accessibilità </small>
                </a>
              </div>
              <a href="#" className="text-muted text-decoration-none d-block">
                <small> Centro assistenza</small>
              </a>
            </div>
            <div className="text-center ">
              <div className="d-flex justify-content-center gap-2 lh-lg">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-muted text-decoration-none p-0 "
                  >
                    <small>Privacy e condizioni</small>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <small>
                      {" "}
                      <Dropdown.Item href="#">Privacy Policy</Dropdown.Item>
                    </small>
                    <small>
                      {" "}
                      <Dropdown.Item href="#">
                        Condizioni d&apos;uso
                      </Dropdown.Item>
                    </small>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="justify-content-end ">
                <small>
                  
                  <a href="#" className="text-muted text-decoration-none lh-lg">
                    Opzioni per gli annunci pubblicitari
                  </a>
                </small>
              </div>
              <small>
               
                <a
                  href="#"
                  className="text-muted text-decoration-none  d-block lh-lg">
                  Pubblicità
                </a>
              </small>
            </div>
            <div className="text-center ">
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="text-muted text-decoration-none p-0 lh-lg">
                  <small>Servizi alle aziende</small>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <small>Soluzioni aziendali</small>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <small>Marketing </small>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <small>
                <a href="#" className="text-muted text-decoration-none d-block lh-lg">
                  Scarica l&apos;app LinkedIn
                </a>
              </small>
              <small>
                {" "}
                <a href="#" className="text-muted text-decoration-none d-block lh-lg">
                  Altro
                </a>
              </small>
            </div>
            <div className=" text-center lh-lg mt-2">
              <small>
                <span className="me-1">
                  <strong>Linked</strong>
                  <strong style={{ color: "#0A66C2" }}>in</strong>
                </span>
                Corporation © 2025
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
