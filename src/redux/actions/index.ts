import {ActionType} from "../action-types";

interface AllPostsActiveAction {
    type: ActionType.ALL_POSTS_ACTIVE;
}
interface CreatorProfileActiveAction {
    type: ActionType.CREATOR_PROFILE_ACTIVE;
}

export type Action = AllPostsActiveAction | CreatorProfileActiveAction