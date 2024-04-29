import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface IAuthState {
  authState: boolean;
}

const initialState: Profile | null = null;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const {} = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
export default profileSlice.reducer
