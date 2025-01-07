import { configureStore } from '@reduxjs/toolkit'
import  userDataSlice from './features/userDetailsSlice'
export const store = configureStore({
  reducer: {
    userData: userDataSlice
  },
})