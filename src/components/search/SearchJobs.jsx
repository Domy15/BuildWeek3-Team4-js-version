import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";


const SearchJobs = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [show,setShow]=useState(false);

const responsive=useMediaQuery({query:"(max-width:769px)"})

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Jobs", { state: query });
  };
  

useEffect(()=>{
  if(responsive){
    setShow(false)
  }else{setShow(true)}
},[responsive])


  return (
    <>
        <Form onSubmit={handleSubmit} className="d-flex align-items-center">
          <Search onClick={()=>setShow(!show)} size={25} className="mx-3" />
          {show && <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 d-flex "
            aria-label="Search"
            value={query}
            onChange={handleChange}
          />}
        </Form>     
    </>
  );
};

export default SearchJobs;
