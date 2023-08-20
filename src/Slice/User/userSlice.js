import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    loginUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },
  reducers: {
    userinfo: (state,actions) => {
        console.log(actions.payload)
        state.loginUser =actions.payload
      
 
    },
  },
})

// Action creators are generated for each case reducer function
export const { userinfo } = counterSlice.actions

export default counterSlice.reducer;