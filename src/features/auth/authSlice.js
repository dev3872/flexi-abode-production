import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: localStorage.token,
	isAuthenticated: false,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authUser: (state, action) => {
			state.token = action.payload;
			state.user=null
			state.isAuthenticated = true;
			
		},
		logoutUser: (state, action) => {
			state.token = null;
			state.isAuthenticated = false;
			state.user = null;
		},
		loaded: (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		auth_error: (state, action) => {
			state.token = null;
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { authUser, logoutUser,loaded, auth_error } = authSlice.actions;

export default authSlice.reducer;
