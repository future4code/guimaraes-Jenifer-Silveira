import styled from "styled-components"

export const Responsividade = styled.div`
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    }

    @media screen and (min-device-width : 1200px) {
    }

`


export const CharacterCard = styled.div`
    display: grid;
    grid-template-rows: 1.3fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin-left:12px;
    padding:50px;
    

    `
    export const CharacterNameArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    
`


export const Title = styled.h2`
    color:white;
    justify-items: center;
    

`

export const LogoImage = styled.img`
    margin-top:30px;
    margin-bottom:30px;
    position: relative;
    left:460px;
    width: 20vw;
    max-width: 350px;

    
`


