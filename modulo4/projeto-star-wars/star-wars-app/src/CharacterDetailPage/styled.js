import styled from "styled-components"


export const CharacterCard = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr;
    justify-items: center;
    align-items:space-between;
    
    
    
    `

export const Title = styled.h2`
    color:white;
    justify-items: center;

`
export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`
export const CharacterNameArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:-12px;
    margin-bottom:10px;
`

export const LogoImage = styled.img`
    margin-top:30px;
    margin-bottom:30px;
    position: relative;
    left:540px;
    width: 10vw;
    max-width: 350px;    
`

export const Responsividade = styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {

}
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {

}
@media screen and (min-device-width : 1200px) {

}

`
