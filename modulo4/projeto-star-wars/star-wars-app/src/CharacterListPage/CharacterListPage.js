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
import { useNavigate } from 'react-router-dom';
import { CharacterCard, LogoImage,  CharacterNameArea } from './styled';
import Logo from "../assets/sw-sem-bg.png"


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
      
      
      <Card  sx={{ maxWidth: 150, maxHeight:255 }}key={i} onClick={() => goToDetails(navigate, i+1)} >
      <CardActionArea >

        <CardMedia>
        
          <img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} alt={`${i+1}`} width="150px" />
          
        </CardMedia>
        
        <CardContent sx={{maxWidth:300, maxHeight: 300}}>
          <CharacterNameArea>
          <Typography  gutterBottom variant="h8" position="center" component="div">
            {p.name}
          </Typography>
          </CharacterNameArea>
        </CardContent>
      </CardActionArea>
    </Card>
    
    
      
    )
  })

  return (
    <div>
    <LogoImage src={Logo}/>

    <CharacterCard>
    {listCharacter}
    </CharacterCard>
    </div>
  )
  

}

export default CharacterListPage