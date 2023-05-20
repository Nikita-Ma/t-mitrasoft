import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";
import {ActionType} from "../redux/action-types";

interface usersType {
    usersList: any[]
}

export const UserProfile = () => {
    const {id} = useParams()

    const userState: usersType = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: ActionType.USERS_REQUEST_LOADING
        })
    }, [])

    return (
        <>
            <Row className="d-flex justify-content-center">
                {userState.usersList.map((item) => {
                    return (
                        item.id == id ? <>
                            <Card style={{width: "60rem"}} key={item.id}>
                                <Card.Body>
                                    <Image width={"45px"} height={"45px"}
                                           style={{borderRadius: "50%"}}
                                           src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                                           alt={"image user avatar"}/>
                                    <Card.Title>{item.email}</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </> : null
                    )
                })}
            </Row>
            <Link to={'/'}><Button>Go Back</Button></Link>
        </>
    )
}