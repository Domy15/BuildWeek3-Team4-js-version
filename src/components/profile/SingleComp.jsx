/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import { PeopleFill, Receipt } from "react-bootstrap-icons"


const SingleComp = (props) => {
    const [random,setRandom] = useState(0)

    const randomNumber = ()=> {
        const min = 1;
        const max = 5;
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandom(result)
    }

    useEffect(()=>{
        randomNumber()
    },[])

    return (
        <Row className=" px-2 ">
            <Col className="pb-3 custom-border-bottom">
                <p className="p-0 m-0 fw-bold ">{props.item.ability}</p>
                <div className="ps-2">
                    <div className="d-flex gap-2 align-items-center mb-2">
                        <Receipt />
                        <p className="p-0 m-0"> {props.item.where}</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <PeopleFill size={20}/>
                        <p className="p-0 m-0">{random} {random ===1? 'conferma' : 'conferme'}</p>
                    </div>
                </div>

            </Col>
        </Row>
    )
}

export default SingleComp