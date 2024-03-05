import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType, TokenType } from "../../misc/type"; // Import your types

interface UserSliceState {
  user: UserType | null;
  tokens: TokenType | null;
}

const initialState: UserSliceState = {
  user: null,
  tokens: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    saveTokens: (state, action: PayloadAction<TokenType>) => {
      state.tokens = action.payload;
    },
  },
});

export const { saveUserData, saveTokens } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
