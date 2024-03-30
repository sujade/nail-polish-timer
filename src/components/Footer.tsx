//Bootstrap Imports
import {Container, Row} from "react-bootstrap";
//Icon Imports
import {FaHeart} from "react-icons/fa";


const Footer = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <p>this little app is made with lots of <FaHeart/> by su jade
                </p>
            </Row>
        </Container>
    );
};

export default Footer;