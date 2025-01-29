import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { BookmarkFill, CalendarEvent, Newspaper, PeopleFill } from "react-bootstrap-icons";

const HomeProfile = () => {
  const [profile, setprofile] = useState();
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    const id = "me";
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setprofile(data);
        setError(null);
      } else {
        setError(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (error) {
    return <div className="text-danger text-center mt-4">{error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  {
    /*funzione per numeri random*/
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * (100 + 1)) + 10;
  };

  return (
    <>
      <Card className="mt-5 sticky-top">
        <div className="bg-light position-relative pb-2">
          {/* Profile Image */}

          <img
            src="https://800anniunipd.it/wp-content/uploads/2022/05/n_boscopini.jpg"
            alt="background"
            className="imageHome img-fluid w-100"
          />

          <img
            src={profile.image}
            alt="Profile"
            className="profileHome rounded-circle  position-absolute"
          />

          <div className="d-flex mt-5 ">
            <h4 className=" ms-3">
              {profile.name} {profile.surname}
            </h4>
          </div>
          <div className="ms-3">
            <p className="mb-1 ">{profile.title}</p>
            <p className="mb-2 text-muted">{profile.area}</p>
          </div>

          

          {/*numeri random*/}

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

      {/* Card con icoe */}
      <Card className="mt-1 d-sm-none d-md-block">
        <div className="m-2">
        <BookmarkFill/>
        <span className="ms-2"><a href="#" className="text-dark text-decoration-none">Elementi salvati</a></span>
        </div>

        <div className="m-2">
        <PeopleFill/>
        <span className="ms-2">Gruppi</span>
        </div>

        <div className="m-2">
        <Newspaper/>
        <span className="ms-2">Newsletter</span>
        </div>

        <div className="m-2">
        <CalendarEvent/>
        <span className="ms-2">Eventi</span>
        </div>
      </Card>
    </>
  );
};

export default HomeProfile;
