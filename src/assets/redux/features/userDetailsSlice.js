import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: [],
  reducers: {
    userDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { userDetails } = userDataSlice.actions;

export default userDataSlice.reducer;
