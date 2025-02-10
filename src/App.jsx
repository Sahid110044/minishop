
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Payloaditems from './components/Payloaditems.jsx'





function App() {

  return (
    
    <>
 
   {/* <Cart/> */}


    <BrowserRouter basename='/minishop'>
     <Header/>

     <Routes>
     <Route path='/' element={<Cart/>}/>
     <Route path='/home' element={<Home/>} exact />
     <Route path='/payloaditems' element={<Payloaditems/>}/>
     </Routes>


     
    </BrowserRouter>
     
      
  </>
  )
}

export default App
