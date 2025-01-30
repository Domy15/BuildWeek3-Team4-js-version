/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BookmarkFill,
  PencilFill,
  PersonFillAdd,
  PersonFillDash,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import GetImage from "./GetImage";


const HeroSection = ({ param }) => {
  const follow = useSelector((state) => state.interaction.favourites);
  const profile = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [work, setwork] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    setting:0,
    profile:1,
  });

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
  const getRandom = Math.floor(Math.random() * (3 - 1 + 1) * 1);

  useEffect(() => {
    fetchProfile();
    setwork(getRandom);
  }, [param, profile.update]);

  if (error) {
    return <div className="text-danger text-center mt-4">{error}</div>;
  }

  if (!profile.profile) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="classMargin">
      <div className="bg-light position-relative rounded bg-white border border-1">
        {/* Profile Image */}

        <div className="relative">
          <div className="pluto">
            <GetImage />
          </div>
          <img
            src={profile.profile.image}
            alt="Profile"
            className="rounded-circle profilePicture position-absolute "
          />
          {work === 1 && (
            <img
              src="/public/Open.png"
              className="rounded-circle profilePicture position-absolute"
              style={{ zIndex: "1000" }}
            />
          )}
          {work === 2 && (
            <img
              src="/public/Freelancer.png"
              className="rounded-circle profilePicture position-absolute"
              style={{ zIndex: "1000" }}
            />
          )}
        </div>
        <div className="d-flex align-items-end">
          <h1 className="fw-bold titleProfile mx-3">
            {profile.profile.name} {profile.profile.surname}
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
            {profile.profile.title}
          </p>
          <p className="mb-2 text-muted">{profile.area}</p>
          <div className="d-flex gap-2">
            {param && (
              <>
                {!follow.includes(profile.profile) ? (
                  <Button
                    variant="primary"
                    className="d-flex align-items-center"
                    onClick={() => {
                      dispatch({
                        type: "ADD",
                        payload: profile.profile,
                      });
                    }}
                  >
                    <PersonFillAdd size={20} className="me-1" />
                    Segui
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    className="d-flex align-items-center"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE",
                        payload: profile.profile,
                      });
                    }}
                  >
                    <PersonFillDash size={20} className="me-1" />
                    Smetti di seguire
                  </Button>
                )}

                <Button variant="outline-secondary">Messaggio</Button>
              </>
            )}

            {!param && (
              <>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Disponibile per"
                  className="available-custom"
                >
                  <Dropdown>
                    <Dropdown.Item onClick={() => setwork(1)}>
                      <p className="fw-bold lh-1 p-0 m-0">
                        Aperto a nuove disponibilità
                      </p>
                      <p>
                        Questa opzione mostra ai recruiter e agli altri che sei
                        disponibile a lavorare
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className=" dropdown-item"
                      onClick={() => setwork(2)}
                    >
                      <p className="fw-bold lh-1 p-0 m-0">Freelancer</p>
                      <p>
                        Questa opzione è utile per consulenti, liberi
                        professionisti e lavoratori autonomi
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className=" dropdown-item"
                      onClick={() => setwork(0)}
                    >
                      <p className="fw-bold lh-1 p-0 m-0">
                        Non sto cercando lavoro
                      </p>
                      <p>
                        Questa opzione è utile se attualmente sei occupato e non
                        stai cercando lavoro
                      </p>
                    </Dropdown.Item>
                  </Dropdown>
                </DropdownButton>
                <Link to="/profile/setting"
                  state={state.setting}className="btn btn-outline-secondary">
                  Modifica Profile
                </Link>
                <Link
                  to="/profile/setting"
                  state={state.setting}
                  className="btn btn-outline-secondary"
                >
                  <BookmarkFill /> Elementi salvati
                </Link>
                <Link
                  to="/profile/setting"
                  state={state.profile}
                  className="ms-auto btn bg-transparent"
                >
                  <PencilFill size={25} />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="p-3 border rounded-2 my-3 bg-white">
        <h4 className="">Informazioni</h4>
        <p>{profile.profile.bio}</p>
      </div>
    </div>
  );
};

export default HeroSection;
