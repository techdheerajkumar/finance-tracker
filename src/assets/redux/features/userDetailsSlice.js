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
    expenseDetails: (state, action) =>{     
      const {id, updatedUser} = action.payload;
      const userIndex = state.findIndex(item => item.id === id);
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...updatedUser };  // Replace the user with new data
      }
       localStorage.setItem("registeredUser", JSON.stringify(state)); //
    }
  },
});

// Action creators are generated for each case reducer function
export const { userDetails, loadUsers, expenseDetails } = userDataSlice.actions;

export default userDataSlice.reducer;
