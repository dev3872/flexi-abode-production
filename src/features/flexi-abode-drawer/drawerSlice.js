import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	drawer: 0,
};

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		updateDrawer: (state, action) => {
			state.drawer = action.payload;
		},
	},
});

export const { updateDrawer } = drawerSlice.actions

export default drawerSlice.reducer