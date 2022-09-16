import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';


const CardContainer = styled.div`
    position: absolute;
    top:12.5rem;
    left:40%;
    

`

const FrontCard = () => {
    const request = axios.get("./data.json" , {
        headers: {
            "content-type": "application/json",
            "Authorization": "application/json"
        }
    })
        request.then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })

    return (
        <CardContainer>
            <Card sx={{ maxWidth: 320, height: 430 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="430"
                image="https://picsum.photos/400/400?a=1"
                alt="tarot card"
            />
            </CardActionArea>
            </Card>
        </CardContainer>
    )
}

export default FrontCard