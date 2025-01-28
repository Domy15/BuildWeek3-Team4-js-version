import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Col,
    Row,
    Button,
  } from "react-bootstrap";
  import {
    BellFill,
    BriefcaseFill,
    ChatDotsFill,
    Grid3x3GapFill,
    HouseDoorFill,
    PeopleFill,
    Search,
  } from "react-bootstrap-icons";
  
  const LinkedinNavbar = function () {
    return (
      <Navbar bg="light" expand="lg" className="shadow-sm p-1"  >
        <Container fluid className="w-100" style={{width:"100vw"}}>
          <Row className="align-items-center justify-content-between">
            <Col md={1}>
              <Navbar.Brand href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn Logo"
                  width="30"
                  height="30"
                />
              </Navbar.Brand>
            </Col>
  
            <Col md={3} className="d-flex">
              <Search size={25} />
              <input
                type="text"
                placeholder="cerca"
                className="d-none d-md-block w-25"
              ></input>
            </Col>
  
            <Col md={8} className="d-flex ms-auto">
              <Nav>
                <Nav.Link
                  href="#"
                  className="text-center mx-2 d-flex flex-column align-items-center"
                >
                  <HouseDoorFill size={25} />
                  <span className="d-none d-lg-block">Home</span>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-center mx-2 d-flex flex-column align-items-center"
                >
                  <PeopleFill size={25} />
                  <span className="d-none d-lg-block">Rete</span>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-center mx-2 d-flex flex-column align-items-center"
                >
                  <BriefcaseFill size={25} />
                  <span className="d-none d-lg-block">Lavoro</span>
                </Nav.Link>
                <Nav.Link
                  href="#messages"
                  className="text-center mx-2 d-flex flex-column align-items-center"
                >
                  <ChatDotsFill size={25} />
                  <span className="d-none d-lg-block">Messaggistica</span>
                </Nav.Link>
                <Nav.Link
                  href="#notifications"
                  className="text-center mx-2 d-flex flex-column align-items-center"
                >
                  <BellFill size={25} />
                  <span className="d-none d-lg-block">Notifiche</span>
                </Nav.Link>
  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  {/* Profilo Dropdown */}
                  <div className="text-center ms-auto ">
                    <img
                      src="https://placecats.com/30/30"
                      alt="Profilo"
                      className="rounded-circle"
                      width="25"
                      height="25"
                    />
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end" className="ms-2">
                      <NavDropdown.Item href="#">
                        <Row>
                          <Col md={4}>
                            <img
                              src="https://placecats.com/70/70"
                              alt="Profilo"
                              className="rounded-circle"
                              width="70"
                              height="70"
                            />
                          </Col>
                          <Col md={8}>
                            <h5>Name user</h5>
                            <p>description</p>
                          </Col>
                          <Col md={12}>
                            <Button
                              type="button"
                              className="custom-button btn btn-outline-primary rounded-5 mt-3 "
                            >
                              Visualizza Profilo
                            </Button>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <h5 className="ms-2">Account</h5>
                      <NavDropdown.Item href="#">
                        Impostazioni e privacy
                      </NavDropdown.Item>
                      <NavDropdown.Item>Guida</NavDropdown.Item>
                      <NavDropdown.Item>Lingua</NavDropdown.Item>
                      <NavDropdown.Divider />
  
                      <h5 className="ms-2">Gestisci</h5>
                      <NavDropdown.Item>Post e attività</NavDropdown.Item>
                      <NavDropdown.Item>
                        Account per la pubblicazione di off..
                      </NavDropdown.Item>
  
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#">Esci</NavDropdown.Item>
                    </NavDropdown>
                  </div>
  
                  {/* Per le aziende Dropdown */}
                  <div className="text-center mx-2">
                    <Grid3x3GapFill size={25}/>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown"
                      
                      align="end"
                      className="dropdown-menu-end"
                    >
                      <NavDropdown.Item href="#">
                        <Row className="scrollable-dropdown">
                          <Col md={6} className="d-flex flex-column">
                            <h4 className="mt-4">Le mie app</h4>
                            <div className="d-flex">
                              <i className="bi bi-browser-safari  text-primary fs-2"></i>
                              <span className="m-3 mt-2">Trova lead</span>
                            </div>
                            <div className="d-flex">
                              <i className="bi bi-people-fill text-primary fs-2"></i>
                              <span className="m-3 mt-2"> Gruppi</span>
                            </div>
                            <h4 className="mt-4">Talent</h4>
                            <div className="d-flex">
                              <i className="bi bi-trophy-fill text-primary fs-2"></i>
                              <span className="m-3 mt-2">Talent Insights</span>
                            </div>
                            <div className="d-flex">
                              <i className="bi bi-table text-primary fs-2"></i>
                              <span className="m-3 mt-2">
                                Pubblica un&apos;offerta di lavoro
                              </span>
                            </div>
                            <h4 className="mt-4">Vendite</h4>
                            <div className="d-flex">
                              <i className="bi bi-info-square text-primary fs-2"></i>
                              <span className="m-3 mt-2">
                                Marhetplace dei servizi
                              </span>
                            </div>
                            <h4 className="mt-4">Marketing</h4>
                            <div className="d-flex">
                              <i className="bi bi-pin-map-fill text-primary fs-2"></i>
                              <span className="m-3 mt-2">Pubblicizza</span>
                            </div>
                            <h4 className="mt-4">Learning</h4>
                            <div className="d-flex">
                              <i className="bi bi-play-btn-fill text-primary fs-2"></i>
                              <span className="m-3 align-items-center">
                                Learning
                              </span>
                            </div>
                          </Col>
  
                          <Col
                            md={6}
                            className="d-flex flex-column vertical-line"
                          >
                            <h4 className="mt-4">Scopri altro per il business</h4>
                            <div>
                              <h6 className="mt-4">Assumi su Linkedin</h6>
                              <p>Trova, attrai e assumi</p>
                            </div>
                            <div>
                              <h6 className="mt-4">Vendi con Linkedin</h6>
                              <p>Sblocca nuove opportunità di vendita</p>
                            </div>
                            <div>
                              <h6 className="mt-4">Offerta di lavoro gratuita</h6>
                              <p>Ottieni rapidamente candidati qualificati</p>
                            </div>
                            <div>
                              <h6 className="mt-4">Fai pubblicità su Linkedin</h6>
                              <p>
                                Acquisisci clienti e fai crescere la tua azienda
                              </p>
                            </div>
                            <div>
                              <h6 className="mt-4">Impara con Linkedin</h6>
                              <p>Corsi per formare i tuoi dipendenti</p>
                            </div>
                            <div>
                              <h6 className="mt-4">Admin Center</h6>
                              <p>Gestisci i dettagli di fatturazione e account</p>
                            </div>
                            <div>
                              <h6 className="mt-5">
                                Crea una pagina aziendale
                                <i className="bi bi-plus-lg fs-2"></i>
                              </h6>
                            </div>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="app" href="#action2">
                        Strumenti
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Navbar.Collapse>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  };
  
  export default LinkedinNavbar;
  