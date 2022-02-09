import React from 'react'


function reproduzVideo (){
    alert('O video está sendo reproduzido')
}

const VideoCard = (props) => {
    return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src={props.imagem} alt =""/>
    <h4>{props.titulo}</h4>
        
        
    </div>
    )
}

export default VideoCard