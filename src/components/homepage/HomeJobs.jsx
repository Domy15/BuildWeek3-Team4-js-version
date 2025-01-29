import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Linkfoot from "./Linkfoot";

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
        const random = [...data].sort(() => Math.random() - 0.5).slice(0, 6);
        setRandomJobs(random);
      } else {
        alert("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.error("Errore nella fetch:", error);
    }
  };
  return (
    <div className="sticky-top z-custom">
      <Card className="mt-5 p-3 rounded-2 bg-white">
        <h4>Annunci di Lavoro</h4>
        <h6 className="text-secondary">consigliati per te</h6>
        <hr />
        {randomJobs.map((job) => (
          <ul key={job._id} className=" mb-4 list-unstyled">
            <li
              className="list-unstyled mb-1 accordio fw-bolder "
              style={{
                fontSize: "14px",
              }}
            >
              {job.title}
            </li>

            {job.company_name && (
              <li
                className="list-unstyled text-secondary"
                style={{
                  fontSize: "12px",
                  lineHeight: "0.5",
                }}
              >
                {job.company_name}
              </li>
            )}
          </ul>
        ))}
        <Button className="w-100 rounded-5 pb-2" variant="outline-primary">
          Mostra altro
        </Button>
      </Card>
      <Linkfoot />
    </div>
  );
};

export default HomeJobs;
