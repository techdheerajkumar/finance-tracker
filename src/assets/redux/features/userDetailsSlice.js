import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: JSON.parse(localStorage.getItem("registeredUser")) || [],
  reducers: {
    userDetails: (state, action) => {
      const existingData =
        JSON.parse(localStorage.getItem("registeredUser")) || []; //store array data in a variable
      existingData.push(action.payload); // PUshed user data to that array

      localStorage.setItem("registeredUser", JSON.stringify(existingData)); // Finally update localhost database with new data and old data
    },
  },
});

// Action creators are generated for each case reducer function
export const { userDetails } = userDataSlice.actions;

export default userDataSlice.reducer;
