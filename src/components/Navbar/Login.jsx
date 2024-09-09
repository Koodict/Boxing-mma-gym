import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase"



const initialState = { email: "", password: "" }

const Login = () => {


    const [state, setState] = useState(initialState)
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                setUser(uid)
                console.log("User is Already Signed in")
                // ...
            } else {
                console.log("User is SignOut")
            }
        });
    }, [])

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleLogin = e => {
        e.preventDefault()
        const { email, password } = state

        console.log(state)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("Signin Successful")
                // ...
            })
            .catch((error) => {
                console.error(error)
                // ..
            });

    }


    return (

        <div class="bg-gray-300 flex justify-center items-center h-screen">

            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div class="mb-4">
                        <label for="username" class="block text-gray-600">Email</label>
                        <input type="email" id="username" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onChange={handleChange} />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onChange={handleChange} />
                    </div>
                    <div class="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
                        <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
                    </div>
                    <div class="mb-6 text-blue-500">
                        <a href="#" class="hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div class="mt-6 text-blue-500 text-center">
                    <Link to="/" class="hover:underline">Sign up Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
