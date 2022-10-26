import styled from "styled-components"
import { NavLink as Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"



export const Nav = styled.nav`
/* background: #D8C2B2; */

height:90px;
width: 90%;
display:flex;
justify-content: space-between;
box-shadow: 0 5px 40px 0 black;
border-radius: 13px;
position: sticky;
left: 10vh;
margin-top: 25px;
margin-bottom: 45px;
z-index: 10;
`

export const NavLink = styled(Link)`
    color: #803129;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: bolder;
    cursor: pointer;
    &:hover,
    &:focus {
    color: #563532 ;
    }
    &.active{
        color: #c19994 ;
    }

    
    
`


export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 1000px){
        display: block;
        positio:absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -15rem;

    @media screen and (max-width: 1000px) {
        display:none;
        
    }
`
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right:24px;
    

    @media screen and (max-width: 1000px){
        display:none;
    }
`
export const NavBtnLink = styled.input`
border-radius: 4px;
background: transparent;
padding: 10px 22px;
font-weight: bolder;
font-size: medium;
color: black;
outline: none;
border: none;
cursor:pointer;

text-decoration: black;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #e4dad3;
    color: #cab3a6;
    }
`

export const NavText = styled.div`
    font-size: 21px;
    
    padding: 32px;
    
`

