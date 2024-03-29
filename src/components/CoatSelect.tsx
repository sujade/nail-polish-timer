//Bootstrap Imports
import {Button, Container, Row} from "react-bootstrap";
//React Imports
import {useState} from "react";
//Component Imports
import Timer from "./Timer.tsx";

const CoatSelect = () => {

    const [coatType, setCoatType] = useState("none");

    return (
        <Container className="text-center">
            <Row className="d-flex justify-content-evenly"> <p>what kind of layer are we drying this time?</p>
                <Button onClick={() => {setCoatType("coat")}} id="switcher" variant="outline-danger">coat</Button>
                <Button onClick={() => {setCoatType("topCoat")}} id="switcher" variant="outline-danger">top coat</Button>
            </Row>


            <Timer coatType = {coatType}/>
        </Container>
    );
};

export default CoatSelect