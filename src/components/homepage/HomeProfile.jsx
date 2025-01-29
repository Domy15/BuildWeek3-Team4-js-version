import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

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

  
  
  {/*funzione per numeri random*/}

  const randomNumber = () => {
    return Math.floor(Math.random() * (100 + 1)) + 10;
  };

  return (
    <div className="mt-5">
        <div className="bg-light position-relative pb-2">
          {/* Profile Image */}

          <img
            src="https://800anniunipd.it/wp-content/uploads/2022/05/n_boscopini.jpg"
            alt="background"
            className="imageHome img-fluid w-100"
          />

          <img
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profileHome rounded-circle  position-absolute"
          />

          <div className="d-flex mt-5">
            <h2 className="fw-bold ms-2 mt-3">
              {profile.name} {profile.surname}
            </h2>
          </div>
          <div className="p-3">
            <p className="h5 fw-light mb-1 text-black">{profile.title}</p>
            <p className="mb-2 text-muted">{profile.area}</p>
          </div>
      
      <hr />

      {/*numeri random*/}

      <Container>
        <Row>
          <div className="d-flex justify-content-between">
            <span className="text-secondary "> Visitatori del profilo </span>
            <span className="text-primary"> {randomNumber()}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-secondary">Impressioni del post </span>
            <span className="text-primary">{randomNumber()}</span>
          </div>
        </Row>
      </Container>
    </div>


    </div>
  );
};

export default HomeProfile;
