import styles from './Card.module.css';
import { NavLink,useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';



function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}){
  


const [isFav,setIsFav] = useState(false);
const location = useLocation();

const handleFavorite = () => {
   if(isFav){
      setIsFav(false);
      removeFav(id);
   }
   else{
      setIsFav(true);
      addFav({id,name,species,gender,image,origin});
   }
}  


useEffect(() =>{
   myFavorites.forEach((fav) => {
      if(fav.id === id){
         setIsFav(true);
      }
   })
},[]);


return (
   
   <div className={styles.card}>
   
      
      {location.pathname !== '/favorites'?<button  className={styles.cardClose} onClick={()=>{onClose(id)}}>X</button>: <button className={styles.cardClose}></button>}
    
      <button className={styles.corazon} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
     
      <img className={styles.cardImg} src={image} alt='' /> 
     
     
      <div className={styles.cardText}>
          <NavLink to={`/detail/${id}`}>

          <div className={styles.dataContainer}>
          <h3 className={styles.Namee}>{name}</h3>
          <h4>{gender}</h4>
            </div>
         </NavLink>
           
      </div>   
   </div>
   
);

}

const mapStateToProps = (state)=>{  
   return{
      myFavorites:state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{ 
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
