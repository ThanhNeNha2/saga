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
}

const initialState: CounterState = {
  isPending: false,
  isError: false,

  data: [],
  errors: [],
};

export let IsGetPendingSaga = createAction("IsGetPendingSaga");
export let IsGetSuccessSaga = createAction<IUser[]>("IsGetSuccessSaga");
export let IsGetFailedSaga = createAction("IsGetFailedSaga");

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
      state.isPending = true;
      state.isError = false;
    });
    builder.addCase(IsGetFailedSaga, (state, action) => {
      state.isPending = true;
      state.isError = false;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
