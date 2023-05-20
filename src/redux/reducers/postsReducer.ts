// TODO: Rewrite any on real type when write action
import {Action} from "../actions";
import {ActionType} from "../action-types";

interface PostsState {
    loading: boolean,
    success: boolean,
    error: string | boolean,
    posts: any[],
    comments: any[]
}

const initialState = {
    loading: false,
    success: false,
    error: '',
    posts: [
        {
            title: 'Example',
            desc: 'Example',
        }
    ],
    comments: []
}


export const postsReducer = (state = initialState, action: Action): PostsState => {

    switch (action.type) {
        case ActionType.POSTS_REQUEST_LOADING:
            return {...state, loading: true}
        case ActionType.POSTS_REQUEST_SUCCESS:
            return {...state, loading: false, error: false, success: true, posts: action.payload}
        case ActionType.POSTS_REQUEST_ERROR:
            return {...state, loading: false, error: action.payload, success: false, posts: []}
        case ActionType.COMMENTS_REQUEST_LOADING:
            return {...state, loading: true}
        case ActionType.COMMENTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                comments: checkComments(state, action.payload[0], action.payload[1].payload)
            }
        case ActionType.COMMENTS_REQUEST_ERROR:
            return {...state, loading: false, error: action.payload, success: false, comments: []}
        default:
            return state
    }


    function checkComments(state: PostsState, intoArray: any[], idP: any): any {

        if (!state.comments.length) {
            return [...state.comments, ...intoArray]
        }

        const filtArr = state.comments.filter(item => item.postId !== idP)

        if (filtArr.length < state.comments.length) {
            return filtArr
        } else {
            return [...state.comments, ...intoArray]
        }
    }
}
