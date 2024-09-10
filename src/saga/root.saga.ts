import { all } from "redux-saga/effects";
import RootSaga from "./count.saga";
import { userSaga } from "./user.saga";

export default function* rootSaga() {
  yield all([RootSaga(), userSaga()]);
  // code after all-effect
}
