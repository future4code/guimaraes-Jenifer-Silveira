import React from "react";
import "./header.css";
import IconePerfil from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconeBotao from "@material-ui/core/Button";

function Header() {
    return(
        <div className="header">
            <IconeBotao>
            <IconePerfil className="header-icone" fontSize="large"/>
            </IconeBotao>
        <img className= "header-logo" 
        src="https://br.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png"alt="Logo tinder"/>
        <IconeBotao>
        <ForumIcon className="header-icone" fontSize="large"/>
        </IconeBotao>
        </div>

    )
}

export default Header

/*https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png*/