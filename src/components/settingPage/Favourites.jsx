import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import MidFavouriteSection from "./MidFavouriteSection";

const Favourites = () => {
  const [selected, setSelected] = useState(0);
  const lenght = useSelector((state) => state.interaction);

  return (
    <Container className=" p-0 pt-3 mb-3 ">
      <Row className="gap-3">
        <Col
          className="d-flex flex-column border rounded-3 bg-white p-0 h-25"
          xs={12}
          md={3}
        >
          <div className="border-bottom d-flex gap-2 p-3 align-items-center">
            <BookmarkFill size={20} className="custom-grey" />
            <h4 className="m-0 custom-grey p-0">
              {" "}
              <small>I miei elementi</small>
            </h4>
          </div>
          <div
            className={`border-bottom p-3 m-0 d-flex align-items-center ${
              selected === 1 ? "selected-border" : ""
            }`}
            style={{cursor: 'pointer'}}
            onClick={() => setSelected(1)}
          >
            <h5 className="m-0">
              <small> Post e articoli salvati</small>{" "}
            </h5>
            <p className="fs-5 p-0 m-0 ms-auto">
              {lenght.favouritesPosts.length}
            </p>
          </div>
          <div
            className={`border-bottom p-3 m-0 d-flex align-items-center ${
              selected === 2 ? "selected-border" : ""
            }`}
            style={{cursor: 'pointer'}}
            onClick={() => setSelected(2)}
          >
            <h5 className="m-0">
              <small>Profili salvati </small>{" "}
            </h5>
            <p className="fs-5 p-0 m-0 ms-auto">{lenght.favourites.length}</p>
          </div>
          <div
            className={`border-bottom p-3 m-0 d-flex align-items-center ${
              selected === 3 ? "selected-border" : ""
            }`}
            style={{cursor: 'pointer'}}
            onClick={() => setSelected(3)}
          >
            <h5 className="m-0">
              {" "}
              <small>Aziende salvate </small>
            </h5>
            <p className="fs-5 p-0 m-0 ms-auto">
              {lenght.favouritesJobs.length}
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className=""
        >
          {selected===1 && (<MidFavouriteSection title='Post salvati' post={lenght.favouritesPosts}/>)}
          {selected===2 && (<MidFavouriteSection title='Profili salvati' person={lenght.favourites}/>)}
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
};

export default Favourites;
