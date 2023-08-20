import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice/User/userSlice'
export default configureStore({
  reducer: {
    loggedUser: userReducer 
  },
})