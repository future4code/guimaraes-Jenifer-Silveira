import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn, NavText } from './styled'
import "../../App.css"

const NavBar = () => {
    return (
    <>
        <Nav >
            <NavLink to = "/">
                <img src={require("../../assets/Ef-logo.png")} style={{width:"265px", marginBottom:"-32px", marginLeft:"50px" }} alt= "logo"/>
            </NavLink>
                <Bars/>
            <NavMenu>
                <NavLink to="/Sobre" activestyle="true" className= "fancy-link">
                <NavText>Sobre</NavText>
                </NavLink>
                <NavLink  to="/Especialidades" activestyle="true">
                    <NavText>Especialidades</NavText>
                </NavLink>
                <NavLink  to="/Videos" activestyle="true">
                    <NavText>Videos</NavText>
                </NavLink>
                <NavLink  to="/Contato" activestyle="true">
                    <NavText>Contato</NavText>
                </NavLink>
            </NavMenu>
            <NavBtn>
                {/* <NavBtnLink type="text" id="txtBusca" placeholder="Buscar..."/> */}
            </NavBtn>
            
        </Nav>
    </>
    )
}

export default NavBar
