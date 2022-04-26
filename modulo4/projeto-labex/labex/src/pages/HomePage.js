import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import { goToListTripPages } from './coordinator'


const HomePage = () => {
    const navigate = useNavigate()
    
    return(
        <div>
        <div className='homePage'>
            <h2>Projeto Labex</h2>
        </div> 
        <div className='buttonHomePage'>   
        <button onClick={() => goToListTripPages(navigate)} > 
        Ver viagens
        </button>
        <button  > Área de admin</button>
        </div>     
        
        </div>

    )
}

export default HomePage