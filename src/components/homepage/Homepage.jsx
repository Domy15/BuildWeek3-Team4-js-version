import { Row, Col } from "react-bootstrap";
import NewsHome from "../homepage/NewsHome";

const Homepage = () => {
  return (
      <Row>
        <Col xs={4}>
          <NewsHome />
        </Col>
      </Row>
  );
};

export default Homepage;
