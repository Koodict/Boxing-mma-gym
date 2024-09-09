import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './Home/Footer'
import Navbar from "../components/Navbar/Navbar"
import Home from './Home/Home'
import Services from './Home/Services'
import About from './Home/About'
import PricingPlan from './Home/PricingPlan'
import Contact from './Home/Contact'
import PaymentMethod from './paymentMethod/PaymentMethod'
import { AuthContext } from '../context/AuthContext'

const FrontendRoutes = () => {

  const { isAuth } = useContext(AuthContext)

  return (
    <>
      <Navbar className="fixed top-0 w-full" />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='Services' element={<Services />} />
          <Route path="About" element={<About />} />
          <Route path="PricingPlan" element={<PricingPlan />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Hero" element={<Home />} />
          <Route path="/payment" element={isAuth ? <PaymentMethod /> : <Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />

    </>
  )
}

export default FrontendRoutes
