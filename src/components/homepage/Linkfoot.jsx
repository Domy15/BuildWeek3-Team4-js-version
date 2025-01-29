import { Col, Dropdown, Row } from "react-bootstrap";

const Linkfoot = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={11}>
        <div className="d-flex flex-wrap justify-content-center mb-3 gap-1 text-center">
          <a href="#" className="nav-link opacity-75 me-3">
            <small>Informazioni</small>
          </a>
          <a href="#" className="nav-link opacity-75 me-3">
            <small> Accessibilità </small>
          </a>
          <a href="#" className="nav-link opacity-75 me-3">
            <small> Centro assistenza</small>
          </a>
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
                <Dropdown.Item href="#">Condizioni d&apos;uso</Dropdown.Item>
              </small>
            </Dropdown.Menu>
          </Dropdown>
          <a href="#" className="nav-link opacity-75 me-3">
            <small>Opzioni per gli annunci pubblicitari</small>
          </a>
          <a href="#" className="nav-link opacity-75 me-3">
            <small>Pubblicità</small>
          </a>
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              className="nav-link opacity-75 me-3"
            >
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
          <a href="#" className="nav-link opacity-75 me-3">
            <small>Scarica l&apos;app LinkedIn</small>
          </a>{" "}
          <a href="#" className="nav-link opacity-75 me-3">
            <small>Altro</small>
          </a>
        </div>
        <div className="text-center">
          <small >
          <span className="me-1">
            <strong>Linked</strong>
            <strong style={{ color: "#0A66C2" }}>in</strong>
          </span>
          Corporation © 2025
        </small>
        </div>
        
      </Col>
    </Row>
  );
};

export default Linkfoot;
