import { Col, Container, Row } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";

const Favourites = () => {
  return (
    <Container className=" p-0 pt-3 mb-3 ">
      <Row className="">
        <Col
          className="d-flex flex-column border rounded-3 bg-white p-0"
          xs={12}
          md={3}
        >
          <div className="border-bottom rounded-top-3 d-flex gap-3 p-3">
            <BookmarkFill size={25} className="custom-grey" />
            <h4 className="m-0 custom-grey"> I miei elementi</h4>
          </div>
          <h5 className=" border-bottom p-3 m-0">Post e articoli salvati</h5>
          <h5 className=" border-bottom p-3 m-0">Profili salvati</h5>
          <h5 className="p-3 m-0 rounded-bottom-3">Aziende salvate</h5>
        </Col>
        <Col xs={12} md={6}>
          <p>ciao</p>
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
};

export default Favourites;
