import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

const Cards = ({characters,onClose}) => {

   


   return (
      
   <div style={{display: "flex", marginTop : "5%" , justifyContent: "space-between", marginLeft:"40px", marginRight:"40px", flexWrap: "wrap" }}>  
      
      {
      
         characters.map(({id,name,status,species,gender,origin,image}) =>{
         return (
            <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={onClose}
            />
         )})

         
      }

   </div>

   )
}

export default Cards;
