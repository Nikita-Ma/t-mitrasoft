import {ActionType} from "../action-types";
import {takeEvery, put, call} from "redux-saga/effects";
import {getComments} from "../action-creators";
import {AnyAction} from "redux";
import {delay} from 'redux-saga/effects';

export function* fetchCommentsSaga(action: AnyAction): Generator<any, any, any> {

    // create fake delay
    yield delay(5000)

    try {

        const resData = yield call(getComments, action.payload)
        yield put({type: ActionType.COMMENTS_REQUEST_SUCCESS, payload: [resData, action]})

    } catch (e: any) {

        yield put({type: ActionType.COMMENTS_REQUEST_ERROR, payload: e.name})

    }
}

export function* watchCommentsSaga() {
    yield takeEvery(ActionType.COMMENTS_REQUEST_LOADING, fetchCommentsSaga);

}

export default function* rootCommentsSaga() {
    yield watchCommentsSaga();
}