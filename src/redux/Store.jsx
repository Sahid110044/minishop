import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Features/Counterslice.jsx'

  const Store = configureStore({
  reducer: {
    cartlist: cartReducer 
  }
})

export default Store;