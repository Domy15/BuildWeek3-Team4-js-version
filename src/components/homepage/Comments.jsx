/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";

const Comments = ({ id }) => {
  const [comments, setComments] = useState();
  const [singleComment, setSingleComment] = useState("");
  const [profile, setProfile] = useState();
  const [update, setUpdate] = useState(false);
  const URL = "https://striveschool-api.herokuapp.com/api/comments/";
  const updateComments = useSelector((state) => state.user.update2);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        throw new Error("errore nella fetch dei dati del tuo profilo");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getComments = async () => {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhNDQ5ZmU4NWJhZDAwMTUyOWIzYmYiLCJpYXQiOjE3MzgxNjMzNTksImV4cCI6MTczOTM3Mjk1OX0.S9qk4G5SYOLIs4g-EIbipTCE-zz2V6sAdpIYzaJ6tEY",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(
          data.filter((comment) => {
            return comment.elementId === id;
          })
        );
      } else {
        throw new Error("errore nell'acquisizione dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async () => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhNDQ5ZmU4NWJhZDAwMTUyOWIzYmYiLCJpYXQiOjE3MzgxNjMzNTksImV4cCI6MTczOTM3Mjk1OX0.S9qk4G5SYOLIs4g-EIbipTCE-zz2V6sAdpIYzaJ6tEY",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: singleComment,
          rate: 5,
          elementId: id,
        }),
      });
      if (response.ok) {
        console.log("commento postato");
      } else {
        throw new Error("errore nel post del commento");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, [id, update, updateComments]);

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <div className="px-4">
        <Carousel id={id} />
      </div>
      <Row className="px-3 mb-3">
        <Col xs={2} xl={1}>
          {profile && (
            <Image
              src={profile.image}
              roundedCircle
              className="me-3"
              width={40}
              height={40}
            />
          )}
        </Col>
        <Col xs={8} xl={9}>
          <Form.Control
            type="text"
            placeholder="Aggiungi un commento..."
            value={singleComment}
            onChange={(e) => setSingleComment(e.target.value)}
            className="me-3 rounded-5 mb-3"
          />
        </Col>
        <Col xs={2}>
          <Button
            onClick={() => {
              postComment(), setUpdate(!update);
            }}
          >
            Post
          </Button>
        </Col>
      </Row>
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => {
          return <SingleComment key={comment._id} comment={comment} />;
        })}
    </>
  );
};

export default Comments;
