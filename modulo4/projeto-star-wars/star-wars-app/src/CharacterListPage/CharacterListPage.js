import React from 'react'
//import {useNavigate} from "react-router-dom"
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import { CharacterCard, CardTitle } from '../CharacterDetailPage/styled.js'
import { useNavigate} from "react-router-dom"




const CharacterListPage = () => {
  const getCharacterList = useRequestData( [] ,`${BASE_URL}/people`)
  console.log(getCharacterList)
  const navigator = useNavigate()
  const characterList =  getCharacterList.results && getCharacterList.results.map((people) => 
  <button>{people.name}</button>) 


  
  return (
    <div >
      
      <CardTitle>STAR WARS</CardTitle>
      
      <CharacterCard onClick={() => navigator("/detalhes-personagens")}> 
        {characterList}
      </CharacterCard>
    
    </div>
  )
}

export default CharacterListPage