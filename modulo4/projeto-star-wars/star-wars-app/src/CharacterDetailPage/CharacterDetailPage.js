import React from 'react'
import { CardTitle } from '../CharacterDetailPage/styled.js'
import {useNavigate} from "react-router-dom"

const CharacterDetailPage = () => {
  const navigator = useNavigate()
  return (
    <div>

      <CardTitle>Detalhes personagem</CardTitle>


      <button onClick={() => navigator("/")}>Voltar para pagina inicial</button>


    </div>
      
  )
}

export default CharacterDetailPage