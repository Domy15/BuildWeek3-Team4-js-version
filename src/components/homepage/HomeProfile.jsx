
import { Card, Container, Row } from "react-bootstrap";
import {
  BookmarkFill,
  CalendarEvent,
  Newspaper,
  PeopleFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import CardProfile from "./CardProfile";

const HomeProfile = () => {
 
  const randomNumber = () => {
    return Math.floor(Math.random() * (100 + 1)) + 10;
  };


  return (
    <>
      <div className="sticky-top z-custom">
        <Card className="mt-5 bg-white">
          <div className="position-relative pb-2">
           <CardProfile/>
            <Container className="d-sm-none d-md-block">
              <hr />
              <Row>
                <div className="d-flex justify-content-between">
                  <span className="text-secondary ">
                    {" "}
                    Visitatori del profilo{" "}
                  </span>
                  <span className="text-primary"> {randomNumber()}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-secondary">Impressioni del post </span>
                  <span className="text-primary">{randomNumber()}</span>
                </div>
              </Row>
            </Container>
          </div>
        </Card>
        <Card className="mt-1 d-sm-none d-md-block">
          <div className="m-2">
            <BookmarkFill />
            <span className="ms-2">
              <Link to='/profile/setting/preferiti' className="text-dark text-decoration-none">
                Elementi salvati
              </Link>
            </span>
          </div>
          <div className="m-2">
            <PeopleFill />
            <span className="ms-2">Gruppi</span>
          </div>
          <div className="m-2">
            <Newspaper />
            <span className="ms-2">Newsletter</span>
          </div>
          <div className="m-2">
            <CalendarEvent />
            <span className="ms-2">Eventi</span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default HomeProfile;
