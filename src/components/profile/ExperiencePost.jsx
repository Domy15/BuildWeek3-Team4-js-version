import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ExperiencePost = (props) => {
  const dispatch = useDispatch();
  const [imgExp, setImgExp] = useState({
    img: null,
  });
  const [value, setValue] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const postExp = async (e) => {
    e.preventDefault();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

    const url = `https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        putImage(data._id);
        console.log(`Esperienza aggiunta!`);
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log("Errore: ", error);
    }
  };
  const putImage = async (id) => {
    try {
      const formData = new FormData();
      if (imgExp) {
        formData.append("experience", imgExp.img);
      }

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";
      console.log(formData);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences/${id}/picture`,
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
        dispatch({ type: "UPDATE" });
        props.changeUpdate();
        props.hide();
      } else {
        throw new Error("errore nella fetch dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-3 border rounded-2 my-3">
      <Form className="formExpSetting" onSubmit={postExp}>
        <div className="mb-3">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Qualifica">
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
                required
                value={value.role}
                onChange={(e) => setValue({ ...value, role: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Azienda">
              <Form.Label>Azienda o organizzazione</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retex"
                required
                value={value.company}
                onChange={(e) =>
                  setValue({ ...value, company: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <div className="mx-2">
            <Form.Check
              type="checkbox"
              label="Attualmente ricopro questo incarico"
              className="p-3"
              height={20}
              width={20}
            />
          </div>
          <div className="d-flex">
            <Form.Group as={Col} controlId="inizio" className="pe-3">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                name="start"
                required
                value={value.startDate}
                onChange={(e) =>
                  setValue({ ...value, startDate: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fine" className="ps-3">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                name="end"
                value={value.endDate}
                onChange={(e) =>
                  setValue({ ...value, endDate: e.target.value })
                }
              />
            </Form.Group>
          </div>

          <Form.Group controlId="Località" className="my-3">
            <Form.Label>Località</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              required
              value={value.area}
              onChange={(e) => setValue({ ...value, area: e.target.value })}
            />
          </Form.Group>

          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            className="textareaExpMod"
            placeholder="Descrivi la tua esperienza"
            style={{ height: "100px" }}
            required
            value={value.description}
            onChange={(e) =>
              setValue({ ...value, description: e.target.value })
            }
          />
          <Form.Label className="mt-3">Immagine Experience:</Form.Label>
          <Form.Control
            type="file"
            className="imgAreaExpMod"
            onChange={(e) => setImgExp({ img: e.target.files[0] })}
          ></Form.Control>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="danger"
          type="button"
          className="ms-3"
          onClick={() => {
            props.hide();
          }}
        >
          Annulla
        </Button>
      </Form>
    </div>
  );
};

export default ExperiencePost;
