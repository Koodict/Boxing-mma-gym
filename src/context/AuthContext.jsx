import React, { useReducer, useEffect, createContext } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

export const AuthContext = createContext()

const initialState = { isAuth: false }

const reducer = ((state, action) => {

    switch (action.type) {

        case "LOGIN":
            return { isAuth: true, user: action.payload.user }
        case "LOGOUT":
            return { isAuth: false }

        default:
            return state
    }
})

export default function AuthContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                console.log("User Already Logged-In!")

                // Here we send "user" in "payload"
                dispatch({ type: "LOGIN", payload: { user } })
            } else {
                // User is signed out
                console.log("User is Logged-Out!")
            }
        });
    }, [])

    return (
        <AuthContext.Provider value={{ authState: state, ...state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}
