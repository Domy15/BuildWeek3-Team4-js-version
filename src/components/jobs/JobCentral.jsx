/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";

const JobCentral = () => {
  const [cat, setCat] = useState();
  const categories = [
    "Data",
    "Finance / Legal",
    "Product",
    "Marketing",
    "Customer Service",
    "Software Development",
    "DevOps / Sysadmin",
    "Human Resources",
    "All others",
  ];

  const getRandomJob = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?${cat}=writing&limit=5`
      );
      if (response.ok) {
        const data = await response.json();
        setCat(data.data);
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCat(categories[Math.floor(Math.random() * categories.length)]);
    if (cat) {
      getRandomJob();
    }
  }, []);

  return (
    <Container className="p-0 py-3 mb-3 bg-white rounded-3 border py-3 my-3">
      <Row className="m-2 border-bottom">
        <Col>
          <div className="d-flex align-items-center">
            <Linkedin className="me-2" />
            <p className=" fw-bold fs-5 p-0 m-0">Ricerche Rapide</p>
          </div>
          <p className="text-muted"></p>
        </Col>
      </Row>
      <Row>
       
      </Row>
    </Container>
  );
};

export default JobCentral;
