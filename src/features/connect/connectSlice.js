import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	receiver: "",
};

export const connectSlice = createSlice({
	name: "connect",
	initialState,
	reducers: {
		updateReceiver: (state, action) => {
			state.receiver = action.payload;
		},
	},
});

export const { updateReceiver } = connectSlice.actions

export default connectSlice.reducer