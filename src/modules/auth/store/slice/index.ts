import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  { LoginDto } from "@/modules/auth/api";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
})

export default authSlice.reducer;
