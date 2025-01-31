import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MidFavouriteSection from "./MidFavouriteSection";

const Favourites = () => {
  const [selected, setSelected] = useState(0);
  const lenght = useSelector((state) => state.interaction);

  return (
    <Container className=" mb-3 ms-4 ">
      <Row className="">
        <Col className="d-flex flex-column bg-white p-0">
          <div
            className={`border-bottom m-0 d-flex align-items-center py-2 ${
              selected === 1 ? "selected-border" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(1)}
          >
            <p className="m-0">Post e articoli salvati</p>
            <p className="p-0 m-0 ms-auto">{lenght.favouritesPosts.length}</p>
          </div>
          <div
            className={`border-bottom m-0 d-flex align-items-center py-2 ${
              selected === 2 ? "selected-border" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(2)}
          >
            <p className="m-0">Profili salvati</p>
            <p className="p-0 m-0 ms-auto">{lenght.favourites.length}</p>
          </div>
          <div
            className={`m-0 d-flex align-items-center py-2 ${
              selected === 3 ? "selected-border" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(3)}
          >
            <p className="m-0">Aziende</p>
            <p className="p-0 m-0 ms-auto">{lenght.favouritesJobs.length}</p>
          </div>
        </Col>
        <Col xs={12} className="">
          {selected === 1 && (
            <MidFavouriteSection
              title="Post salvati"
              post={lenght.favouritesPosts}
            />
          )}
          {selected === 2 && (
            <MidFavouriteSection
              title="Profili salvati"
              person={lenght.favourites}
            />
          )}
          {selected === 3 && (
            <MidFavouriteSection
              title="Aziende salvate"
              company={lenght.favouritesJobs}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
