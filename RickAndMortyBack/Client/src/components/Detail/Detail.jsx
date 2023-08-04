import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = '5d13682840d5.ea46b2043d2ab3aa18ab'

const Detail = () => {

const {id} = useParams();
const [character,setCharacter] = useState({})


useEffect(() => {
  axios(`http://localhost:3001/rickandmorty/characters/detail/${id}`)
  .then(response => response.data)
  .then((data) => {
     if (data.name) {
        setCharacter(data);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  });
  return setCharacter({});
}, [id])




  return (

    <div className={styles.container}>
    <img src={character.image} alt={character.name}/>
    <h1>Name: {character.name}</h1>
    <h2>Status: {character.status}</h2>
    <h2>Gender: {character.gender}</h2>
    <h2>Origin: {character.origin?.name}</h2>
</div>

  )
}

export default Detail