import React from 'react'

//import {useNavigate} from "react-router-dom"
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'



const CharacterListPage = () => {
  const getCharacterList = useRequestData( [] ,`${BASE_URL}/people`)
  console.log(getCharacterList)
  
  const characterList =  getCharacterList.results && getCharacterList.results.map((people) => 
  
  
  <button>{people.name}</button>

)
  
  return (
    <div>

        
    {characterList}
    
    
    </div>
  )
}

export default CharacterListPage