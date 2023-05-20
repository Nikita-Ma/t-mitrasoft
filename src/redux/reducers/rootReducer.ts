import { combineReducers } from 'redux';
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";


const rootReducer = combineReducers({
    post: postsReducer,
    users: usersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>