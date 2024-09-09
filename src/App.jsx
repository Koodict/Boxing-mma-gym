import React from "react";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/Home/About";
import Services from "./pages/Home/Services";
import PricingPlan from "./pages/Home/PricingPlan";
import Contact from "./pages/Home/Contact";
import Hero from "./pages/Home/Hero";
import Footer from "./pages/Home/Footer";

import Routess from "./pages/Routess";
import Signin from "./components/Navbar/Signin";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">


        <AuthContextProvider>
          <Routess />
        </AuthContextProvider>




      </div>
    </>
  );
}

export default App;
