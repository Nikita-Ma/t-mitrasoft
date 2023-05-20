// TODO: Rewrite any on real type when write action
import {Action} from "../actions";
import {ActionType} from "../action-types";

const initialState = {
    postActiveNav: false,
    profActiveNav: false,
    loading: false,
    error: null,
    data: [],
};

interface UserState {
    postActiveNav: boolean,
    profActiveNav: boolean,
    loading: boolean,
    error: string | null;
    data: any[]
}

export const usersReducer = (state = initialState, action: Action): UserState => {
    switch (action.type) {
        case ActionType.ALL_POSTS_ACTIVE:
            return {...state, postActiveNav: true, profActiveNav: false,}
        case ActionType.CREATOR_PROFILE_ACTIVE:
            return {...state, profActiveNav: true, postActiveNav: false}
        default:
            return state
    }
}