import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams} from "react-router-dom"
import { useEffect , useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls.js'
//import ActionAreaCard from '../components/CardComponent.js'

export default function CharacterDetailPage() {
  const [details, setDetails] = useState({})

  const params = useParams()

  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = () => {

    axios.get(`${BASE_URL}/people/${params.i}`)
    .then((res) => {
      setDetails(res.data)
    })
    .catch((err) => { console.log(err)})
  }
  
  
  
  return (
    <div>

      <h1>Personagens</h1>
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          width="150px"
          image="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          alt="luke skywalker"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {details.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Ano de nascimento: {details.birth_year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
