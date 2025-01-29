import { Col, Container, Row } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";

const Favourites = () => {
  return (
    <Container className="border rounded-2 p-0 pt-3 mb-3 bg-white">
      <Row className="">
        <Col className="d-flex gap-3 align-items-center custom-border-bottom p-3" xs={12} md={3} >
          <BookmarkFill size={25} className="custom-grey"/>
          <h4 className="m-0 custom-grey"> I miei elementi</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
