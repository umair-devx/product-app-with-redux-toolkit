import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Products from '../pages/Products/Products'
import Cart from '../pages/Cart/Cart'
import ResponsiveAppBar from '../Coponents/Navbar'

const Routeconfig = () => {
  return (
  
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='Products' element={<Products />} />
          <Route path='Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
  
  )
}

export default Routeconfig
