import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Linkjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("recenti");
  const [show, setShow] = useState(5);
  const location = useLocation();
  const query = location.state;

  console.log(query);
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

  const fetchquery = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
      );
      if (response.ok) {
        const data = await response.json();
        setJobs(data.data);
        console.log(data.data);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

 const fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?limit=3&offset=${
          page * 100
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

  const showMore = () => {
    setShow(show + 3);
  };

  const showLess = () => {
    setShow(show - 3);
  };
  console.log(jobs.length);

  useEffect(() => {
    fetchquery();
  }, [query]);

  {/*useEffect(() => {
    setJobs([]);
    setPage(0);
    //fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);

  useEffect(() => {
    //fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);*/}

  return (
    <>
      <div className="bg-white p-3 rounded shadow-sm mt-4">
        <h5 className="bi-linkedin fw-bold"> Altre offerte di lavoro per te</h5>
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

        <ul className="list-group ">
          {jobs &&
            show > 0 &&
            jobs.slice(0, show).map((job) => (
              <li key={job._id} className="list-group-item">
                <h5 className="text-primary">{job.title}</h5>
                <p style={{ lineHeight: "0.6" }}>{job.company_name}</p>
                <p style={{ lineHeight: "0.5" }}>
                  {" "}
                  {job.candidate_required_location}
                </p>
                <div className="d-flex justify-content-between">
                  <span className="text-muted" style={{ lineHeight: "0.5" }}>
                    <small>
                      {" "}
                      {job.publication_date && (
                        <p> {formatDate(job.publication_date)}</p>
                      )}
                    </small>
                  </span>
                  <a
                    style={{ lineHeight: "0.2" }}
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <small>Dettagli</small>
                  </a>
                </div>
              </li>
            ))}
        </ul>
        <div className=" mt-3 ">
          <Button
            className="btn btn-primary rounded-5 "
            onClick={() => showMore()}
          >
            Carica più risultati
          </Button>
          <Button
            className="btn btn-primary rounded-5 ms-3"
            onClick={() => showLess()}
          >
            Mostra meno
          </Button>
        </div>
      </div>
    </>
  );
};

export default Linkjobs;
