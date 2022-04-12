import React from 'react'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ErrorPage from "./pages/ErrorPage"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from './pages/auth'
import { useState } from 'react'


const Router = () =>{
    const [user, setUser] = useState("null");

    const login = (email, password) => {
        console.log("login", {email, password})
        setUser({id: "123", email})
        }

    const logout = () => {
        
        console.log("logout")
    }



    return(
        <BrowserRouter> 
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
    <Routes>

        <Route path ="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>   
        
        

    </Routes>  
    </AuthContext.Provider>
    </BrowserRouter>
    )
}

export default Router