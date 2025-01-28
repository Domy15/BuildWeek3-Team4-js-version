import { useEffect } from "react";
import { ProfilesApi } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PersonFillAdd, PersonFillDash } from "react-bootstrap-icons";
import CompanyAside from "./CompanyAside";

const AsideSection = () => {
  const users = useSelector((state) => state.friends);
  const follow = useSelector((state) => state.interaction.favourites);
  const dispatch = useDispatch();
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

  const randomProfiles = (pippo) => {
    const randomIndex = [...pippo].sort(() => Math.random() - 0.5).slice(0, 4);
    return randomIndex;
  };

  useEffect(() => {
    dispatch(ProfilesApi(url, token, randomProfiles));
  }, []);

  return (
    <div>
      <section>
        <div className="asideSection p-2">
          <div className="bg-light p-2">
            <div>
              <img
                src="https://lentepubblica.it/wp-content/uploads/2016/10/Linkedin.jpg"
                alt="pubblicity"
                className="pubblicityAside img-fluid my-5"
              />
            </div>
            <div className="mt-3">
              <h4>Altri profili per te</h4>
              <hr />
            </div>

            {users &&
              users.map((u) => {
                return (
                  <div
                    key={u._id}
                    className="d-flex p-3 mt-3 shadow rounded bg-trasparent"
                  >
                    <div>
                      <img
                        src={u.image}
                        alt="imageProfile"
                        className="profileImageAside rounded-circle mx-3 align-self-start"
                      />
                    </div>
                    <div className="infoAside overflow-hidden">
                      <p className="h5 mb-1">
                        {" "}
                        <Link
                          to={`/profile/${u._id}`}
                          className="text-decoration-none text-black"
                        >
                          {`${u.name} ${u.surname}`}
                        </Link>
                      </p>
                      <p className="descriptionAside text-muted mb-2">
                        {u.title}
                      </p>
                      {!follow.includes(u._id) ? (
                        <button
                          className="followBtn btn border-1 border-black btn-sm d-flex align-items-center"
                          onClick={() => {
                            dispatch({
                              type: "ADD",
                              payload: u._id,
                            });
                          }}
                        >
                          <PersonFillAdd size={20} className="me-1" />
                          Segui
                        </button>
                      ) : (
                        <button
                          className="followBtn btn border-1 border-black btn-sm d-flex align-items-center"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE",
                              payload: u._id,
                            });
                          }}
                        >
                          <PersonFillDash size={20} className="me-1" />
                          Smetti di seguire
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

            <div className="mt-3">
              <h4>Aziende che potresti conoscere</h4>
              <hr />
            </div>
            <CompanyAside
              src="https://cdn.prod.website-files.com/65f9d6e83f4e9e35d6d95289/65f9ff6cd0f1a0da5d2554d1_LogoSquare256.png"
              name="Retex"
              text="Retex è un'azienda innovativa che offre soluzioni di
                  sviluppo Full Stack per il settore retail e l'e-commerce,
                  integrando tecnologie avanzate per ottimizzare le esperienze
                  digitali dei clienti."
            />
            <CompanyAside
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSankbY8qLCS7UUFOFKSnJ2bv5k2qxveg_YXQ&s"
              name="ZUCCHETTI"
              text="Zucchetti è una delle principali aziende italiane di software,
                  specializzata in soluzioni ERP, gestione delle risorse umane e
                  software per la digitalizzazione aziendale. Offrono strumenti
                  innovativi per le piccole e grandi imprese."
            />
            <CompanyAside
              src="https://mms.businesswire.com/media/20241121122895/it/2311940/22/pwc_logo.jpg"
              name="PwC (PricewaterhouseCoopers)"
              text="PwC è una delle più grandi società di consulenza al mondo,
                  specializzata in audit, advisory e tecnologia. Con competenze
                  Full Stack, PwC integra soluzioni IT nei processi aziendali
                  per trasformare la gestione dei dati e dei servizi."
            />
            <div>
              <img
                src="https://lentepubblica.it/wp-content/uploads/2016/10/Linkedin.jpg"
                alt="pubblicity"
                className="pubblicityAside img-fluid my-5"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsideSection;
