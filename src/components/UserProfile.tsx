import {Link, useParams} from "react-router-dom";
import {Alert, Button, Card, Image, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";
import {ActionType} from "../redux/action-types";

interface usersType {
    loading: boolean,
    usersList: any[]
}

export const UserProfile = () => {

    // * Take req.params
    const {id} = useParams()

    // * Connect Redux
    const userState: usersType = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch()

    //  * Send User Request
    useEffect(() => {
        dispatch({
            type: ActionType.USERS_REQUEST_LOADING
        })
    }, [])

    return (
        <>

            {/* alert window */}
            {userState.loading ?
                <Alert variant={'warning'}>
                    Page loading..
                </Alert>
                : null}

            {/* alert window */}
            <Row className="d-flex justify-content-center">
                {userState.usersList.map((item) => {
                    return (
                        item.id === Number(id) ? <>
                            <Card style={{width: "60rem"}} key={item.id}>
                                <Card.Body>
                                    <Image width={"45px"} height={"45px"}
                                           style={{borderRadius: "50%"}}
                                           src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                                           alt={"image user avatar"}/>
                                    <Card.Title>{item.email} | {item.name} | {item.username} </Card.Title>
                                    <Card.Text>
                                       Address: {item.address.street} | {item.address.street} | {item.address.suite} | {item.address.city} | {item.address.zipcode} |
                                    </Card.Text>
                                    <Card.Text>
                                        Address GEO: {item.address.geo.lat} | {item.address.geo.lng} |
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