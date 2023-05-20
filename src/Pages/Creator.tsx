import {Container, Row, Col, Button} from 'react-bootstrap';
import {Header} from "../components/Header";
import {Link} from "react-router-dom";

export const Creator: React.FC = () => {
    return (
        <>
            <Header />
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1 className="p-lg-2" style={{borderLeft: '3px solid black'}}>About me 🎉</h1>
                        <p className="fs-4"> Hello! My name is Nik, I currently work in a store and am looking for a job
                            as a developer.
                            <br/>
                            I
                            have been interested in web development since the 8th grade.
                            <br/>
                            I love JS and React, I am constantly improving my knowledge in the web.dev.
                            <br/>
                            More information in my <Link to={"https://github.com/Nikita-Ma/fullaboutme"}>GitHub</Link>
                        </p>
                    </Col>
                </Row>
                <Link to={'/'}>
                    <Button variant="outline-primary">Go to Back</Button>
                </Link>
            </Container>
        </>

    );
};

