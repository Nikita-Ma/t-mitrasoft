import {Container, Row, Col, Button, Image,} from 'react-bootstrap';
import {Header} from "../components/Header";
import {Link} from "react-router-dom";
import React from "react";

export const Creator: React.FC = () => {
    return (
        <>
            <Header/>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Row>
                            <Image width={'200px'} height={'200px'}
                                   style={{objectFit: 'contain'}}
                                   src={"https://img.hhcdn.ru/photo/612576764.jpeg?t=1684699936&h=_D-llm5r3K2sNfBKpneEjg"}
                                   alt={"image user avatar"}/>
                            <h1>Nikita</h1>
                            <h2>
                                <Link to="mailto:nikitama1hr@gmail.com">nikitama1hr@gmail.com</Link>
                            </h2>
                        </Row>
                        <br/>
                        <h2 className="p-lg-2" style={{borderLeft: '3px solid black'}}>About me 🎉</h2>
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

