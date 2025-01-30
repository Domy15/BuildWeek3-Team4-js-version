import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { DashLg, Geo, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    setJobs([]);
    setPage(0);
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="bg-white p-3 rounded shadow-sm mt-4">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="imageProfile"
            width={50}
            height={50}
            className="rounded border shadow-sm me-3"
          />
          <h5 className="fw-bold text-dark m-0 h2">
            Altre offerte di lavoro per te
          </h5>
        </div>
        <hr />
        <p>
          In base al tuo profilo, alle tue preferenze e ad attività come
          candidature, ricerche e salvataggi
        </p>

        <div className="mb-3  d-flex align-items-center justify-content-end">
          <p className="m-0 me-2"> Ordina per:</p>
          <div className="d-flex position-relative">
            <select
              className="form-select ms-auto"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="recenti">Più recenti</option>
              <option value="meno_recenti">Meno recenti</option>
            </select>
          </div>
        </div>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-danger">Errore: {error}</p>}

        <div className="list-group ">
          {jobs.map((job) => (
            <div key={job._id} className="p-3 border rounded-2 my-3 bg-white">
              <Link to='/Jobs/detailes' state={{ jobs: jobs, job: job }} className="fw-bold h4 m-0">{job.title}</Link>
              <p className="m-0 my-2">{job.company_name}</p>
              <div className="d-flex align-items-center">
                <Geo size={25} className="iconLabel3" />
                <p className="m-0 fst-italic">
                  {job.candidate_required_location}
                </p>
              </div>
              <div className="mt-2 d-flex justify-content-between align-items-center text-muted">
                <div>
                  {job.publication_date && (
                    <p> {formatDate(job.publication_date)}</p>
                  )}
                </div>
                <div className="button-71 btn btn-primary rounded-4 px-2 py-1 m-0">
                  Vedi di più
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content g-1">
          <Button
            className="button-29 d-flex gap-1 rounded-5 me-2"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <PlusLg size={25} className="fw-bold" />
          </Button>
          <Button
            className="button-29 d-flex gap-1 rounded-5"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <DashLg size={25} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Linkjobs;
