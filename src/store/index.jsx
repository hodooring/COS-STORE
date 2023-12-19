import { configureStore } from '@reduxjs/toolkit'
import notice from './modules/noticeSlice'
import customer from './modules/customerSlice'
import cart from './modules/cartSlice'
import auth from './modules/authSlice'
import pagination from './modules/paginationSlice'

export const store = configureStore({
  reducer: {
     notice,
     customer,
     cart,
     auth,
     pagination
  },
})