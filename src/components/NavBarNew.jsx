import { Badge } from "react-bootstrap";
import {
  Search,
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatRightDotsFill,
  BellFill,
  Grid3x3GapFill,
  BrowserSafari,
  TrophyFill,
  Table,
  InfoSquare,
  PinMapFill,
  PlayBtnFill,
  PlusLg,
} from "react-bootstrap-icons";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBarNew() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="m-0">
        <div className="d-flex align-items-center">
          <Link to="/" className=" navbar-brand">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn Logo"
              height="30"
            />
          </Link>
          <Form className="d-flex align-items-center ">
            <Search size={25} className="mx-3" />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 d-none d-lg-flex"
              aria-label="Search"
            />
          </Form>
        </div>
        <Nav className=" d-flex align-items-center flex-row">
          <Link to="/" className="position-relative mx-1 nav-link">
            <div className="text-center">
              <HouseDoorFill size={25} className="position-relative" />
              <Badge
                pill
                bg="danger"
                className="position-absolute translate-middle"
              >
                1
              </Badge>
              <p className="m-0">Home</p>
            </div>
          </Link>
          <Nav.Link className="text-center mx-1">
            <div className="d-flex flex-column align-items-center">
              <PeopleFill size={25} />
              <p className="m-0">Rete</p>
            </div>
          </Nav.Link>
          <Nav.Link className="text-center mx-1">
            <div className="d-flex flex-column align-items-center">
              <BriefcaseFill size={25} />
              <p className="m-0">Lavoro</p>
            </div>
          </Nav.Link>
          <Nav.Link className="text-center mx-1">
            <div className="d-flex flex-column align-items-center">
              <ChatRightDotsFill size={25} />
              <p className="m-0">Messaggistica</p>
            </div>
          </Nav.Link>
          <Nav.Link className="position-relative mx-1">
            <div className="text-center">
              <BellFill size={25} />
              <Badge
                pill
                bg="danger"
                className="position-absolute translate-middle"
              >
                3
              </Badge>
              <p className="m-0">Notifiche</p>
            </div>
          </Nav.Link>

          <div className="text-center">
            <img
              src="https://placecats.com/30/30"
              alt="Profilo"
              className="rounded-circle img-fluid"
              width="25"
              height="25"
            />

            <div className="mx-2 ">
              <NavDropdown
                title="Profile"
                id="basic-nav-dropdown"
                align="end"
                className=" dropdown-menu-end"
              >
                <div className="d-flex align-items-center p-3">
                  <img
                    src="https://placecats.com/70/70"
                    alt="Profilo"
                    className="rounded-circle"
                    width="70"
                    height="70"
                  />
                  <div className="ms-4">
                    <h5>Your Profile</h5>
                    <p className="m-0">Your description</p>
                  </div>
                </div>

                <Link
                  to="/profile"
                  className=" btn btnDropdownMenu bg-transparent text-primary w-100 border-1 border-primary rounded-5"
                >
                  Visualizza Profilo
                </Link>

                <NavDropdown.Divider />
                <div>
                  <h4 className="ps-3">Account</h4>
                  <NavDropdown.Item>Impostazioni e privacy</NavDropdown.Item>
                  <NavDropdown.Item>Guida</NavDropdown.Item>
                  <NavDropdown.Item>Lingua</NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <div>
                  <h4 className="ps-3">Gestisci</h4>
                  <NavDropdown.Item>Post e attività</NavDropdown.Item>
                  <NavDropdown.Item>
                    Account per la pubblicazione di offerte lavorative
                  </NavDropdown.Item>
                  <NavDropdown.Item>Lingua</NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <div>
                  <NavDropdown.Item>Esci</NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </div>
          <div className="text-center mx-2">
            <div>
              <Grid3x3GapFill size={25} />
            </div>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
              <div className="d-md-flex containerSecondDropDown p-3">
                <div className="boxesSecondDropDown">
                  <h2>Le mie app</h2>
                  <div className="d-flex align-items-center">
                    <BrowserSafari size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Vendi
                    </NavDropdown.Item>
                  </div>
                  <div className="d-flex align-items-center">
                    <PeopleFill size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Gruppi
                    </NavDropdown.Item>
                  </div>
                  <h4 className="h5">Talent</h4>
                  <div className="d-flex align-items-center">
                    <TrophyFill size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Talent Insight
                    </NavDropdown.Item>
                  </div>
                  <div className="d-flex align-items-center">
                    <Table size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Pubblica un&apos;offerta di lavoro
                    </NavDropdown.Item>
                  </div>
                  <h4 className="h5">Vendite</h4>
                  <div className="d-flex align-items-center">
                    <InfoSquare size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Marketplace dei servizi
                    </NavDropdown.Item>
                  </div>
                  <h4 className="h5">Marketing</h4>
                  <div className="d-flex align-items-center">
                    <PinMapFill size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Pubblicizza
                    </NavDropdown.Item>
                  </div>
                  <h4 className="h5">Learning</h4>
                  <div className="d-flex align-items-center">
                    <PlayBtnFill size={40} color="royalblue" />
                    <NavDropdown.Item className="h4 align-self-end mt-3">
                      Learning
                    </NavDropdown.Item>
                  </div>
                </div>
                <div className="boxesSecondDropDown">
                  <h2>Scopri altro per il business</h2>
                  <NavDropdown.Item className="mt-3">
                    <h4 className="h5">Assumi su Linkedin</h4>
                    <p>Trova, attrai e assumi</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mt-3">
                    <h4 className="h5">Vendi con Linkedin</h4>
                    <p>Sblocca nuove opportunità di vendita</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mt-3">
                    <h4 className="h5">Offerta di lavoro gratuita</h4>
                    <p>Ottieni rapidamente candidati qualificati</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mt-3">
                    <h4 className="h5">Fai pubblicità su Linkedin</h4>
                    <p>Acquisisci clienti e fai crescere la tua azienda</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mt-3">
                    <h4 className="h5">Impara con Linkedin</h4>
                    <p>Corsi per formare i tuoi dipendenti</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mt-3">
                    <h4 className="h5">Admin Center</h4>
                    <p>Gestisci i dettagli di fatturazione e account</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="d-flex align-items-center mt-3">
                    <h4>Crea una pagina aziendale</h4>
                    <PlusLg size={40} className="ms-3" />
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarNew;
