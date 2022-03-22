import TinderCard from 'react-tinder-card';
import React from "react";
import "./TinderCards.css";
import styled from 'styled-components';
import { Profiles } from './profile';
import "./index.css";


const CardDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ImgDiv = styled.div`
display: flex;
position: relative;
top:55px;
justify-content: center;
margin-bottom: 550px;
padding-right:200px;
width: 200px;
height: 430px;
background-size:  cover;
border-radius:10%;
box-shadow:1px 2px 20px ;
`;
const TinderCards = () => {
const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
};


return (
    <CardDiv>
{Profiles.map((person, index) => {
        return (
<TinderCard
            key={index}
            className="swipe"
            onSwipe={onSwipe}
            
            preventSwipe={["up", "down"]}
>
            <ImgDiv
            style={{ backgroundImage: `url(${person.image})` }}
            bg={person.image}
            >
            <h1
                style={{
                color: "white",
                position: "absolute",
                bottom: "0px",
                left: "20px",
                fontSize: "25px",
                fontWeight: "bold"
                }}
            >
                {person.name}
            </h1>
            </ImgDiv>
            
</TinderCard>
        );
    })}
    </CardDiv>
    );
};
export default TinderCards;
