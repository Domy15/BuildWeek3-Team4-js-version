import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MidFavouriteSection from "./MidFavouriteSection";
import ProfilePut from "../profile/ProfilePut";
import ExperiencesSetting from "../profile/ExperiencesSetting";

const Setting = () => {
  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(0);
  const lenght = useSelector((state) => state.interaction);

  return (
    <Container className="p-0 py-3 mb-3">
      <div className="classMargin bg-white rounded-3 border py-3 mb-3">
        <Row className="m-2 border-bottom">
          <Col>
            <h2>Impostazioni profilo</h2>
            <p>Gestisci le tue impostazioni di profilo e elementi salvati</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <div
              className={`ps-3 my-3 d-flex align-items-center ${
                selected === 1 ? "fw-bold" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelected(1);
                setShow(false);
                setSaved(0);
              }}
            >
              <p className="m-0">Il mio profilo</p>
              <p className="fs-5 p-0 m-0 ms-auto"></p>
            </div>
            <div
              className={`ps-3 mb-3 d-flex align-items-center ${
                selected === 2 ? "fw-bold" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelected(2);
                setShow(false);
                setSaved(0);
              }}
            >
              <p className="m-0">Le mie Esperienze</p>
              <p className="fs-5 p-0 m-0 ms-auto"></p>
            </div>
            <div
              className={`ps-3 pb-1  d-flex align-items-center ${
                selected === 3 ? "fw-bold" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelected(3);
                setShow(true);
                setSaved(0);
              }}
            >
              <p className="m-0">I miei elementi salvati</p>
              <p className="fs-5 p-0 m-0 ms-auto"></p>
            </div>
            {show && (
              <Row className=" ms-4 ">
                <Col className="d-flex flex-column bg-white p-0">
                  <div
                    className={`border-bottom m-0 d-flex align-items-center p-2 ${
                      saved === 1 ? "selected-border" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSaved(1)}
                  >
                    <p className="m-0">Post e articoli salvati</p>
                    <p className="p-0 m-0 ms-auto">
                      {lenght.favouritesPosts.length}
                    </p>
                  </div>
                  <div
                    className={`border-bottom m-0 d-flex align-items-center p-2 ${
                      saved === 2 ? "selected-border" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSaved(2)}
                  >
                    <p className="m-0">Profili salvati</p>
                    <p className="p-0 m-0 ms-auto">
                      {lenght.favourites.length}
                    </p>
                  </div>
                  <div
                    className={`m-0 d-flex align-items-center p-2 ${
                      saved === 3 ? "selected-border" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSaved(3)}
                  >
                    <p className="m-0">Aziende salvate</p>
                    <p className="p-0 m-0 ms-auto">
                      {lenght.favouritesJobs.length}
                    </p>
                  </div>
                </Col>
              </Row>
            )}
          </Col>
          <Col xs={12} md={9}>
            {selected === 1 && <ProfilePut />}
            {selected === 2 && <ExperiencesSetting />}
            {selected === 3 && ""}
            {saved === 1 && (
              <MidFavouriteSection
                title="Post salvati"
                post={lenght.favouritesPosts}
              />
            )}
            {saved === 2 && (
              <MidFavouriteSection
                title="Profili salvati"
                person={lenght.favourites}
              />
            )}
            {saved === 3 && ""}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Setting;
