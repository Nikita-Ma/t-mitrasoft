import React, {useEffect} from "react";
import {Alert, Button, Card, Image, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ActionType} from "../redux/action-types";
import {RootState} from "../redux/reducers/rootReducer";

// TODO Write full structure redo ANY on Normally type
interface postsType {
    loading: boolean
    posts: any[];
    comments: any[]
}


const PostCard: React.FC = () => {

    // * Connect Redux
    const postState: postsType = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();

    // * Send Action  (POST LOADING)
    useEffect(() => {
        dispatch({type: ActionType.POSTS_REQUEST_LOADING});
    }, [postState.comments]);

    // * Send Action  (COMMENTS LOADING) with payload (id)
    const handlerShowComments = (id: string) => {
        dispatch({type: ActionType.COMMENTS_REQUEST_LOADING, payload: id});
    };


    return (
        <>
            {/* alert window */}

            {postState.loading ?
                <Alert variant={'warning'}>
                    Page loading..
                </Alert>
                : null}

            {/* post block */}

            {
                postState.posts.map(itemPost => {
                        return (
                            <Card style={{width: "60rem", marginTop: "40px"}} key={itemPost.id}>
                                <Card.Body>

                                    <Card.Title className="fs-3">
                                        {itemPost.title}
                                    </Card.Title>

                                    <Card.Text>
                                        {itemPost.body}
                                    </Card.Text>
                                </Card.Body>

                                <ListGroup className="list-group-flush">

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <Link to={`/user/${itemPost.userId}`}>
                                            <Image width={"45px"} height={"45px"}
                                                   style={{borderRadius: "50%"}}
                                                   src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                                                   alt={"image user avatar"}/>
                                        </Link>
                                        {/*TODO Refactor Draft Action*/}
                                        <Button onClick={() => handlerShowComments(itemPost.id)}>
                                            Comments
                                        </Button>

                                        {/*Comments Block*/}
                                    </ListGroup.Item>
                                    {
                                        postState.comments.map((item) => {
                                            if (item.postId === itemPost.id) {
                                                return (
                                                    <ListGroup style={{marginTop: '15px'}}>
                                                        <ListGroup.Item>
                                                            <span className="fs-6">{item.email}</span>
                                                            <p>{item.body}</p>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                )
                                            }
                                        })
                                    }
                                </ListGroup>
                            </Card>);
                    }
                )
            }
        </>
    );
};

export default PostCard;
