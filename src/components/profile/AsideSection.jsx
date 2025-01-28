import { useEffect } from "react";
import { ProfilesApi } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const AsideSection = () => {
    const users = useSelector((state) => state.friends)
    const dispatch= useDispatch()
    const url = "https://striveschool-api.herokuapp.com/api/profile/";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";
  
    const randomProfiles = (pippo) => {
      const randomIndex = [...pippo]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
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
                        <p className="h5 mb-1">{`${u.name} ${u.surname}`}</p>
                        <p className="descriptionAside text-muted mb-2">
                          {u.title}
                        </p>
                        <button className="followBtn btn border-1 border-black btn-sm d-flex align-items-center">
                          <i className="bi bi-person-fill-add followIcon me-1"></i>
                          Segui
                        </button>
                      </div>
                    </div>
                  );
                })}
  
              <div className="mt-3">
                <h4>Aziende che potresti conoscere</h4>
                <hr />
              </div>
              <div className="d-flex p-3 mt-3 shadow rounded bg-trasparent">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/65f9d6e83f4e9e35d6d95289/65f9ff6cd0f1a0da5d2554d1_LogoSquare256.png"
                    alt="imageProfile"
                    className="profileImageAside rounded-circle mx-3 align-self-start"
                  />
                </div>
                <div className="infoAside overflow-hidden">
                  <p className="h5 mb-1">Retex</p>
                  <p className="descriptionAside text-muted mb-2">
                    Retex è un&apos;azienda innovativa che offre soluzioni di sviluppo
                    Full Stack per il settore retail e l&apos;e-commerce, integrando
                    tecnologie avanzate per ottimizzare le esperienze digitali dei
                    clienti.
                  </p>
                  <button className="followBtn btn btn-primary btn-sm d-flex align-items-center">
                    <i className="bi bi-person-fill-add followIcon me-1"></i>
                    Segui
                  </button>
                </div>
              </div>
              <div className="d-flex p-3 mt-3 shadow rounded bg-trasparent">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSankbY8qLCS7UUFOFKSnJ2bv5k2qxveg_YXQ&s"
                    alt="imageProfile"
                    className="profileImageAside rounded-circle mx-3 align-self-start"
                  />
                </div>
                <div className="infoAside overflow-hidden">
                  <p className="h5 mb-1">ZUCCHETTI</p>
                  <p className="descriptionAside text-muted mb-2">
                    Zucchetti è una delle principali aziende italiane di software,
                    specializzata in soluzioni ERP, gestione delle risorse umane e
                    software per la digitalizzazione aziendale. Offrono strumenti
                    innovativi per le piccole e grandi imprese.
                  </p>
                  <button className="followBtn btn btn-primary btn-sm d-flex align-items-center">
                    <i className="bi bi-person-fill-add followIcon me-1"></i>
                    Segui
                  </button>
                </div>
              </div>
              <div className="d-flex p-3 mt-3 shadow rounded bg-trasparent">
                <div>
                  <img
                    src="https://mms.businesswire.com/media/20241121122895/it/2311940/22/pwc_logo.jpg"
                    alt="imageProfile"
                    className="profileImageAside rounded-circle mx-3 align-self-start"
                  />
                </div>
                <div className="infoAside overflow-hidden">
                  <p className="h5 mb-1">PwC (PricewaterhouseCoopers)</p>
                  <p className="descriptionAside text-muted mb-2">
                    PwC è una delle più grandi società di consulenza al mondo,
                    specializzata in audit, advisory e tecnologia. Con competenze
                    Full Stack, PwC integra soluzioni IT nei processi aziendali
                    per trasformare la gestione dei dati e dei servizi.
                  </p>
                  <button className="followBtn btn btn-primary btn-sm d-flex align-items-center">
                    <i className="bi bi-person-fill-add followIcon me-1"></i>
                    Segui
                  </button>
                </div>
              </div>
  
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