import { all } from "redux-saga/effects";
import RootSaga from "./count.saga";

export default function* rootSaga() {
  yield all([RootSaga()]);
  // code after all-effect
}
