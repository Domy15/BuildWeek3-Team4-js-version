import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilFill } from "react-bootstrap-icons";

const HeroSection = ({param}) => {
  const profile = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    const id = param || "me"; 
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
        dispatch({
          type: "PROFILE",
          payload: data,
        });
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
  }, [param]);

  if (error) {
    return <div className="text-danger text-center mt-4">{error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="mt-5">
      <div>
        <div>
          <div className="bg-light position-relative">
            {/* Profile Image */}

            <img
              src="https://800anniunipd.it/wp-content/uploads/2022/05/n_boscopini.jpg"
              alt="background"
              className="bckImageProfile img-fluid w-100 "
            />

            <img
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="rounded-circle profilePicture position-absolute"
            />

            <div className="d-flex align-items-end">
              <h1 className="fw-bold titleProfile mx-3">
                {profile.name} {profile.surname}
              </h1>
              <Button
                variant="link"
                className="verifyBtn btn-light border-2 rounded-4 m-2 border-primary text-decoration-none"
              >
                Aggiungi badge di verifica
              </Button>
            </div>
            <div className="p-3">
              <p className="h5 fw-light mb-1 text-black fw-bold">
                {profile.title}
              </p>
              <p className="mb-2 text-muted">{profile.area}</p>
              <div className="d-flex gap-2">
                <Button variant="primary">Connect</Button>
                <Button variant="outline-secondary">Message</Button>
                <Button variant="outline-secondary">More</Button>
                <Button variant="transparent" className="ms-auto">
                  <PencilFill size={25} />
                </Button>
              </div>
            </div>
          </div>
          <div className="p-3 border rounded-2 my-3">
            <h4 className="">Informazioni</h4>
            <p>{profile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
