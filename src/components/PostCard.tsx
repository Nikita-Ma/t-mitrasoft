import React, {useState} from "react";
import {Button, Card, Image, ListGroup} from "react-bootstrap";


const PostCard = () => {

    const [viewComment, setViewComment] = useState(false);
    return (
        <Card style={{width: "60rem"}}>
            <Card.Body>

                <Card.Title className="fs-3">
                    Title
                </Card.Title>

                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">

                <ListGroup.Item className="d-flex justify-content-between">
                    <Image width={"45px"} height={"45px"}
                           style={{borderRadius: "50%"}}
                           src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                           alt={"image user avatar"}/>
                    {/*TODO Refactor Draft Action*/}
                    <Button onClick={() => setViewComment(!viewComment)}>
                        Comments
                    </Button>

                </ListGroup.Item>
                {
                    viewComment ? <ListGroup>
                            <ListGroup.Item>
                                <span className="fs-6">Email</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, odit.</p>
                            </ListGroup.Item>
                        </ListGroup>
                        : null
                }

            </ListGroup>
        </Card>
    );
};

export default PostCard;
