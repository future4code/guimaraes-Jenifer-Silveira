import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from './constants/urls';

const Shuffle = () => {
  const [shuffleCard, setShuffleCard] = useState([]);

  const getRandomCard = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/cards`)
        setShuffleCard(response.data.cards)
    }catch(error){
        console.error(error)
    }
    }
    useEffect(()=>{
      getRandomCard()
    },[])

    
    

  
    
    console.log(shuffleCard)

  return (
    <div>
        <button>clique aqui</button>
        
    </div>
  )
}

export default Shuffle