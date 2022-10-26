import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import Home from "../Screens/Home/HomeScreen"
import AboutScreen from "../Screens/About/AboutScreen"
import Especialidades from "../Screens/Especialidades/Especialidades"
import Videos from "../Screens/Videos/VideosScreen"
import Contact from "../Screens/Contact/ContactScreen"
// import Footer from '../components/Footer/Footer';

export default function Router (){
    
    return(
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' exact element ={ <Home/> }/>
        <Route path="/Sobre" element = { <AboutScreen/> }/>
        <Route path="/Especialidades" element = {<Especialidades/> }/>
        <Route path="/Videos" element = { <Videos/> }/>
        <Route path="/Contato" element = { <Contact/> }/>
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
    )
}