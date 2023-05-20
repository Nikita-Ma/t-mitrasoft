import { takeEvery, all, fork } from 'redux-saga/effects';
import {testFunc} from "../action-creators/index";
import {ActionType} from "../action-types";
import rootPostsSaga from "./posts";

export function* fetchUserSaga(): Generator<any, any, any> {
    // const data = yield testFunc()
    console.log(`data`)
}

export function* watchClickSaga() {
    yield takeEvery(ActionType.POSTS_REQUEST_LOADING, fetchUserSaga);
}

export default function* rootSaga() {
    yield all([
        fork(watchClickSaga),
        fork(rootPostsSaga),
    ]);
}