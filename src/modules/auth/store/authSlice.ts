import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokensDtoType } from "@/modules/auth/api";

type AuthStoreType = {
  accessToken: string | null,
  refreshToken: string | null,
}

const initialState = (): AuthStoreType => ({
  accessToken: null,
  refreshToken: null,
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    setTokens: (state, action: PayloadAction<TokensDtoType>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    removeTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
});

export const { setTokens, removeTokens } = authSlice.actions;

export default authSlice.reducer;



