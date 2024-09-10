import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IUser {
  name: string;
  email: string;
  id: number;
}
export interface CounterState {
  isPending: boolean;
  isError: boolean;
  data: IUser[];
  errors: [];
  isPendingCreate: boolean,
  isErrorCreate: boolean,
}

const initialState: CounterState = {
  isPending: false,
  isError: false,

  data: [],
  errors: [],

  isPendingCreate: false,
  isErrorCreate: false,
};

export let IsGetPendingSaga = createAction("IsGetPendingSaga");
export let IsGetSuccessSaga = createAction<IUser[]>("IsGetSuccessSaga");
export let IsGetFailedSaga = createAction("IsGetFailedSaga");

// CREATE 
export let IsCreatePendingSaga = createAction<{name : string , email : string} >("IsCreatePendingSaga");
export let IsCreateSuccessSaga = createAction("IsCreateSuccessSaga");
export let IsCreateFailedSaga = createAction("IsCreateFailedSaga");

export const userSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(IsGetPendingSaga, (state, action) => {
      state.isPending = true;
      state.isError = false;
    });
    builder.addCase(IsGetSuccessSaga, (state, action) => {
      state.isPending = false;
      state.isError = false;
      state.data = action.payload
    });
    builder.addCase(IsGetFailedSaga, (state, action) => {
      state.isPending = false;
      state.isError = true;
    });

// CREATE 
builder.addCase(IsCreatePendingSaga, (state, action) => {
  state.isPendingCreate = true;
  state.isErrorCreate = false;
});
builder.addCase(IsCreateSuccessSaga, (state, action) => {
  state.isPendingCreate = false;
  state.isErrorCreate = false;
  
});
builder.addCase(IsCreateFailedSaga, (state, action) => {
 
  state.isPendingCreate = false;
  state.isErrorCreate = true;
});
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
