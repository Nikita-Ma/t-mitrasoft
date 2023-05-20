import {ActionType} from "../action-types";
import {takeEvery, put, call, delay} from "redux-saga/effects";
import {AnyAction} from "redux";
import {getUsersInfo} from "../action-creators";

export function* fetchUsersSaga(action: AnyAction): Generator<any, any, any> {

    // create fake delay
    yield delay(5000)
    try {
        const resData = yield call(getUsersInfo, action.payload)
        yield put({type: ActionType.USERS_REQUEST_SUCCESS, payload: resData})
    } catch (e: any) {
        yield put({type: ActionType.USERS_REQUEST_ERROR, payload: e.name})
    }
}

export function* watchUsersSaga() {
    yield takeEvery(ActionType.USERS_REQUEST_LOADING, fetchUsersSaga);

}

export default function* rootUsersSaga() {
    yield watchUsersSaga();
}