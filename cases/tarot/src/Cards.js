import axios from 'axios'
import React from 'react'
import { useState } from 'react'

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

    const cardsList = getCards.map((t) => {
    return (
    <div>
        
        <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        
        <img className='card-img' src='https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'alt='lalala'></img>'
        </div>
        <div className="flip-card-back">
        
        <p key={t.name}>{t.name}</p>
        
    </div>
    </div>
</div>
    </div>
    
    )
})
    return(
        <div>{cardsList}</div>
    )
}

export default FrontCard