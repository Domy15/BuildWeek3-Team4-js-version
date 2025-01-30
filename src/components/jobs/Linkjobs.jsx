/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";


const Linkjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("recenti");

 const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString({
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour24: true,
    });
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?limit=10&offset=${
          page * 10
        }`
      );
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
      }
      const data = await response.json();

      let sortedJobs = data.data;
      if (sortOrder === "recenti") {
        sortedJobs = sortedJobs.sort(
          (a, b) => new Date(b.publication_date) - new Date(a.publication_date)
        );
      } else {
        sortedJobs = sortedJobs.sort(
          (a, b) => new Date(a.publication_date) - new Date(b.publication_date)
        );
      }

      setJobs((prevJobs) =>
        page === 0 ? sortedJobs : [...prevJobs, ...sortedJobs]
      );
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    setJobs([]);
    setPage(0);
    fetchJobs();
  }, [sortOrder]);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  return (
    <>
      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="bi-linkedin fw-bold"> Altre offerte di lavoro per te</h4>
        <p className="text-muted">
          In base al tuo profilo, alle tue preferenze e ad attività come
          candidature, ricerche e salvataggi
        </p>

        <div className="mb-3">
          <label htmlFor="sortOrder" className="form-label">
            Ordina per:
          </label>
          <select
            id="sortOrder"
            className="form-select w-50 bg-primary-subtle"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="recenti">Più recenti</option>
            <option value="meno_recenti">Meno recenti</option>
          </select>
        </div>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-danger">Errore: {error}</p>}

        <ul className="list-group">
          {jobs.map((job) => (
            <li key={job._id} className="list-group-item">
              <h5 className="text-primary">{job.title}</h5>
              <p>{job.company_name}</p>
              <p>{job.candidate_required_location}</p>
              <p> {job.publication_date && <p> {formatDate(job.publication_date)}</p>}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                Dettagli
              </a>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-primary mt-3"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Carica più risultati
        </button>
      </div>

      <div>
        {/*sezione verifica */}
        <div className="card border rounded p-3 mb-5 shadow-sm w-25">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5>
                Completa la verifica per distinguerti nella tua ricerca di
                lavoro
              </h5>
              <p className="text-muted mb-2">
                Gli utenti verificati ottengono in media il 60% di
                visualizzazioni del profilo in più.
              </p>
              <button className="btn btn-primary d-flex align-items-center">
                <i className="bi bi-shield-check me-2"></i> Verifica ora
              </button>
            </div>
            <div className="ms-3 mt-4 ">
              <img
                src="../../../public/a man work in office.png"
                alt="Verifica il tuo profilo"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Linkjobs;