import {ActionType} from "../action-types";
import {takeEvery, put, delay} from "redux-saga/effects";
import {getPosts} from "../action-creators";

export function* fetchPostsSaga(): Generator<any, any, any> {

    // create fake delay
    yield delay(5000)
    try {
        const resData = yield getPosts()
        yield put({type: ActionType.POSTS_REQUEST_SUCCESS, payload: resData})
    } catch (e: any) {
        yield put({type: ActionType.POSTS_REQUEST_ERROR, payload: e.name})
    }
}

export function* watchPostsSaga() {
    yield takeEvery(ActionType.POSTS_REQUEST_LOADING, fetchPostsSaga);

}

export default function* rootPostsSaga() {
    yield watchPostsSaga();
}