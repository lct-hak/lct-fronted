import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUserSlice = {
  uuid: string;
};

const initialState: TUserSlice = {
  uuid: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUUID (state, action: PayloadAction<string>) {
      state.uuid = action.payload
    },
  },
});

export const { setUUID } = userSlice.actions;
export default userSlice.reducer;
