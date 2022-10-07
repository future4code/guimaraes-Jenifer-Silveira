import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../constants/urls'
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import styled from 'styled-components'

const Wrapper = styled.div `
    display: grid;
    grid-template-rows: auto ;
    

`


const Cards = () => {
    const [getCards, setGetCards] = useState({})

    const getAllCards = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/cards`)
            setGetCards(response.data.cards)
            
        } catch (error) {
            console.error(error)
            
        }
    }
    useEffect(() => {
        getAllCards();
        
    },[])
    console.log(getCards)

    const cardsList = getCards && getCards.length && getCards.map((tarotCard, i) => {
        return (
            <div>
                <Wrapper>
                <Card sx={{ maxWidth: 345, height: 500 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image="https://caotize.se/wp-content/uploads/2018/11/19-O-Sol-The-Sun-Tarot-Taro-Online-Magia-do-Caos-Caotize-se.jpg"
                    alt="tarot card"       
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <h2 key ={i}> {tarotCard.name} </h2>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* <p key={i}> {tarotCard.fortune_telling}</p>   */}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Wrapper>
            </div>
            )
    })
    return (
        <div>
            {cardsList}
        </div>
    )

  
}

export default Cards