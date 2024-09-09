import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../components/Navbar/Signin'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Navbar/Products'
import Footer from '../pages/Home/Footer'
import Analytics from '../components/Navbar/Analytics'
import Login from '../components/Navbar/Login'

const NavRoutes = () => {
  return (
  <>
    <Navbar/>
      <Routes>
        <Route path='/'>

            <Route path='signin' element={<Signin/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='analytics' element={<Analytics/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='registration' element={<Signin/>}/>

        </Route>
      </Routes>
      <Footer/>
  </>
   
  )
}

export default NavRoutes
