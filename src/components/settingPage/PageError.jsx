
import { Container, Row, Col, Button } from "react-bootstrap";

const PageError = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('https://placehold.co/600x400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row className="text-center bg-white p-5 rounded shadow">
        <Col>
          <div className="mb-4">
            <img
              src="../../../public/logo.png"
              alt="LinkedIn Logo"
              style={{ width: "150px" }}
            />
          </div>
          <h1 className="display-4">Page not found</h1>
          <p className="lead mb-4">
            Uh oh, we can&apos;t seem to find the page you&apos;re looking for. Try going
            back to the previous page or check out our Help Center for more
            information.
          </p>
          <Button href="/profile"variant="outline-info">Go to your feed</Button>

            
          
        </Col>
      </Row>
    </Container>
  );
};

export default PageError;