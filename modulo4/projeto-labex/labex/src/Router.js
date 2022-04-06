import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import LoginPage from './LoginPage'
import TripDetailsPage from './TripDetailsPage'

export default function Router (){
    return(
        <BrowserRouter>
        <Routes>

            <Route index element={<LoginPage/>}/>
            <Route path = {"detalhes-viagem"} element={<TripDetailsPage/>}/>
            <Route path={"*"} element={<ErrorPage/>}/>

        </Routes>
        </BrowserRouter>

    )
}