import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";
import Competency from "./Competency";
import AsideSection from "./AsideSection";
import HeroSection from "./HeroSection";
import Languages from "./Languages";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const param = useParams()
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <HeroSection param={param.id}/>
          <Experience param={param.id}/>
          <Competency />
          <Languages/>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <AsideSection />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
