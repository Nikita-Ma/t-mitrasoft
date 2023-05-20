import {ActionType} from "../action-types";

interface AllPostsActiveAction {
    type: ActionType.ALL_POSTS_ACTIVE;
}
interface CreatorProfileActiveAction {
    type: ActionType.CREATOR_PROFILE_ACTIVE;
}


// * POST REQUEST
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

//

export type Action = AllPostsActiveAction | CreatorProfileActiveAction | PostAction