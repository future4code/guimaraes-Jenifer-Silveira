import React from 'react'
import ButtonAppBar from '../components/Header/ButtonAppBar'
import {useNavigate} from "react-router-dom"


const CharacterListPage = () => {
  const navigator = useNavigate()
  return (
    <div>

    <ButtonAppBar onClick={() => navigator("/lista-personagens") }/>
    <h1>teste</h1>
    
    
    </div>
  )
}

export default CharacterListPage