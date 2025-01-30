import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { BlockquoteLeft, Calendar2, Images } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardPost from "./CardPost";
import { useDispatch, useSelector } from "react-redux";

const NewsHome = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showmore, setShowmore] = useState(6);
  const [imgPost, setImgPost] = useState();
  const [profile, setProfile] = useState();
  const [update, setUpdate] = useState(false);
  const update2 = useSelector((state) => state.user.update);
  const dispatch = useDispatch();

  const API_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  const AUTH_TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        dispatch({type: 'SAVE_PROFILE', payload: data})
      } else {
        throw new Error("errore nella fetch dei dati del tuo profilo");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    if (!newPostText.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
        body: JSON.stringify({ text: newPostText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newPost = await response.json();
      setPosts([newPost, ...posts]);
      setNewPostText("");
      addImgPost(newPost._id);
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  const addImgPost = async (id) => {
    try {
      const formData = new FormData();
      if (imgPost) {
        formData.append("post", imgPost);
      }

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + id,
        {
          method: "POST",
          headers: {
            Authorization: AUTH_TOKEN,
          },
          body: formData,
        }
      );
      if (response.ok) {
        console.log("immagine caricata");
        fetchPosts();
      } else {
        throw new Error("Errore");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowMore = () => {
    setShowmore(showmore + 6);
  };

  useEffect(() => {
    fetchPosts();
  }, [update, update2]);

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container className="mt-5">
      <div className="align-items-center justify-content-center bg-white mb-5 p-3 rounded border border-1">
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
              placeholder="Start a post..."
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              className="me-3 rounded-5 mb-3"
            />
          </Col>
          <Col xs={2}>
            <Button onClick={() => {createPost(); setUpdate(!update)}} disabled={!newPostText.trim()}>
              Post
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <div className="d-flex align-items-center">
              <label
                htmlFor="file-upload"
                className="btn p-0 labelUpload d-flex align-items-center "
              >
                <Images size={20} className="iconLabel " />
                <p className="subtitlesHome fw-medium align-self-center m-0 ps-2">
                  Contenuti Multimediali
                </p>
              </label>
              <input
                type="file"
                id="file-upload"
                name=""
                className="d-none"
                onChange={(e) => {
                  setImgPost(e.target.files[0]);
                }}
              />
            </div>
          </Col>
          <Col xs={3} className="p-0">
            <div className="d-flex align-items-center justify-content-center fw-medium">
              <Calendar2 size={20} className="iconLabel2" />
              <p className="subtitlesHome m-0 ps-2">Evento</p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="d-flex align-items-center justify-content-end fw-medium">
              <BlockquoteLeft size={20} className="iconLabel3" />
              <p className="subtitlesHome m-0 ps-2">Scrivi un articolo</p>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <p className="titleHome mb-2 p-2">Visualizzazione del feed</p>
      </div>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts
          .slice(0, showmore)
          .map((post) => <CardPost key={post._id} post={post} />)
      )}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </Container>
  );
};

export default NewsHome;
