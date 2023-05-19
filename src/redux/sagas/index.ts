import { takeEvery } from 'redux-saga/effects';
import {testFunc} from "../action-creators/index";
import {ActionType} from "../action-types";

export function* workerSaga(): Generator<any, any, any> {
    const data = yield testFunc()
    console.log(data)
}

export function* watchClickSaga() {
    yield takeEvery(ActionType.EXAMPLE, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}