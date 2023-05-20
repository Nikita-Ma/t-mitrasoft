// TODO: Rewrite any on real type when write action
import {Action} from "../actions";
import {ActionType} from "../action-types";

const initialState = {
    postActiveNav: true,
    profActiveNav: false,
    loading: false,
    error: null,
    usersList: [],
};

interface UserState {
    postActiveNav: boolean,
    profActiveNav: boolean,
    loading: boolean,
    error: string | null;
    usersList: any[]
}

export const usersReducer = (state = initialState, action: Action): UserState => {
    switch (action.type) {
        case ActionType.ALL_POSTS_ACTIVE:
            return {...state, postActiveNav: true, profActiveNav: false,}
        case ActionType.CREATOR_PROFILE_ACTIVE:
            return {...state, profActiveNav: true, postActiveNav: false}
        case ActionType.USERS_REQUEST_LOADING:
            return {...state, loading: true}
        case ActionType.USERS_REQUEST_SUCCESS:
            return {...state, loading: false, error: null, usersList: [...action.payload]}
        case ActionType.USERS_REQUEST_ERROR:
            return {...state, loading: false, error: action.payload, usersList: []}

        default:
            return state
    }
}