import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const FooterSection = () => {
  const location = useLocation();
  

  return (
    <>
      {!(location.pathname === '/') && (
        <Container className="container-fluid d-flex mt-5">
          <Row>
            <Col className="col-12 col-lg-2 justify-content-between ps-0 ">
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Informazioni
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Informativa sulla community professionale
                </a>
              </p>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="p-0 mb-3 text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Privacy e condizioni
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    Informativa sui cookie
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Informativa sul copyright
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Opzioni relative all&apos;Informativa <br /> sulla Privacy
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Sales Solutions
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Centro sicurezza
                </a>
              </p>
            </Col>

            <Col className="col-12 col-lg-2 justify-content-between ">
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Accesibilità
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Carriera
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Opzioni per gli annunci pubblicitari
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Mobile
                </a>
              </p>
            </Col>

            <Col className=" col-12 col-lg-2 justify-content-between ">
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Talent Solution
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Soluzioni di marketing
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Pubblicità
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Piccole imprese
                </a>
              </p>
            </Col>

            <Col className=" col-12 col-lg-3 justify-content-between ">
              <div className="d-flex mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-question-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0 ms-2">
                    <a
                      href="#"
                      className="text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Domande?
                    </a>
                  </p>
                  <p className="mb-0 ms-2">
                    <a
                      href="#"
                      className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Visita il nostro Centro assistenza
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-gear-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0 ms-2">
                    <a
                      href="#"
                      className="text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Gestisci il tuo account e la tua Privacy
                    </a>
                  </p>
                  <p className="mb-0 ms-2">
                    <a
                      href="#"
                      className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Vai alle impostazioni
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-shield-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0 ms-2">
                    <a
                      href="#"
                      className="text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Trasparenza sui contenuti consigliati
                    </a>
                  </p>
                  <p className="mb-0 ms-2">
                    <a
                      href="#"
                      className="text-body-tertiary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Scopri di più sui contenuti consigliati.
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col col-lg-3 justify-content-between ">
              <p>Seleziona lingua</p>
              <Form.Select aria-label="Default select example">
                <option>Italiano</option>
                <option value="1">Français</option>
                <option value="2">English</option>
                <option value="3">Spagnolo</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default FooterSection;
