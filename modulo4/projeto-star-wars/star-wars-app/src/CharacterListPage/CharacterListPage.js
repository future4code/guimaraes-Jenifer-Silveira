import React from 'react'
import { BASE_URL } from '../constants/urls'
import { useEffect , useState } from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { goToDetails } from '../routes/coordinator';
import "./CharacterListPage"
import { useNavigate } from 'react-router-dom';

const CharacterListPage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getPeople()
  },[])
      
  const getPeople = () => {
    axios.get(`${BASE_URL}/people`)
    .then((res) => {setData(res.data.results)})
    .catch((err) => {console.log(err)})
  }

  console.log(data)



  const listCharacter = data.map((p, i) => {

    return (
      <div className='card-style'>

      <Card  sx={{ maxWidth: 150 }}key={i} onClick={() => goToDetails(navigate, i+1)} >
      <CardActionArea >
        <CardMedia>
        
          <img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} alt={`${i+1}`} width="150px" />
          
        </CardMedia>
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {p.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      
    )
  })

  return (
    <div>
    <h2>STAR WARS</h2>
    {listCharacter}
    </div>
  )
  

}

export default CharacterListPage