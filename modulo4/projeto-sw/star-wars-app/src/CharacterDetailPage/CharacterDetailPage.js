import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams} from "react-router-dom"
import { useEffect , useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls.js'
import { CharacterCard, LogoImage, CardArea, Responsividade, CharacterNameArea } from './styled.js';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToList } from '../routes/coordinator.js';
import Bio from "../assets/bio.png"

//import ActionAreaCard from '../components/CardComponent.js'

export default function CharacterDetailPage() {
  const [details, setDetails] = useState({})
  const [planet, setPlanet] = useState({})

  const params = useParams()
  const navigate = useNavigate();
 

  useEffect(() => {
    getDetail()
    getPlanet()
  }, [])

  const getDetail = () => {

    axios.get(`${BASE_URL}/people/${params.i}`)
    .then((res) => {
      setDetails(res.data)
    })
    .catch((err) => { console.log(err)})
  }  
  
  const getPlanet = () => {
    axios.get(`${BASE_URL}/planets`)
    .then((res) => {setPlanet(res.data.results)})
    .catch((err) => {console.log(err)})
  }

  return (
    <div>
      <Responsividade>
      <LogoImage src={Bio}/>

      <CharacterCard>
    <Card sx={{ maxWidth: 150}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100px"
          image="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          alt="luke skywalker"
        />
        <CardContent >
          <CharacterNameArea>
          <Typography gutterBottom variant="h6" component="div">
            {details.name}
          </Typography>
          </CharacterNameArea>

          <CardArea>
          <Typography variant="h8" color="text.secondary">
          <b>Ano de nascimento:</b> {details.birth_year}
          </Typography>
          <Typography variant="h8" color="text.secondary">
          <b>Altura:</b> {details.height}
          </Typography>
          <Typography variant="h8" color="text.secondary">
          <b>Espécie:</b> {details.hair_color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Planeta: </b>{planet.name}
          </Typography>
          </CardArea>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{backgroundColor: 'black', color:'#FFE81F'}} size="small" color="primary" onClick ={() => goToList(navigate)}>
          Voltar
        </Button>
      </CardActions>
    </Card>
    </CharacterCard>
    </Responsividade>
    </div>
  );
}
