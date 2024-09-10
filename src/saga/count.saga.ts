import { put, takeEvery } from "redux-saga/effects";
import { incrementSaga } from "../redux/counter/counter.slide";
function* handleSaga(action: any) {
  yield put(incrementSaga(2));
}

function* RootSaga() {
  yield takeEvery("counter/incrementSagaStart", handleSaga);
}

export default RootSaga;
