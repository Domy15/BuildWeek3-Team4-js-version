import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CardProfile=()=>{
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

    return(
        <>
         <img
              src="https://800anniunipd.it/wp-content/uploads/2022/05/n_boscopini.jpg"
              alt="background"
              className="imageHome img-fluid w-100 rounded-top mb-3"
            />
            <img
              src={profile.image}
              alt="Profile"
              className="profileHome rounded-circle  position-absolute "
            />
            <div className="d-flex mt-5">
              <Link to='/profile' className="ms-3 h4 text-decoration-none">
                {profile.name} {profile.surname}
              </Link>
            </div>
            <div className="ms-3">
              <p className="mb-1 ">{profile.title}</p>
              <p className="mb-2 text-muted">{profile.area}</p>
            </div>
        </>
    )
}

export default CardProfile