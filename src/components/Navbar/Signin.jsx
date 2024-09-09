import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"

const initialState = { email: "", age: "", weight: "", password: "" }

const Signin = () => {


  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleLogin = e => {
    e.preventDefault()
    // console.log(state)
    const { email, password } = state

    console.log(state)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User Registration Successful")
        
        // ...
      })
      .catch((error) => {
        console.error(error)
        // ..
      });

  }





  return (

    <>

      <div class="max-w-[280px] mx-auto">
        <div class="flex flex-col items-center">
          <br />
          <h2 class="mb-5 text-gray-200 font-mono font-bold text-xl">Sign Up</h2>
          <form className='w-[150%]' onSubmit={handleLogin}>
            <input type="email" class="w-full px-6 py-3 mb-2 border border-indigo-900 rounded-lg font-medium " placeholder="Email" name='email' onChange={handleChange} />
            <input type="text" class="w-full px-6 py-3 mb-2 border border-indigo-900 rounded-lg font-medium " placeholder="Your Age" name='age' onChange={handleChange} />
            <input type="text" class="w-full px-6 py-3 mb-2 border border-indigo-900 rounded-lg font-medium " placeholder="Your Weight" name='weight' onChange={handleChange} />

            <input type="password" class="w-full px-6 py-3 mb-2 border border-indigo-900 rounded-lg font-medium " placeholder="Password" name='password' onChange={handleChange} />
            {/* <input type="password" class="w-full px-6 py-3 mb-2 border border-indigo-900 rounded-lg font-medium " placeholder="Confirm password" /> */}
            <button class="bg-indigo-900 hover:bg-indigo-400 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Sign Up</button>
          </form>
          <p class="text-center mt-3 text-[14px] text-gray-200">Already have an account?..
            <Link to="/auth/login" class="text-blue-600 font-bold text-lg">Log In Here</Link>
          </p>
          <p class="text-center mt-3 text-[14px] text-gray-200">By clicking continue, you agree to our
            <a href="/terms" class="text-gray-200">Terms of Service</a> and <a href="/privacy" class="text-gray-200">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </>
  )
}

export default Signin
