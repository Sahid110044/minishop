
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import {HashRouter as Router, BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Payloaditems from './components/Payloaditems.jsx'





function App() {

  return (
    
    <>
 
   {/* <Cart/> */}


    <Router>
     <Header/>

     <Routes>
     <Route path='/' element={<Cart/>}/>
     <Route path='/home' element={<Home/>} exact />
     <Route path='/payloaditems' element={<Payloaditems/>}/>
     </Routes>


     
    </Router>
     
      
  </>
  )
}

export default App
