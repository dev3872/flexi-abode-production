import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import connectSlice from "../features/connect/connectSlice";
import drawerSlice from "../features/flexi-abode-drawer/drawerSlice";

export const store = configureStore({
	reducer: {
		drawer: drawerSlice,
		auth: authSlice,
		connect:connectSlice
	},
});
