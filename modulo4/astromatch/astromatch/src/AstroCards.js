import TinderCard from 'react-tinder-card';
import React from 'react';
import "../src/AstroCards.css"
import axios from "axios";
import { useEffect , useState} from "react";

    

function AstroCards () {

    const [profile, setProfile] = useState("")

    const getProfiles = (() => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer/person')
        .then((response) => {setProfile(response.data.profile)})
        .catch((error) => {console.log(error.message)})
    })
    useEffect(() => {getProfiles()}, [])

    
        const onSwipe = (direction) => {
        console.log("Voce passou para: " + direction);
        };

        return (
            <div className="Card">
            
            <TinderCard
                    
                    className="swipe"
                    key={profile.name}
                    onSwipe={onSwipe}
                    preventSwipe={["up", "down"]}
        >
                    <div className="Imagem"
                    style={{ backgroundImage: `url(${profile.photo})` }}
                    bg={profile.photo}
                    >
                    <h1 className='info-card'>            
                    {profile.name}{', '}{profile.age}
                    </h1>
                    
                    </div>
                    
        </TinderCard>
        
            </div>
            ); 
}

export default AstroCards
