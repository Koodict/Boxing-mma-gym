import React, { useContext } from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Services from './Home/Services'
import About from './Home/About'
import PricingPlan from './Home/PricingPlan'
import Contact from './Home/Contact'
import Signin from '../components/Navbar/Signin'
import Footer from './Home/Footer'
import Navbar from "../components/Navbar/Navbar"
import NavRoutes from './NavRoutes'
import FrontendRoutes from './FrontendRoutes'
import { AuthContext } from '../context/AuthContext'
import LoadWrap from "./LoadWrap"
import PaymentMethod from './paymentMethod/PaymentMethod'

const Routess = () => {

  const { isAuth } = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route path='/*' element={<FrontendRoutes />} />
        <Route path="/auth/*" element={isAuth ? <Navigate to="/" /> : <NavRoutes />} />
        {/* <Route path="/payment" element={isAuth ? <PaymentMethod /> : <Navigate to="/" />} /> */}
      </Routes>
    </>
  )
}

export default Routess
