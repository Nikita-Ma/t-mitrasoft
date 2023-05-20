// TODO: Rewrite any on real type when write action
import {Action} from "../actions";
import {ActionType} from "../action-types";

interface PostsState {
    loading: boolean,
    success: boolean,
    error: string | boolean,
    posts: any[]
}

const initialState = {
    loading: false,
    success: false,
    error: '',
    posts: [
        {
            title: 'Example',
            desc: 'Example',
            commentList: []
        }
    ],
}


export const postsReducer = (state = initialState, action: Action): PostsState => {
    switch (action.type) {
        case ActionType.POSTS_REQUEST_LOADING:
            return {...state, loading: true}
        case ActionType.POSTS_REQUEST_SUCCESS:
            return {...state, loading: false, error: false, success: true, posts: action.payload}
        default:
            return state
    }
}