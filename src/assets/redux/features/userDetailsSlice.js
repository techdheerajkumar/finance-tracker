import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState:  JSON.parse(localStorage.getItem("registeredUser")) || [],
  reducers: {
    loadUsers: (state, action) => {
      state = JSON.parse(localStorage.getItem("registeredUser")) || [];
    },
    userDetails: (state, action) => {
      state.push(action.payload); // Add new user
      localStorage.setItem("registeredUser", JSON.stringify(state)); //
    },
  },
});

// Action creators are generated for each case reducer function
export const { userDetails, loadUsers } = userDataSlice.actions;

export default userDataSlice.reducer;
