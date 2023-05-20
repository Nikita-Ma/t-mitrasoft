import React, {useCallback, useEffect, useState} from "react";
import {Button, Card, Image, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ActionType} from "../redux/action-types";
import {RootState} from "../redux/reducers/rootReducer";

// TODO Write full structure redo ANY on Normally type
interface postsType {
    posts: any[]
}


const PostCard: React.FC = () => {

    const [viewComment, setViewComment] = useState<Boolean>(false);

    const postState: postsType = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('useEffect')
        dispatch({type: ActionType.POSTS_REQUEST_LOADING})
    }, [])

    const handlerShowComments = (id: string) => {
        console.log(id)
    }


    return (
        <>
            {
                postState.posts.map(item => {
                        return (
                            <Card style={{width: "60rem", marginTop: '20px'}} >
                                <Card.Body>

                                    <Card.Title className="fs-3">
                                        {item.title}
                                    </Card.Title>

                                    <Card.Text>
                                        {item.body}
                                    </Card.Text>
                                </Card.Body>

                                <ListGroup className="list-group-flush">

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <Link to={`/user/id-1231254125-124214`}>
                                            <Image width={"45px"} height={"45px"}
                                                   style={{borderRadius: "50%"}}
                                                   src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                                                   alt={"image user avatar"}/>
                                        </Link>
                                        {/*TODO Refactor Draft Action*/}
                                        <Button onClick={() => handlerShowComments(item.id)}>
                                            Comments
                                        </Button>

                                    </ListGroup.Item>
                                    {
                                        viewComment ? <ListGroup>
                                                <ListGroup.Item>
                                                    <span className="fs-6">Email</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
                                                        odit.</p>
                                                </ListGroup.Item>
                                            </ListGroup>
                                            : null
                                    }

                                </ListGroup>
                            </Card>)
                    }
                )
            }
        </>
    );
};

export default PostCard;
