import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Register from '../pages/Register/Register'
import Products from '../pages/Products/Products'
import Cart from '../pages/Cart/Cart'
import ResponsiveAppBar from '../Coponents/Navbar'
// import store from './reduxconfig/store/store'
// import { Provider } from 'react-redux'
const Routeconfig = () => {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='Products' element={<Products />} />
          <Route path='Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  )
}

export default Routeconfig
