import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { CardFront } from './styled'
import { useEffect } from 'react'


const FrontCard = () => {
  const url = "https://rws-cards-api.herokuapp.com/api/v1/"

  const[getCards, setGetCards] = useState([])
  const getAllCards = async () => {
    try{
      const response = await axios.get(`${url}/cards`)
      setGetCards(response.data.cards)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    getAllCards();
  }, [])
  console.log(getCards)

  const cardsList = getCards.map((t, i) => {
    return (
    <div>
      {/* <Img src='https://picsum.photos/400/400?a=1' alt="shdiaushud"></Img> */}
      <CardFront><p key={i}>{t.name}</p></CardFront>
    </div>
    
  )
})
    return(
      <div>{cardsList}</div>
  )
}

export default FrontCard