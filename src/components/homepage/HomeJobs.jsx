import { useEffect, useState } from "react";

const HomeJobs = ({ searchQuery }) => {
  const [randomJobs, setRandomJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, [searchQuery]);
  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10"
      );
      if (response.ok) {
        const { data } = await response.json();
        const random = [...data].sort(() => Math.random() - 0.5).slice(0, 4);
        setRandomJobs(random);
      } else {
        alert("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.error("Errore nella fetch:", error);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString({
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',      
      hour24: true, 
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Annunci di Lavoro
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {randomJobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ fontSize: "18px", margin: "10px 0" }}>{job.title}</h4>

            {job.company_name && (
              <p style={{ margin: "5px 0" }}>{job.company_name}</p>
            )}
            {job.publication_date && <p> {formatDate(job.publication_date)}</p>}
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "#007BFF",
                textDecoration: "none",
              }}
            >
              Dettagli del lavoro
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeJobs;
