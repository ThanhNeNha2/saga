import { call, put, takeEvery } from "redux-saga/effects";
import { IsCreateFailedSaga, IsCreateSuccessSaga, IsGetFailedSaga, IsGetSuccessSaga } from "../redux/User/user.slide";
import { PayloadAction } from "@reduxjs/toolkit";
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

const fetchCreate =  async (name : string , email : string  )=>{
  const res =await fetch("http://localhost:8000/users", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      email: email,
      name: name
    })
  })
  .then( (response) => { 
     //do something awesome that makes the world a better place
  });
}

function* createUerApi (action : PayloadAction<{email:string , name :string }>){
try {
  yield call(fetchCreate ,action.payload.email , action.payload.name )
  yield put(IsCreateSuccessSaga())
} catch (error) {
  yield put(IsCreateFailedSaga())
  
}
}

export function* userSaga() {
  yield takeEvery("IsGetPendingSaga", fetchUerApi);
  yield takeEvery("IsCreatePendingSaga", createUerApi);
  
}
