import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfilePut = () => {
  const navigate = useNavigate();
  const [profileBody, setProfileBody] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  });
  const [imgProfile, setImgProfile] = useState({img: null});

  const fetchProfile = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfileBody(data);
      } else {
        throw new Error("errore nella fetch dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const putData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileBody),
        }
      );
      if (response.ok) {
        console.log('dati aggioranti');
        
      } else {
        throw new Error("Errore nell'invio dei dati");
      }
    } catch (err) {
      console.log("Errore: ", err);
    }
  };

  const postPfp = async () => {
    try {
      const formData = new FormData();
      if (imgProfile) {
        formData.append("profile", imgProfile.img);
      }

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/picture",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData
        }
      );
      if (response.ok) {
        console.log('immagine del profilo aggiornata');
      } else {
        throw new Error("errore nella fetch dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          putData();
          postPfp();
          navigate("/");
        }}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={profileBody.name}
            onChange={(e) => {
              setProfileBody({ ...profileBody, name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            value={profileBody.surname}
            onChange={(e) => {
              setProfileBody({ ...profileBody, surname: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={profileBody.email}
            onChange={(e) => {
              setProfileBody({ ...profileBody, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={profileBody.username}
            onChange={(e) => {
              setProfileBody({ ...profileBody, username: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={profileBody.bio}
            onChange={(e) => {
              setProfileBody({ ...profileBody, bio: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            value={profileBody.title}
            onChange={(e) => {
              setProfileBody({ ...profileBody, title: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="area">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="text"
            value={profileBody.area}
            onChange={(e) => {
              setProfileBody({ ...profileBody, area: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Pick for profile</Form.Label>
          <Form.Control type="file" onChange={(e) => {
            setImgProfile({ img: e.target.files[0] }); 
          }}/>
        </Form.Group>
        <Button type="submit" variant="success">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default ProfilePut;