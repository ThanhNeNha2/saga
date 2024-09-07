import { takeEvery } from "redux-saga/effects";
function* handleSaga() {
  console.log("tao chayj vafo dayroi nha ");
}

function* RootSaga() {
  yield takeEvery("*", handleSaga);
}

export default RootSaga;
