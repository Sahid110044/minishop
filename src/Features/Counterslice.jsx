import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  card:[],
  items:[],
  totalquantity:0,
  totalprice:0,
  search:"",
  sorting:"",
}


export const counterSlice = createSlice({
  name: 'cartlist',
  initialState,
  reducers: {

    
  addtocart:(state,action)=>{
    let find = state.card.findIndex((prod)=>prod.id === action.payload.id)
    if(find >= 0){
       state.card[find].quantity += 1;
    }else{
      state.card.push({...action.payload, quantity:1})
    }
  },

  removetocart:(state,action)=>{
    
    state.card = state.card.filter((prod)=>prod.id !== action.payload.id)
  },

  getcardtotal:(state)=>{
   const total = state.card.reduce((acc,items)=>{

       const {price,quantity} = items
       const TotalitemPrice = parseInt(price) * parseInt(quantity)
       acc.totalprice += parseInt(TotalitemPrice)
       acc.totalquantity += quantity
       return acc

    },{totalquantity:0,totalprice:0})

    state.totalprice = total.totalprice
    state.totalquantity = total.totalquantity
  },
  
  addqty:(state,action)=>{
    let findIndex = state.card.findIndex((prod)=>prod.id === action.payload)
    if(findIndex !== -1){
      state.card[findIndex].quantity += 1;
    }
  },

  removeqty:(state,action)=>{
    let findIndex = state.card.findIndex((prod)=>prod.id === action.payload)
    if(findIndex >= 0){
       state.card[findIndex].quantity -= 1;
    }
  },

  searchItem:(state,action)=>{
    state.search = action.payload.toLowerCase()
  },
  sortingItem:(state,action)=>{
      state.sorting = action.payload
  }

  }
})

// Action creators are generated for each case reducer function
export const {addtocart,removetocart,getcardtotal,addqty,removeqty,searchItem,sortingItem} = counterSlice.actions

export default counterSlice.reducer

