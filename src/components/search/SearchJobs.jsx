import { useState } from "react";


const SearchJobs = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      
    </>
  );
};

export default SearchJobs;
