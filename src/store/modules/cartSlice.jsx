import { createSlice } from '@reduxjs/toolkit'
import productData from '../../assets/api/cartdata'
const initialState = {
  carts : [],
  cartTotal : 0,
  products : productData
}
let no = 33
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.carts.push (action.payload)
    },
    removeCart: (state,action) => {
      state.carts = state.carts.filter ( item => item.id !== action.payload )
    },
    totalCart: (state,action) => {
      state.cartTotal = state.carts.reduce((acc,cur)=>acc+Number(cur.price), 0)
    },
    sortCart: (state,action) => {
      // if(action.payload==='title') {
      //   state.products.sort((a,b) => a.title > b.title ? 1 : -1)
      // }
      // if(action.payload==='price') {
      //   state.products.sort((a,b) => a.price > b.price ? 1 : -1)
      // }
      // if(action.payload==='category') {
      //   state.products.sort((a,b) => a.category > b.category ? 1 : -1)
      // }
      if (action.payload!=='') {
        state.products.sort( (a,b) => a[action.payload] > b[action.payload] ? 1:-1 )
      }      
    },
    searchCart: (state,action) => {
      //title
      state.products = productData.filter(item => item.title.toLowerCase().includes(action.payload))
    },
    resetCart: (state,action) => {
      state.products = productData
    },
    // pricepart: (state,action) => {
    //   state.products = productData(item=>parseInt(action.payload))
    // }
    totalprice: (state,action) => {
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart,removeCart,totalCart,sortCart,resetCart,searchCart,totalprice } = cartSlice.actions

export default cartSlice.reducer