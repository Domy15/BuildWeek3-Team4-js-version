import { Button } from "react-bootstrap";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const ExperienceModify = (props) => {
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";
  const [value, setValue] = useState({
    role: props.item.role,
    company: props.item.company,
    startDate: new Date(props.item.startDate).toISOString().split("T")[0],
    endDate: new Date(props.item.endDate).toISOString().split("T")[0],
    description: props.item.description,
    area: props.item.area,
  });

  const [imgExp, setImgExp] = useState({
    img: null,
  });

  const putExperience = async () => {
    console.log(props.item._id);

    try {
      const URL = `http://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences/${props.item._id}`;
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("dati aggiornati");
        props.formModify();
        props.changeUpdate();
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const putImage = async () => {
    try {
      const formData = new FormData();
      if (imgExp) {
        formData.append("experience", imgExp.img);
      }

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";
      console.log(formData);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences/${props.item._id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log("immagine cambiata");
      } else {
        throw new Error("errore nella fetch dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Form
        className="modifyForm my-3"
        onSubmit={(e) => {
          e.preventDefault();
          putExperience();
          putImage();
        }}
      >
        <Form.Group>
          <Form.Label>Immagine Experience:</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImgExp({ img: e.target.files[0] })}
          ></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Qualifica">
            <Form.Control
              type="text"
              size="sm"
              placeholder="Esempio: Retail Sales Manager"
              required
              value={value.role}
              onChange={(e) => setValue({ ...value, role: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Azienda o organizzazione"
          >
            <Form.Control
              type="text"
              size="sm"
              placeholder="Esempio: Retex"
              required
              value={value.company}
              onChange={(e) => setValue({ ...value, company: e.target.value })}
            />
          </FloatingLabel>

          <div className="d-flex gap-5">
            <FloatingLabel controlId="floating3" label="Data di inizio">
              <Form.Control
                type="date"
                size="sm"
                name="start"
                required
                value={value.startDate}
                onChange={(e) =>
                  setValue({ ...value, startDate: e.target.value })
                }
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Data di fine">
              <Form.Control
                type="date"
                size="sm"
                name="end"
                value={value.endDate}
                onChange={(e) =>
                  setValue({ ...value, endDate: e.target.value })
                }
              />
            </FloatingLabel>
          </div>

          <FloatingLabel controlId="floatingInput" label="Località">
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              required
              value={value.area}
              onChange={(e) => setValue({ ...value, area: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Descrizione">
            <Form.Control
              type="text"
              size="sm"
              placeholder="Descrivi la tua esperienza"
              style={{ height: "50px" }}
              required
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </FloatingLabel>
        </div>
        <div className="text-end">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="danger"
            type="button"
            className="ms-3"
            onClick={(e) => {
              e.preventDefault();
              props.formModify();
            }}
          >
            Annulla
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ExperienceModify;
