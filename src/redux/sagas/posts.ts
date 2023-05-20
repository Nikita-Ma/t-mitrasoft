import {ActionType} from "../action-types";
import {takeEvery, put} from "redux-saga/effects";
import {testFunc} from "../action-creators";

export function* fetchPostsSaga(): Generator<any, any, any> {
    try {
    const resData = yield testFunc()
        yield put({type: ActionType.POSTS_REQUEST_SUCCESS, payload: resData})
    } catch (e: any) {
        yield put({ type: ActionType.POSTS_REQUEST_ERROR, payload: e.name})
    }
}

export function* watchPostsSaga() {
    yield takeEvery(ActionType.POSTS_REQUEST_LOADING, fetchPostsSaga);
    
}

export default function* rootPostsSaga() {
    yield watchPostsSaga();
}