import {ActionType} from "../action-types";

interface AllPostsActiveAction {
    type: ActionType.ALL_POSTS_ACTIVE;
}

interface CreatorProfileActiveAction {
    type: ActionType.CREATOR_PROFILE_ACTIVE;
}


// * POST
interface PostsRequestLoading {
    type: ActionType.POSTS_REQUEST_LOADING
}

interface PostsRequestSuccess {
    type: ActionType.POSTS_REQUEST_SUCCESS,
    payload: any[]
}

interface PostsRequestError {
    type: ActionType.POSTS_REQUEST_ERROR,
    payload: any
}

// * export interface
type PostAction = PostsRequestLoading | PostsRequestSuccess | PostsRequestError


// * Comments
interface CommentsRequestLoading {
    type: ActionType.COMMENTS_REQUEST_LOADING,
    payload: string
}

interface CommentsRequestSuccess {
    type: ActionType.COMMENTS_REQUEST_SUCCESS,
    payload: any[]
}

interface CommentsRequestError {
    type: ActionType.COMMENTS_REQUEST_ERROR,
    payload: any
}



export type CommentAction = CommentsRequestLoading | CommentsRequestSuccess | CommentsRequestError
//

// * Users
interface UsersRequestLoading {
    type: ActionType.USERS_REQUEST_LOADING,
    payload: string
}

interface UsersRequestSuccess {
    type: ActionType.USERS_REQUEST_SUCCESS,
    payload: any[]
}

interface UsersRequestError {
    type: ActionType.USERS_REQUEST_ERROR,
    payload: any
}

type UserAction = UsersRequestLoading | UsersRequestSuccess | UsersRequestError

//

export type Action = AllPostsActiveAction | CreatorProfileActiveAction | PostAction | CommentAction | UserAction