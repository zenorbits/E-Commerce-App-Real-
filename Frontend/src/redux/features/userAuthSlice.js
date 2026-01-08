import { createSlice } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    email: "",
    token: "",
    role: "",
    isAuthenticated: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    // Register success
    userRegister: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.isError = null;
    },

    // Login success
    userLogin: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.isError = null;
    },

    // Logout
    userLogOut: (state) => {
      state.username = "";
      state.email = "";
      state.token = "";
      state.role = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.isError = null;
    },

    // Loading state
    setLoading: (state) => {
      state.isLoading = true;
      state.isError = null;
    },

    // Error state
    setError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const { userRegister, userLogin, userLogOut, setLoading, setError } =
  userAuthSlice.actions;

export default userAuthSlice.reducer;