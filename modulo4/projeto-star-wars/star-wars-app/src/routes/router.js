import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
import CharacterListPage from '../CharacterListPage/CharacterListPage';




export default function Router (){
    
    return(
        <BrowserRouter>
        
        <Routes>
            <Route index element={<CharacterListPage/>}/>
            <Route path = {"/detalhes/:i"} element={<CharacterDetailPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
