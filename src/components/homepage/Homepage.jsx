import { Col, Container, Row } from "react-bootstrap";
import NewsHome from "../homepage/NewsHome";
import HomeJobs from "./HomeJobs";
import HomeProfile from "./HomeProfile";

const Homepage = () => {
  return (

    <Container className="containerHome"> 
      <Row> 
        <Col md ={3} sm={12} lg={3}  >
        <HomeProfile/>
        </Col>
        <Col lg ={6} sm={12} md ={9}>
        <NewsHome />
        </Col>
        <Col lg ={3} className=" d-lg-block d-sm-none d-sm-none">
        <HomeJobs/>
        </Col>
         </Row>               
    </Container>

  );

};

export default Homepage;
