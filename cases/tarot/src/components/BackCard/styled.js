import styled from "styled-components"

export const CardBack = styled.div `
    height: 50vh;
    width: 17vw;
    border-radius: 5px;
    border:5px solid white;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.8);
    display: flex;
    justify-content:space-around;
    align-items: flex-end;
    border-bottom: 50px;
    float: left;
    
`;

export const CardText = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    /* align-content: space-around; */
    font-family: roboto;
    font-weight: 800;
    font-size:10px;
    color:black;
    text-align: center;
    position: relative;
    bottom:30%;
    /* text-shadow: 2px 2px 10px rgba(0,0,0,0.9); */
`