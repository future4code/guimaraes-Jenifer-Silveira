//import React from 'react'
import axios from "axios"





export const getAllProfiles = () => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer/person", {
        headers: {
            Authorization: "jenifer-kindermann-guimaraes"
        }
    } )
    .then((response) => {
        console.log(response.data.result.list)
    })
    .catch((error)=>{
        console.log(error.response)
    })
}

getAllProfiles()