import { call, put, takeEvery } from "redux-saga/effects";
import { IsGetFailedSaga, IsGetSuccessSaga } from "../redux/User/user.slide";
interface IUser {
  name: string;
  email: string;
  id: number;
}
const fetchApi = async () => {
  const res = await fetch("http://localhost:8000/users");
  return res.json();
};
function* fetchUerApi() {
  try {
    const users: IUser[] = yield call(fetchApi);
    yield put(IsGetSuccessSaga(users));
  } catch (error) {
    yield put(IsGetFailedSaga());
  }
}

export function* userSaga() {
  yield takeEvery("IsGetPendingSaga", fetchUerApi);
}
