//Bootstrap Imports
import {Button, Col, Container, Row} from "react-bootstrap";
//React Imports
import {useState} from "react";
//Component Imports
import {CountdownCircleTimer} from "react-countdown-circle-timer";

interface TimerProps {
    coatType: string;
}

const Timer = ({coatType}: TimerProps) => {

    if (coatType === "none") {
        return
    }

    const [isRunning, setIsRunning] = useState(false);

    const [key, setKey] = useState(0);

    const renderTime = ({remainingTime}: any) => {
        if (remainingTime === 0) {
            return <div className="timer">All dry! <br/>Another coat?</div>;
        }
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{minutes}:{seconds}</div>
            </div>
        );
    };

    return (
        <Container>
            <Row className="mt-4">
                <div className="d-flex justify-content-center">
                    <CountdownCircleTimer duration={coatType == "coat" ? 120 : 900}
                                          colors={'#004777'}
                                          isPlaying={isRunning}
                                          key={key}>
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
            </Row>

            <Row className="d-flex justify-content-evenly mt-4">
                <Col md={3}></Col>
                <Col className="mt-2" md={2}><Button variant="outline-success" onClick={() => {
                    setIsRunning(true)
                }}>Start</Button></Col>
                <Col className="mt-2"  md={2}><Button variant="outline-success" onClick={() => {
                    setIsRunning(false)
                }}>Stop</Button></Col>
                <Col className="mt-2"  md={2}><Button variant="outline-success" onClick={() => setKey(prevKey => prevKey + 1)}>
                    Restart</Button></Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default Timer;