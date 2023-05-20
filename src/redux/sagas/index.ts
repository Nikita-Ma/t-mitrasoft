import {all, fork} from 'redux-saga/effects';
import rootPostsSaga from "./posts";
import rootCommentsSaga from "./comments";
import rootUsersSaga from "./users";

// import all sagas
export default function* rootSaga() {
    yield all([
        fork(rootUsersSaga),
        fork(rootPostsSaga),
        fork(rootCommentsSaga)
    ]);
}