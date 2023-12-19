import { createSlice } from '@reduxjs/toolkit'
import customerdata from '../../assets/api/customerdata'
import { nanoid } from "nanoid"


const initialState = {
  customerData:customerdata,
  current : {}
}
let no = customerdata.length+1

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    add : (state,action) => {
      state.customerData.push({id:no++, ...action.payload})
    },
    remove : (state,action) => {
      state.customerData = state.customerData.filter ( item => item.id !== action.payload )
    },
    cancel : (state,action) => {

    },
    update : (state,action) => {
/*       const user = action.payload
      state.customerData = state.customerData.map ( item => item.id === action.payload.id ? user : item ) */
      state.customerData = state.customerData.map(item=>item.id===action.payload.id ? action.payload : item)
    },
    // customerData 얘를 수정, 아이템의 아이디가 액션의 페이로드의 아이디와 같으면 액션의 페이로드가 들어오면 끝남 그렇지 않으면 아이템으로 처리
    edit : (state,action) => {
      state.current = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, cancel, update, edit } = customerSlice.actions

export default customerSlice.reducer