import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import PricingPlan from "./PricingPlan";
import  Contact  from "./Contact";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">


      {/* <Routes>
          <Route path="/Hero" element={<Hero/>} />
          <Route path="/Services" element={<Services/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/PricePlan" element={<PricingPlan/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes> */}
        
       <Hero/>
       <About/>
       <BMI/>
       <Services/>
       <Banner/>
       <Trainers/>
       <Popular/>
       <PricingPlan/>
       <Contact/>
      </div>
    </>
  );
};

export default Home;
