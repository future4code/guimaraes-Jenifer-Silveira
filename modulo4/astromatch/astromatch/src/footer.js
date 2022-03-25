import React from "react";
import "./footer.css";
import CloseIcon from "@material-ui/icons/Close"
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconeBotao from "@material-ui/core/Button";

function Footer() {
    return(
        <div className="footer">
        
        <IconeBotao className="footer-icone">
        <CloseIcon  />    
        </IconeBotao>   
        
        <IconeBotao>
        <FavoriteIcon className="footer-icone" />    
        </IconeBotao>  
        
        </div>

    )
}

export default Footer